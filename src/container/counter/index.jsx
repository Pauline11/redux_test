/*
 * @Autor: pangyue
 * @Date: 2022-10-27
 * @Description: container容器 用于传递状态和更新状态的方法
 */


import { connect } from 'react-redux';
import CountView from '../../components/Count';
import {createIncrementAction, createDecrementAction, createAsyncIncrementAction } from '../../redux/actions/countAction';


/**
 * @description: mapStateToProps是一个函数
 * @return     返回state
 */
const mapStateToProps = (state) => ({count: state.countReducer})
        
/**
 * @description: mapDispatchToProps可以是一个函数，也可以简写为一个对象，对象里包含各种操作state的方法
 * @return 
 */

// const mapDispatchToProps = (dispatch) => {
//     return {
//         jia: value => dispatch(createIncrementAction(value)),
//         jian: value => dispatch(createDecrementAction(value)),
//         syncjia: (value, time) => dispatch(createAsyncIncrementAction(value, time)),
//     }
// }

const mapDispatchToProps = {
    jia: createIncrementAction, 
    jian: createDecrementAction, 
    syncjia: createAsyncIncrementAction
}

export default connect(mapStateToProps, mapDispatchToProps)(CountView)