<template>
    <div>
        <h1 id="scrollspy" class="page-header">小组介绍 <small>Introduction</small></h1>
        <div class="bs-callout bs-callout-info">
            <h4>Meow</h4>
            <p>喵，拼音<code>miāo</code> 部首：<code>口</code> ，象声词，用来形容猫的叫声，例如：喵，喵，喵，猫来了。</p>
        </div>
        <div class="bs-docs-section">
            <div id="gux-carousel-example-captions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#gux-carousel-example-captions" data-slide-to="0" class=""></li>
                    <li data-target="#gux-carousel-example-captions" data-slide-to="1" class=""></li>
                    <li data-target="#gux-carousel-example-captions" data-slide-to="2" class="active"></li>
                </ol>
                <div class="carousel-inner" role="listbox">
                    <div class="item active" style="overflow:hidden;">
                        <img src="./assets/img/WechatIMG1.jpeg" data-holder-rendered="true">
                        <div class="carousel-caption">
                            <h3>9月30日 星期五</h3>
                            <p>今天进行了激烈的讨论</p>
                        </div>
                    </div>
                    <div class="item" style="overflow:hidden;">
                        <img src="./assets/img/WechatIMG1.jpeg" data-holder-rendered="true">
                        <div class="carousel-caption">
                            <h3>9月30日 星期五</h3>
                            <p>今天进行了激烈的讨论</p>
                        </div>
                    </div>
                    <div class="item" style="overflow:hidden;">
                        <img src="./assets/img/WechatIMG1.jpeg" data-holder-rendered="true">
                        <div class="carousel-caption">
                            <h3>9月30日 星期五</h3>
                            <p>今天进行了激烈的讨论</p>
                        </div>
                    </div>
                </div>
                <a class="left carousel-control" href="#gux-carousel-example-captions" role="button" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#gux-carousel-example-captions" role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="thumbnail">
                    <div style="height:480px;overflow:hidden"><img data-src="holder.js/100%" src="./assets/collaborations/guxiang.jpeg" data-holder-rendered="true" style="width: 100%; display: block;">
                    </div>
                    <div class="caption">
                        <h3>顾乡(Gavin Gu)</h3>
                        <p>清华大学自动化系研究生，专业方向企业信息化系统集成，电商国家重点实验室，喜好唱歌、前端开发，目标大号有个妖刀姬</p>
                        <p><a href="#" class="btn btn-danger" role="button">喜欢 <span class="badge">4</span></a> <a href="#" class="btn btn-default" role="button">不喜欢 <span class="badge">0</span></a></p>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="thumbnail">
                    <div style="height:480px;overflow:hidden"><img data-src="holder.js/100%" src="./assets/collaborations/puyudi.jpeg" data-holder-rendered="true" style="width: 100%; display: block;">
                    </div>
                    <div class="caption">
                        <h3>蒲宇狄(Best Riven Dagou Di)</h3>
                        <p>清华大学自动化系研究生，专业方向企业信息化系统集成，清华第一瑞雯，世界第一阴阳师肝帝</p><br>
                        <p><a href="#" class="btn btn-danger" role="button">喜欢 <span class="badge">4</span></a> <a href="#" class="btn btn-default" role="button">不喜欢 <span class="badge">0</span></a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    @import "GroupIntroduction.css";
</style>
<script>
    var $ = window.$ = window.jQuery = require('jquery');
    var bootstrap = require('bootstrap');
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        }
    }
</script>
