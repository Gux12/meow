<template>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">公告栏</h3>
            </div>
            <div class="list-group">
                <a class="list-group-item notice-item" data-target="#xzy-notice1">
                    <h4 class="list-group-item-heading">List group item heading <span class="label label-default">9月20日</span> <span class="label label-danger">重要</span></h4>
                    <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                </a>
                <div class="panel-body xzy-notice-body" id="xzy-notice1">
                    Basic panel example
                </div>
                <a class="list-group-item notice-item" data-target="#xzy-notice2">
                    <h4 class="list-group-item-heading">List group item heading <span class="label label-default">9月20日</span> <span class="label label-danger">重要</span></h4>
                    <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                </a>
                <div class="panel-body xzy-notice-body" id="xzy-notice2">
                    Basic panel example
                </div>
                <a class="list-group-item notice-item" data-target="#xzy-notice3">
                    <h4 class="list-group-item-heading">List group item heading <span class="label label-default">9月20日</span> <span class="label label-danger">重要</span></h4>
                    <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                </a>
                <div class="panel-body xzy-notice-body" id="xzy-notice3">
                    Basic panel example
                </div>
            </div>
        </div>
</template>
<style>
    @import "GroupNotice.css";
    .xzy-notice-body{
        display: none;
    }
    .notice-item{
        cursor: pointer;
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
        },
        mounted: function(){
            $('.notice-item').click(function (e) {
                let name = $(this)[0].getAttribute("data-target");
                if($(name).css("display") === "none"){
                    $(name).show(300);
                }else {
                    $(name).hide(300);
                }
            });
        }
    }
</script>
