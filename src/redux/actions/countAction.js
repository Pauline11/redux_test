/* 专门用于创建actions */
import {INCREMENT, DECREMENT} from '../constant';

export const createIncrementAction = (data) => ({type: INCREMENT, data});
export const createDecrementAction = (data) => ({type: DECREMENT, data});
export const createAsyncIncrementAction = (data, time) => {
    return (dispatch) => {
        // 执行异步操作
        setTimeout(()=>{
			dispatch(createIncrementAction(data))
		}, time)
    }
}