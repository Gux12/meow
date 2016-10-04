<template>
    <div class="slideout">
        <nav id="menu" class="menu">
                <header class="menu-header">
                    <span class="menu-header-title">Meow<img src="../../../src/assets/logo.png" alt="logo" style="width:100%"/></span>
                </header>
            <section class="menu-section">
                <h3 class="menu-section-title">菜单</h3>
                <ul class="menu-section-list">
                    <li><router-link to="/introduction">简介</router-link></li>
                    <li><router-link to="/notice">公告栏</router-link></li>
                    <li><router-link to="/document">文档共享</router-link></li>
                    <li><router-link to="/management">项目管理</router-link></li>
                    <li><router-link to="/daily">小组日常</router-link></li>
                </ul>
            </section>
        </nav>
        <main id="panel" class="panel">
            <header class="panel-header">
                <button class="js-slideout-toggle btn-hamburger hamburger hamburger--slider" type="button">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
                <h1 class="title">Meow.Tsinghua</h1>
            </header>
            <div class="container">
                <!--<GroupIntroduction/>-->
                <!--<GroupNotice/>-->
                <!--<GroupDocumentExchange/>-->
                <router-view
                        class="view"
                        keep-alive
                        transition
                        transition-mode="out-in">
                </router-view>
            </div>
        </main>
    </div>
</template>

<script>
    import Vue from "vue"
    import slideOut from "slideout"
    import $ from "jquery"
    export default {
        data () {
            return {
                msg: 'Hello Vue 你好!'
            }
        },
        mounted: function(){
            var slideout = new slideOut({
                'panel': $('#panel')[0],
                'menu': $('#menu')[0],
                'padding': 256,
                'tolerance': 100,
                'side': 'right'
            });
            document.querySelector('.js-slideout-toggle').addEventListener('click', function() {
                $('.js-slideout-toggle').toggleClass('is-active');
                slideout.toggle();
            });

            document.querySelector('.menu').addEventListener('click', function(eve) {
                if (eve.target.nodeName === 'A') { slideout.close(); $('.js-slideout-toggle').removeClass('is-active');}
            });
        },
//        components:{
//            'GroupIntroduction': GroupIntroduction,
//            'GroupNotice': GroupNotice,
//            'GroupDocumentExchange': GroupDocumentExchange,
//        }
    }
</script>

<style>
    @import "../../assets/css/docs.min.css";
    @import "./SidebarScroll.css";
    @import "../../../node_modules/hamburgers/dist/hamburgers.min.css";
    @import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
    @import "../../../node_modules/bootstrap/dist/css/bootstrap-theme.min.css";
</style>
