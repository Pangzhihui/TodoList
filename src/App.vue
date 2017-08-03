<template>
    <div class="wrapper">
        <div class="hd-one" v-if="$route.path === '/show-one' || $route.path === '/show-all'|| $route.path === '/'">
            <div class="hd">Title</div>
            <router-link to="/add" class="btn btn-default btn-add" id="one-a">Add</router-link>
        </div>
        <router-view></router-view>
        <div class="footer">
            <div class="btn-l" :class="{active:flag1}" @click="toggleOne()"><router-link to="/show-one"> One Thing </router-link></div>
            <div class="btn-r" :class="{active:flag2}" @click="toggleAll()"><router-link to="/show-all">All</router-link></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
               flag1 : true,
               flag2 : false
            }
        },
        methods: {
            toggleOne() {
                this.flag1 = true;
                this.flag2 = false;
            },
            toggleAll() {
                this.flag1 = false;
                this.flag2 = true;
            },
        }
    }
</script>

<style lang="less">
    @color: #D9D9D9;
    @mp: 10px;
    * {
        margin: 0;
        padding: 0;
        font-size: 62.5%;   
        font-family: "microsoft yahei";
    }
    .bg(@width:100%,@height:50px) {
        background: @color;
        width:@width;
        height:@height;
    }
    .hd {
        position: relative;
        font-size: 2.8rem;
        text-align: center;
        line-height: 50px;
        margin-bottom: @mp;
        .bg;
    }
    .btn-add {
        position: absolute;
        top: @mp;
        right: 20px;
    }
    .footer {
        .bg;
        position: fixed;
        bottom: 0px;
        margin-top: 60px;
        display: flex;
        .btn-l,.btn-r {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            a {
                color: #000000;
                text-decoration: none;
                font-size: 1.8rem;
                font-weight: bold;
            }
            
        }
        .active {
            background: #ADADAD;
        }
    }
</style>