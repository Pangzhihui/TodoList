<template>
    <div class="wrapper">
        <p class="tips">Now! The One Thing is </p>
        <div class="list1">
            <p v-if="!plans.length"><strong>还没有任何任务</strong></p>
            <div class="task" v-for="plan in plans">
                <span class="glyphicon glyphicon-play red"></span>
                <div class="content">
                    {{plan.content}}
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        computed: {
            plans() {
                var task = [];
                var list = this.$store.state.list;
                for(var i = 0;i < list.length;i++) {
                    if(list[i].pri=='red'&&list[i].sta=='glyphicon-play')
                        task.push(list[i])
                        break;
                }
                return task;
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
    
    .tips {
        font-size: 3rem;
        padding-left: @mp;
    }
    
    .list1 {
        font-size: 1.8rem;
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