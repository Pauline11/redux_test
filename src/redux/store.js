/*
 * @Author: pangyue
 * @Date: 2022-10-26
 * @Description: 
 */
/* 
	该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/

//引入createStore，专门用于创建redux中最为核心的store对象
import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
//引入为Count组件服务的reducer
import countReducer from './reducers/countReducer';
import personReducer from './reducers/personReducer'

//暴露store
export default createStore(combineReducers({countReducer, personReducer}), applyMiddleware(thunk))