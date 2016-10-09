<template>
    <div>
        <h1 id="scrollspy" class="page-header">小组介绍 <small>Introduction</small></h1>
        <div class="bs-callout bs-callout-info">
            <h4>Meow</h4>
            <p>喵，拼音<code>miāo</code> 部首：<code>口</code> ，象声词，用来形容猫的叫声，例如：喵，喵，猫来了。<br>组名表明我们都喜欢猫🐱，更表明我们有猫一样敏锐和细心。</p>
            <h4>我们是谁？</h4>
            <p>我们一群富有活力，充满梦想，热爱计算机尤其是软件工程的年轻人。我们追求技术巅峰，挑战思维极限，创意和灵感是我们最宝贵的财富。<br>我们没有非常精湛高超的技术，但我们有刻苦钻研的精神。我们没有庞大的成员阵容，但我们有团结友爱的心。<br>我们取长补短，互帮互助，我们虽然不是什么高手，但我们有着一颗对技术严谨，且好奇的心！</p>
        </div>
        <div class="row">
            <div class="col-xs-10 col-sm-6 col-md-4">
                <div class="thumbnail">
                    <div class="gux-image-container"><img class="img-responsive img-rounded" src="./assets/collaborations/nanyixuan.jpg" data-holder-rendered="true">
                    </div>
                    <div class="caption">
                        <h3>南艺璇</h3>
                        <div class="gux-content"><p>自硕161班，CIMS所，师从柴跃廷老师。曾和顾老师一同为柴老师的新一代电子商务平台设计和开发项目做研究，努力学习产品经理、美工和码农的技能，之后将把重点转向前端开发，希望和大家共同学习</p></div>
                        <p><a href="#" class="btn btn-danger" role="button">喜欢 <span class="badge">186</span></a> <a href="#" class="btn btn-default" role="button">不喜欢 <span class="badge">3</span></a></p>
                    </div>
                </div>
            </div>
            <div class="col-xs-10 col-sm-6 col-md-4">
                <div class="thumbnail">
                    <div class="gux-image-container"><img class="img-responsive" src="./assets/collaborations/guxiang.jpg" data-holder-rendered="true">
                    </div>
                    <div class="caption">
                        <h3>顾乡(Gavin Gu)</h3>
                        <div class="gux-content"><p>清华大学自动化系研究生，专业方向企业信息化系统集成，电商国家重点实验室;喜好唱歌、前端开发;项目中主要负责网页框架搭建，组内文档共享模块</p></div>
                        <p><a href="#" class="btn btn-danger" role="button">喜欢 <span class="badge">163</span></a> <a href="#" class="btn btn-default" role="button">不喜欢 <span class="badge">5</span></a></p>
                    </div>
                </div>
            </div>
            <div class="col-xs-10 col-sm-6 col-md-4">
                <div class="thumbnail">
                    <div class="gux-image-container"><img class="img-responsive" src="./assets/collaborations/puyudi.jpeg" data-holder-rendered="true">
                    </div>
                    <div class="caption">
                        <h3>蒲宇狄(Best Riven)</h3>
                        <div class="gux-content"><p>清华大学自动化系研究生，专业方向企业信息化系统集成；项目中主要负责网页框架搭建，组内文档共享模块</p></div>
                        <p><a href="#" class="btn btn-danger" role="button">喜欢 <span class="badge">143</span></a> <a href="#" class="btn btn-default" role="button">不喜欢 <span class="badge">2</span></a></p>
                    </div>
                </div>
            </div>
            <div class="col-xs-10 col-sm-6 col-md-4">
                <div class="thumbnail">
                    <div class="gux-image-container"><img class="img-responsive" src="./assets/collaborations/zhangxueheng.jpg" data-holder-rendered="true">
                    </div>
                    <div class="caption">
                        <h3>张学恒(Michael Zhang)</h3>
                        <div class="gux-content"><p>清华大学自动化系研究生，专业方向控制理论与控制工程；喜欢游泳、读书;项目中主要负责任务分配、整体协调、小组介绍模块</p></div>
                        <p><a href="#" class="btn btn-danger" role="button">喜欢 <span class="badge">135</span></a> <a href="#" class="btn btn-default" role="button">不喜欢 <span class="badge">5</span></a></p>
                    </div>
                </div>
            </div>
            <div class="col-xs-10 col-sm-6 col-md-4">
                <div class="thumbnail">
                    <div class="gux-image-container"><img class="img-responsive" src="./assets/collaborations/xuzhiyong.jpeg" data-holder-rendered="true">
                    </div>
                    <div class="caption">
                        <h3>徐支勇(Zyong Xu)</h3>
                        <div class="gux-content"><p>清华大学自动化系研究生，专业方向企业信息化系统集成，喜好不学习加运动，立志于成为不写代码的程序员</p></div>
                        <p><a href="#" class="btn btn-danger" role="button">喜欢 <span class="badge">130</span></a> <a href="#" class="btn btn-default" role="button">不喜欢 <span class="badge">2</span></a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    @import "GroupIntroduction.css";
    .gux-image-container {
        width: 100%;
        height: 0;
        padding-bottom: 140%;
        overflow: hidden;
    }
    .gux-content {
        width: 100%;
        height: 0;
        padding-bottom: 40%;
        overflow: hidden;
    }
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
