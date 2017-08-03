//actions其实就是去触发事件和传入参数啦

import * as types from './mutation-types'

export default{
	savePlan({commit},plan){
		commit(types.SAVE_PLAN,plan)
	},
	deletePlan({commit},idx){
		commit(types.DELETE_PLAN,idx)
	},
	updatePlan({commit},plan){
        commit(types.UPDATE_PLAN,plan)
    },
	updateSta1({commit},idx){
	    commit(types.UPDATE_STA1,idx)
	},
	updateSta2({commit},idx){
        commit(types.UPDATE_STA2,idx)
    },
	updateSta3({commit},idx){
        commit(types.UPDATE_STA3,idx)
    }

}