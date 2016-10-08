<template>
    <div>
        <h1 id="scrollspy" class="page-header">文档交流 <small>Document Exchange in Group</small></h1>
        <div class="bs-callout bs-callout-warning">
            <h4>小组的文档交流可以在下面进行</h4>
            <p>小组成员可以上传自己需要共享的文件，其他小组成员可以在其上下载查看</p>
        </div>
        <input id="fileupload" type="file" name="files[]" data-url="server/php/" multiple>
        <div id="progress">
            <div class="bar" style="width: 0%;"></div>
        </div>
    </div>
</template>
<style>
    .bar {
        height: 18px;
        background: green;
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
            $(function () {
                $('#fileupload').fileupload({
                    dataType: 'json',
                    done: function (e, data) {
                        $.each(data.result.files, function (index, file) {
                            $('<p/>').text(file.name).appendTo(document.body);
                        });
                    },
                    progressall: function (e, data) {
                        var progress = parseInt(data.loaded / data.total * 100, 10);
                        $('#progress .bar').css(
                                'width',
                                progress + '%'
                        );
                    }
                });
            });
        }
    }
</script>
