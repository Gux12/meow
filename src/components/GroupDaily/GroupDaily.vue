<template>
    <div>
        <h1 id="scrollspy" class="page-header">日常工作和讨论</h1>
        <!-- Nav tabs -->
        <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active"><a href="#home" role="tab" data-toggle="tab"><h4>照片</h4></a></li>
            <li role="presentation"><a href="#profile" role="tab" data-toggle="tab"><h4>录像</h4></a></li>
        </ul>

        <!-- Tab panes -->
        <div class="tab-content" style="margin-top: 20px;">
            <div role="tabpanel" class="tab-pane active" id="home">
                <div class="bs-docs-section">
                    <div id="gux-carousel-example-captions" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#gux-carousel-example-captions" data-slide-to="0" class=""></li>
                            <li data-target="#gux-carousel-example-captions" data-slide-to="1" class=""></li>
                            <li data-target="#gux-carousel-example-captions" data-slide-to="2" class=""></li>
                            <li data-target="#gux-carousel-example-captions" data-slide-to="3" class="active"></li>
                        </ol>
                        <div class="carousel-inner" role="listbox">
                           <div class="item active" style="overflow:hidden;">
                                <img src="./assets/img/WechatIMG4.jpeg" data-holder-rendered="true">
                                <div class="carousel-caption">
                                    <h3>9月28日 星期三</h3>
                                    <p>今天对需求分析进行了激烈的讨论，并确定了组内分工</p>
                                </div>
                            </div>
                            <div class="item" style="overflow:hidden;">
                                <img src="./assets/img/WechatIMG2.jpeg" data-holder-rendered="true">
                                <div class="carousel-caption">
                                    <h3>9月30日 星期五</h3>
                                    <p>今天对STORY进行分解与描述</p>
                                </div>
                            </div>
                            <div class="item" style="overflow:hidden;">
                                <img src="./assets/img/WechatIMG1.jpeg" data-holder-rendered="true">
                                <div class="carousel-caption">
                                    <h3>9月30日 星期五</h3>
                                    <p>今天确定了Product Backlog</p>
                                </div>
                            </div>
                            <div class="item" style="overflow:hidden;">
                                <img src="./assets/img/WechatIMG3.jpeg" data-holder-rendered="true">
                                <div class="carousel-caption">
                                    <h3>9月30日 星期五</h3>
                                    <p>今天确定了Product Backlog</p>
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
            </div>
            <div role="tabpanel" class="tab-pane" id="profile">
                <!-- 16:9 aspect ratio -->
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/3rDXVdqnPiw" frameborder="0" allowfullscreen></iframe>
                </div><br>
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/H16nUWsHCTs" frameborder="0" allowfullscreen></iframe>
                </div><br>
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/hlGT_WCUbCQ" frameborder="0" allowfullscreen></iframe>
                </div><br>
            </div>
        </div>

        <h1 class="page-header">事件记录</h1>
        <div class="bs-callout bs-callout-info">
            <h4>2016年9月28日</h4>
            <p>小组召开第一次讨论会议，进行了需求分析，明确了网站构架。同时进行了组内分工。</p>
        </div>
        <div class="bs-callout bs-callout-info">
            <h4>2016年9月30日</h4>
            <p>小组进行了SCRUM会议，对STORY进行了分解和描述。</p>
        </div>
        <div class="bs-callout bs-callout-info">
            <h4>2016年10月1日-10月5日</h4>
            <p>小组成员分头学习前端技术，编写各部分网站，通过github管理项目工程。小组成员在群里相互交流技术问题。</p>
        </div>
        <div class="bs-callout bs-callout-info">
            <h4>2016年10月6日</h4>
            <p>小组进行了SCRUM会议，对目前进度进行了简短汇报和总结，讨论网站的改进和完善，同时开始准备Pre。</p>
        </div>
        <div class="bs-callout bs-callout-info">
            <h4>2016年10月8日</h4>
            <p>小组进行了最终总结会议，对网站进行了完整演示，完成pre报告并进行演示。</p>
        </div>
    </div>
        
</template>
<style>
    @import "GroupDaily.css";
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        }
    }
</script>
