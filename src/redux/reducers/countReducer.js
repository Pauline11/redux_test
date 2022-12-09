/*
 * @Author:  
 * @Date: 2022-10-26
 * @Description: 
 */
/* reducer就是一个函数，用于加工state和初始化state */
import {INCREMENT, DECREMENT} from '../constant'

// const initState = 0;
export default function countReducer (prevState = 0, action) {
    const {type, data} = action;
    switch(type) {
        case INCREMENT:
            return prevState + data;
        case DECREMENT:
            return prevState - data;
        default:
            return prevState; 
    }
}