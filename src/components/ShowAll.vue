<template>
    <div class="all">
        <div class="pri" id="pri">
            <div class='pri-tag' :class="{choose:pri11}" @click="pri11=!pri11"><span class="glyphicon glyphicon-exclamation-sign red-p"></span>高优</div>
            <div class='pri-tag' :class="{choose:pri2}" @click="pri2=!pri2"><span class="glyphicon glyphicon-exclamation-sign yellow-p"></span>中优</div>
            <div class='pri-tag' :class="{choose:pri3}" @click="pri3=!pri3"><span class="glyphicon glyphicon-exclamation-sign green-p"></span>低优</div>
        </div>
        <div class="sta" id="sta">
            <div class='sta-tag' :class="{choose:sta1}" @click="sta1=!sta1"><span class="glyphicon glyphicon-play state"></span>进行中</div>
            <div class='sta-tag' :class="{choose:sta2}" @click="sta2=!sta2"><span class="glyphicon glyphicon-pause state"></span>待办</div>
            <div class='sta-tag' :class="{choose:sta3}" @click="sta3=!sta3"><span class="glyphicon glyphicon-stop state"></span>已完成</div>
        </div>
        <div class="list">
            <p v-if="!plans.length"><strong>还没有任何任务</strong></p>
            <v-touch v-for="(plan,index) in plans" v-on:swipeleft="onSwipeLeft(index)" v-on:swiperight="onSwipeRight(index)" v-on:tap="onTap()" class="task">
                <span class="glyphicon" :class="[plan.sta,plan.pri]"></span>
                <div class="content">
                    {{plan.content}}
                </div>
                <div class="right" :class="{ractive:i==index}">
                    <div class="op-edit" ><router-link :to="{ name: 'update', params: { taskId: index }}">编辑</router-link></div>
                    <div class="op-del" @click="deletePlan(index)">删除</div>
                </div>
                <div class="left" :class="{lactive:j==index}">
                    <div class="op-1" @click="updateSta3(index)">已完成</div>
                    <div class="op-2" @click="updateSta2(index)">待办</div>
                    <div class="op-3" @click="updateSta1(index)">进行中</div>
                </div>
            </v-touch>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                i: 999,
                j: 999,
                pri11: false,
                pri2: false,
                pri3: false,
                sta1: false,
                sta2: false,
                sta3: false,
                tasks: []
            }
        },
        computed: {
            plans() {
                if(this.pri11 && this.pri2 && this.pri3 && this.sta1 && this.sta2 && this.sta3) {

                    return this.$store.state.list;
                } else if(!(this.pri11 || this.pri2 || this.pri3 || this.sta1 || this.sta2 || this.sta3)) {
                    return this.$store.state.list;
                } else {
                    function arr(arr) {
                        var result = []
                        for(var i = 0; i < arr.length; i++) {
                            if(result.indexOf(arr[i]) == -1) {
                                result.push(arr[i])
                            }
                        }
                        return(result)
                    }
                    if(!(this.pri11 || this.pri2 || this.pri3)) {
                        this.tasks = [];
                        if(this.sta1) {
                            var list = this.$store.state.list;
                            for(var k = 0; k < list.length; k++) {
                                if(list[k].sta == 'glyphicon-play') {
                                    this.tasks.push(list[k]);
                                }
                            }
                        }
                        if(this.sta2) {
                            var list = this.$store.state.list;
                            for(var k = 0; k < list.length; k++) {
                                if(list[k].sta == 'glyphicon-pause') {
                                    this.tasks.push(list[k]);
                                }
                            }
                        }
                        if(this.sta3) {
                            var list = this.$store.state.list;
                            for(var k = 0; k < list.length; k++) {
                                if(list[k].sta == 'glyphicon-stop') {
                                    this.tasks.push(list[k]);
                                }
                            }
                        }

                        return arr(this.tasks);
                    }
                    else if(!(this.sta1 || this.sta2 || this.sta3)) {
                        this.tasks = [];
                        if(this.pri11) {
                            var list = this.$store.state.list;
                            for(var k = 0; k < list.length; k++) {
                                if(list[k].pri == 'red') {
                                    this.tasks.push(list[k]);
                                }
                            }
                        }
                        if(this.pri2) {
                            var list = this.$store.state.list;
                            for(var k = 0; k < list.length; k++) {
                                if(list[k].pri == 'yellow') {
                                    this.tasks.push(list[k]);
                                }
                            }
                        }
                        if(this.pri3) {
                            var list = this.$store.state.list;
                            for(var k = 0; k < list.length; k++) {
                                if(list[k].pri == 'green') {
                                    this.tasks.push(list[k]);
                                }
                            }
                        }

                        return arr(this.tasks);
                    }
                    else {
                        this.tasks = [];
                        if(this.pri11 && this.sta1) {
                            var list = this.$store.state.list;
                            for(var k = 0; k < list.length; k++) {
                                if(list[k].pri == 'red' && list[k].sta == 'glyphicon-play') {
                                    this.tasks.push(list[k]);
                                }
                            }
                        }
                        if(this.pri11 && this.sta2) {
                            var list = this.$store.state.list;
                            for(var k = 0; k < list.length; k++) {
                                if(list[k].pri == 'red' && list[k].sta == 'glyphicon-pause') {
                                    this.tasks.push(list[k]);
                                }
                            }
                        }
                        if(this.pri11 && this.sta3) {
                            var list = this.$store.state.list;
                            for(var k = 0; k < list.length; k++) {
                                if(list[k].pri == 'red'&&list[k].sta == 'glyphicon-stop') {
                                    this.tasks.push(list[k]);
                                }
                            }
                        }
                         if(this.pri2 && this.sta1) {
                            var list = this.$store.state.list;
                            for(var k = 0; k < list.length; k++) {
                                if(list[k].pri == 'yellow' && list[k].sta == 'glyphicon-play') {
                                    this.tasks.push(list[k]);
                                }
                            }
                        }
                        if(this.pri2 && this.sta2) {
                            var list = this.$store.state.list;
                            for(var k = 0; k < list.length; k++) {
                                if(list[k].pri == 'yellow' && list[k].sta == 'glyphicon-pause') {
                                    this.tasks.push(list[k]);
                                }
                            }
                        }
                        if(this.pri2 && this.sta3) {
                            var list = this.$store.state.list;
                            for(var k = 0; k < list.length; k++) {
                                if(list[k].pri == 'yellow'&&list[k].sta == 'glyphicon-stop') {
                                    this.tasks.push(list[k]);
                                }
                            }
                        }
                         if(this.pri3 && this.sta1) {
                            var list = this.$store.state.list;
                            for(var k = 0; k < list.length; k++) {
                                if(list[k].pri == 'green' && list[k].sta == 'glyphicon-play') {
                                    this.tasks.push(list[k]);
                                }
                            }
                        }
                        if(this.pri3 && this.sta2) {
                            var list = this.$store.state.list;
                            for(var k = 0; k < list.length; k++) {
                                if(list[k].pri == 'green' && list[k].sta == 'glyphicon-pause') {
                                    this.tasks.push(list[k]);
                                }
                            }
                        }
                        if(this.pri3 && this.sta3) {
                            var list = this.$store.state.list;
                            for(var k = 0; k < list.length; k++) {
                                if(list[k].pri == 'green'&&list[k].sta == 'glyphicon-stop') {
                                    this.tasks.push(list[k]);
                                }
                            }
                        }
                        return arr(this.tasks);
                    }

                }

            }
        },
        methods: {
            onSwipeLeft(index) {
                this.i = index;
            },
            onSwipeRight(index) {
                this.j = index;
            },
            onTap() {
                this.i = 999;
                this.j = 999;
            },
            deletePlan(id) {
                this.$store.dispatch('deletePlan', id);
            },
            updateSta1(id) {
                this.$store.dispatch('updateSta1', id);
            },
            updateSta2(id) {
                this.$store.dispatch('updateSta2', id);    
            },
            updateSta3(id) {
                this.$store.dispatch('updateSta3', id);
            }

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
    
    .pri {
        background: #FEEBEB;
        margin-top: -10px;
    }
    
    .sta {
        background: #EDFEEC;
    }
    
    .pri,
    .sta {
        display: flex;
        .pri-tag,
        .sta-tag {
            border: none;
            margin: 5px;
            flex: 1;
            padding: 5px;
            font-size: 1.6rem;
            text-align: center;
            .red-p,
            .yellow-p,
            .green-p {
                font-size: 1.8rem;
            }
            .red-p {
                color: #CF031F;
            }
            .yellow-p {
                color: #F7E739;
            }
            .green-p {
                color: #41750C;
            }
            .state {
                font-size: 1.8rem;
                color: #D9D9D9;
            }
        }
        .choose {
            border: 1px solid #FF0000;
        }
    }
    
    .list {
        font-size: 1.8rem;
        margin-bottom: 70px;
        .right,
        .left {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 300px;
            height: 95px;
            background: #D9D9D9;
            position: absolute;
            top: 0;
        }
        .right {
            right: -311px;
        }
        .ractive {
            right: 0px;
            transition: all .3s ease;
        }
        .left {
            left: -311px;
        }
        .lactive {
            left: 0px;
            transition: all .3s ease;
        }
        div[class|='op'] {
            width: 80px;
            text-align: center;
            font-size: 1.6rem;
        }
        .op-edit a {
            text-decoration: none;
            font-size: 1.6rem;
            color:#000000;
        }
    }
    
    .choose {
        border: 1px solid #FF0000 !important;
    }
    
    .task {
        border: 1px solid #C6C6C6;
        display: flex;
        align-items: center;
        width: 95%;
        height: 97px;
        padding: @mp;
        margin: @mp auto;
        position: relative;
        overflow: hidden;
        .red,
        .yellow,
        .green {
            font-size: 1.8rem;
            margin-right: @mp;
        }
        .red {
            color: #CF031F;
        }
        .yellow {
            color: #F7E739;
        }
        .green {
            color: #41750C;
        }
        .content {
            font-size: 1.8rem;
        }
    }
</style>