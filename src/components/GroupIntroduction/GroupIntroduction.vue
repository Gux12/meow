<template>
    <div>
        <h1 id="scrollspy" class="page-header">小组介绍 <small>Introduction</small></h1>
        <div class="bs-callout bs-callout-danger">
            <h4>Meow</h4>
            <p>喵，拼音<code>miāo</code> 部首：<code>口</code> ，象声词，用来形容猫的叫声，例如：喵，喵，猫来了。</p>
        </div>
            <div id="gux-carousel-example-captions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#gux-carousel-example-captions" data-slide-to="0" class=""></li>
                    <li data-target="#gux-carousel-example-captions" data-slide-to="1" class=""></li>
                    <li data-target="#gux-carousel-example-captions" data-slide-to="2" class="active"></li>
                </ol>
                <div class="carousel-inner" role="listbox">
                    <div class="item active">
                        <img src="./assets/img/WechatIMG1.jpeg" data-holder-rendered="true">
                        <div class="carousel-caption">
                            <h3>9月30日 星期五</h3>
                            <p>今天进行了激烈的讨论</p>
                        </div>
                    </div>
                    <div class="item">
                        <img src="./assets/img/WechatIMG1.jpeg" data-holder-rendered="true">
                        <div class="carousel-caption">
                            <h3>9月30日 星期五</h3>
                            <p>今天进行了激烈的讨论</p>
                        </div>
                    </div>
                    <div class="item">
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
