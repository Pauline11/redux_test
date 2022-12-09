/*
 * @Author:  
 * @Date: 2022-10-28
 * @Description: 
 */
import { ADD_PERSON } from "../constant";


const initState =  [{id: 1, name: 'zhangsan', age: 24}]

const PersonReducer = (prevState = initState, action) => {
    const {type, data} = action;
    switch(type) {
        case ADD_PERSON :
            return [...prevState, data];
        default: 
            return prevState;
    }
}

export default PersonReducer;