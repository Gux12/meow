<template>
    <div>
        <h1 id="scrollspy" class="page-header">文档交流 <small>Document Exchange in Group</small></h1>
        <div class="bs-callout bs-callout-warning">
            <h4>小组的文档交流可以在下面进行</h4>
            <p>小组成员可以上传自己需要共享的文件，其他小组成员可以在其上下载查看</p>
        </div>
        <form id="gux-fileupload-form" class="form-inline">
            <div class="form-group">
                <a class="btn btn-success" id="gux-file-a">选择文件<input type="file" name="upfile" multiple id="gux-fileupload-file"/></a>
                <button class="btn btn-default" id="gux-fileupload-submit-btn">上传</button>
            </div>
            <div class="form-group">
                <label class="sr-only" for="gux-filename">filename</label>
                <input class="form-control" id="gux-filename" disabled placeholder="请选择文件">
            </div>
        </form>
        <table class="table" id="gux-file-table">
            <caption>文件列表</caption>
            <thead>
            <tr>
                <th>#</th>
                <th>文件名</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <!--<tr>-->
                <!--<td>1</td>-->
                <!--<td>Mark</td>-->
                <!--<td>Otto</td>-->
            <!--</tr>-->
            </tbody>
        </table>
    </div>
</template>
<style>
    .bar {
        height: 18px;
        background: green;
    }
    #gux-file-a{
        display:inline-block;
        position:relative;
        overflow:hidden;
    }
    /*#gux-file-a:hover{*/
        /*background:green;*/
    /*}*/
    #gux-fileupload-file{
        position:absolute;
        right:0;
        top:0;
        font-size:100px;
        opacity:0;
        filter:alpha(opacity=0);
    }
</style>
<script>
    var $ = window.$ = window.jQuery = require('jquery');
    var bootstrap = require('bootstrap');
    export default{
        data(){
            return{
            }
        },
        mounted:function() {
            $.ajax({
                url:'/getlist',
                type: 'get',
                dataType: 'json',
                success:function(data){
                    var i=1;
                    for (var filename of data) {
                        $('#gux-file-table').find('tbody').append('<tr><td>'+i+'</td><td>'+filename+'</td><td><a class="btn btn-info" href="/files/'+filename+'">下载</a></td></tr>');
                        i++;
                    }
                },
                error:function(data){
                    alert('无法访问服务器文件列表！');
                }
            })

            $("#gux-fileupload-submit-btn").click(()=>{
                var filename = $(this).find("#gux-fileupload-file").val();
                if(filename != 'undefine' && filename == ''){
                    var formData = new FormData($("#gux-fileupload-form")[0]);
                    $.ajax({
                        url : "/file/uploading",
                        type : "post",
                        data : formData,
                        async: false,
                        cache: false,
                        contentType: false,
                        processData: false,
                        success : function(data) {
                            $('#gux-file-table').find('tbody')[0].innerHTML = '';
                            var i=1;
                            for (var filename of data) {
                                $('#gux-file-table').find('tbody').append('<tr><td>'+i+'</td><td>'+filename+'</td><td><a class="btn btn-info" href="/files/'+filename+'">下载</a></td></tr>');
                                i++;
                            }
                        },
                    });
                }else{
                    console.log($(this).find("#gux-fileupload-file").val());
                    alert('上传文件不能为空！');
                }

            });

            $('#gux-fileupload-file').change(function(){
                $('#gux-filename')[0].value = $(this).val();
            })
        }
    }
</script>
