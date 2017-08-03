<template>
    <div class="add">
        <div class="hd-add">
            <div class="hd">Title</div>
            <button class="btn btn-default btn-cancel" id="all-c" @click="cancel()">Cancel</button>
            <button class="btn btn-default btn-add" id="all-d" @click="add()">Done</button>
        </div>
        <div class="pri">
            <div class='pri-tag' :class="{choose:pri1}" @click="pri1=!pri1;pri2=false;pri3=false;"><span class="glyphicon glyphicon-exclamation-sign red-p"></span>高优</div>
            <div class='pri-tag' :class="{choose:pri2}" @click="pri2=!pri2;pri1=false;pri3=false;"><span class="glyphicon glyphicon-exclamation-sign yellow-p"></span>中优</div>
            <div class='pri-tag' :class="{choose:pri3}" @click="pri3=!pri3;pri1=false;pri2=false;"><span class="glyphicon glyphicon-exclamation-sign green-p"></span>低优</div>
        </div>
        <div class="sta">
            <div class='sta-tag' :class="{choose:sta1}" @click="sta1=!sta1;sta2=false;sta3=false;"><span class="glyphicon glyphicon-play state"></span>进行中</div>
            <div class='sta-tag' :class="{choose:sta2}" @click="sta2=!sta2;sta1=false;sta3=false;"><span class="glyphicon glyphicon-pause state"></span>待办</div>
            <div class='sta-tag' :class="{choose:sta3}" @click="sta3=!sta3;sta1=false;sta2=false;"><span class="glyphicon glyphicon-stop state"></span>已完成</div>
        </div>
        <div class="task">
            <textarea class="content" id='content' v-model="content"></textarea>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                pri1:false,
                pri2:false,
                pri3:false,
                sta1:false,
                sta2:false,
                sta3:false,
                pri:'',
                sta:'',
                content:''
            }
        },
        methods: {
            cancel() {
                this.$router.go(-1);
            },
            add() {
                if(this.pri1||this.pri2||this.pri3) {
                    if(this.pri1) {this.pri='red'};
                    if(this.pri2) {this.pri='yellow'};
                    if(this.pri3) {this.pri='green'};
                }
                else{
                    alert('请选择优先级');
                };
                if(this.sta1||this.sta2||this.sta3) {
                    if(this.sta1) {this.sta='glyphicon-play'};
                    if(this.sta2) {this.sta='glyphicon-pause'};
                    if(this.sta3) {this.sta='glyphicon-stop'};
                }
                else{
                    alert('请选择状态');
                };
                if(!this.content){
                    alert('请填写内容');
                }
                const plan = {
                    pri:this.pri,
                    sta:this.sta,
                    content:this.content
                };
                this.$store.dispatch('savePlan',plan);
                this.$router.go(-1)
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
    
    .bg(@width: 100%, @height: 50px) {
        background: @color;
        width: @width;
        height: @height;
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
    
    .btn-cancel {
        position: absolute;
        top: @mp;
        ;
        left: 20px;
    }
    
    .pri,
    .sta {
        display: flex;
        .pri-tag,
        .sta-tag {
            margin: 5px;
            flex: 1;
            padding: 5px;
            border: 1px solid #C6C6C6;
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
    
    .task textarea {
        width: 100%;
        border: none;
    }
</style>