<template>
    <div class="slideout">
        <nav id="menu" class="menu">
                <header class="menu-header">
                    <span class="menu-header-title">Meow<img src="/src/assets/logo.png" alt="logo" style="width:100%"/></span>
                </header>
            <section class="menu-section">
                <h3 class="menu-section-title">文档</h3>
                <ul class="menu-section-list">
                    <li><a href="https://github.com/mango/slideout#installation" target="_blank">简介</a></li>
                    <li><a href="https://github.com/mango/slideout#usage" target="_blank">公告栏</a></li>
                    <li><a href="https://github.com/mango/slideout#api" target="_blank">档案共享</a></li>
                    <li><a href="https://github.com/mango/slideout#npm-scripts" target="_blank">学习交流</a></li>
                    <li><a href="https://github.com/mango/slideout#npm-scripts" target="_blank">项目管理</a></li>
                    <li><a href="https://github.com/mango/slideout#npm-scripts" target="_blank">小组日常</a></li>
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
                <GroupIntroduction/>
                <GroupNotice/>
                <GroupDocumentExchange/>
            </div>

        </main>
    </div>
</template>

<script>
    import Vue from "vue"
    import slideOut from "slideout"
    import $ from "jquery"
    import GroupIntroduction from "../GroupIntroduction/GroupIntroduction.vue"
    import GroupNotice from "../GroupNotice/GroupNotice.vue"
    import GroupDocumentExchange from "../GroupDocumentExchange/GroupDocumentExchange.vue"
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
        components:{
            'GroupIntroduction': GroupIntroduction,
            'GroupNotice': GroupNotice,
            'GroupDocumentExchange': GroupDocumentExchange,
        }
    }
</script>

<style>
    @import "./SidebarScroll.css";
    @import "/node_modules/hamburgers/dist/hamburgers.min.css";
    @import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
    @import "/node_modules/bootstrap/dist/css/bootstrap-theme.min.css";
</style>
