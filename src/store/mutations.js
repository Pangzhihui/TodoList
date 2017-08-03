import * as types from './mutation-types'

export default {
  // 新增计划
  [types.SAVE_PLAN] (state, plan) {
    state.list.push(plan)
  },
  // 删除某计划
  [types.DELETE_PLAN] (state, idx) {
    state.list.splice(idx, 1);
  },
  //修改状态为进行中
  [types.UPDATE_STA1] (state, idx) {
    state.list[idx].sta = 'glyphicon-play';
  },
  //修改状态为待办
  [types.UPDATE_STA2] (state, idx) {
    state.list[idx].sta = 'glyphicon-pause';
  },
  //修改状态为已完成
  [types.UPDATE_STA3] (state, idx) {
    state.list[idx].sta = 'glyphicon-stop';
  },
  //修改任务
  [types.UPDATE_PLAN] (state, plan) {
      var id = plan.id;
      state.list[id].pri = plan.pri;
      state.list[id].sta = plan.sta;
      state.list[id].content = plan.content;
  }
};