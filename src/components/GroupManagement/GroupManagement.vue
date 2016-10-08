<template>
    <div>
        <h1 class="page-header">项目文档管理</h1>
        <div class="bs-callout bs-callout-warning">
            <h4>小组的项目文档在下面</h4>
            <p>小组成员而已下载项目文档查看</p>
        </div>
        <h4 class="page-header">需求分析</h4>
        <div class="row" id="gux-doc-panel1">
            <a v-for="filenames in filenames1" class="gux-doc col-md-2 col-sm-4 col-xs-4" :href="dir[0] + '/' + filenames" target="_blank"><img src="./assets/doc.ico" class="img-responsive" style="margin:0 auto"><p>{{filenames}}</p></a>
        </div>
        <h4 class="page-header">系统设计</h4>
        <div class="row" id="gux-doc-panel2">
            <a v-for="filenames in filenames2" class="gux-doc col-md-2 col-sm-4 col-xs-4" :href="dir[1]" target="_blank"><img src="./assets/doc.ico" class="img-responsive" style="margin:0 auto"><p>{{filenames}}</p></a>
        </div>
        <h4 class="page-header">界面设计</h4>
        <div class="row" id="gux-doc-panel3">
            <a v-for="filenames in filenames3" class="gux-doc col-md-2 col-sm-4 col-xs-4" :href="dir[2]" target="_blank"><img src="./assets/doc.ico" class="img-responsive" style="margin:0 auto"><p>{{filenames}}</p></a>
        </div>
        <h4 class="page-header">会议记录</h4>
        <div class="row" id="gux-doc-panel4">
            <a v-for="filenames in filenames4" class="gux-doc col-md-2 col-sm-4 col-xs-4" :href="dir[3]" target="_blank"><img src="./assets/doc.ico" class="img-responsive" style="margin:0 auto"><p>{{filenames}}</p></a>
        </div>
</template>
<style>
    @import "GroupManagement.css";
    .gux-doc{
        text-decoration:none;
        text-align: center;
        transition: 0.3s all;
    }
    .gux-doc:hover{
        text-decoration:none;
        opacity:0.6;
    }
</style>
<script>
    var $ = window.$ = window.jQuery = require('jquery');
    var bootstrap = require('bootstrap');
    export default{
        data(){
            return{
                urls:["/getgroupfiles/ra","/getgroupfiles/sd","/getgroupfiles/ui","/getgroupfiles/minutes"],
                dir:["/Groupfiles/RequirementAnalysis","/Groupfiles/SystemDesign","/Groupfiles/UI","/Groupfiles/Minutes"],
                filenames1:[],
                filenames2:[],
                filenames3:[],
                filenames4:[]
            }
        },
        mounted: function () {
            var urls =["/getgroupfiles/ra","/getgroupfiles/sd","/getgroupfiles/ui","/getgroupfiles/minutes"];
            var dir = ["/Groupfiles/RequirementAnalysis","/Groupfiles/SystemDesign","/Groupfiles/UI","/Groupfiles/Minutes"];
            var fi = this.$data;
            var i = 1;
            for (var url of urls){
                $.ajax({
                    url: url,
                    type: 'get',
                    dataType: 'json',
                    success:function(data){
                        eval('fi.filenames' + i + ' = data');
                        i++;
                    },
                    error:function(data){
                        alert('无法访问服务器文件列表！');
                        i++;
                    }
                })

            }
        }
    }
</script>
