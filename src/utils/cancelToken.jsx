/*
 * @Author: pangyue
 * @Date: 2022-12-01
 * @Description: 
 */

import axios from 'axios';
import qs from "qs"

const Practice = () => {

    // const source = axios.CancelToken.source();
    const url1 = 'https://httpbin.org/get';
    const url2 = 'https://httpbin.org/post';

    const sendGet = () => {
        axios.get(url1,{
            params:{
                id: 1
            },
            // cancelToken: source.token
        }).then(res=> {
            console.log(res, 'gettt')
        })
    }
    const sendPost = () => {
        axios.post(url2,{
            data:{
                id: 1
            },
            // cancelToken: source.token
        }).then(res=> {
            console.log(res, 'posttt')
        })
    }
    const sendError = () => {
        axios.post(url2).then(res=> {
            console.log(res, 'e')
        }).catch(er => console.log(er, 'errorrr'))
    }
    
    /**
     * @description: 生成唯一标识请求的key
     * @param {*} config
     * @return {*}
     */
    function generateReqKey(config){
        const {method, url, params, data } = config;
        // GET --> params, POST --> data
        return [method, url, qs.stringify(params), qs.stringify(data)].join('&');
    }

    /**
     * @description: addPendingRequest，用于把当前请求信息添加到 pendingRequest对象中
     * @param {*}
     * @return {*}
     */    
    const pendingRequest = new Map();
    console.log(pendingRequest, 'pendingRequest');

    function addPendingRequest(config){
        const requestKey = generateReqKey(config);
        config.cancelToken = config.cancelToken || new axios.CancelToken((cancel) => {
            if(!pendingRequest.has(requestKey)){
                pendingRequest.set(requestKey, cancel)
            }
        });
    }  
       
    /**
     * @description: removePendingRequest，检查是否存在重复请求，若存在则需要取消已发出的请求.
     *                  在pending队列中查找重复的request——当请求方式，请求 URL和请求携带参数都一样时，就可以认为是相同的requeest。
     * @param {*}
     * @return {*}
     */    
     function removePendingRequest(config){
        const requestKey = generateReqKey(config);
        if(pendingRequest.has(requestKey)){
           const cancelToken = pendingRequest.get(requestKey);
           cancelToken(requestKey); // 出现重复请求时，就可以调用 cancel函数来取消之前已经发出的请求。requestKey为返回的cancel消息，选填。
           pendingRequest.delete(requestKey);// 在取消请求之后，还需要把取消的请求从 pendingRequest中移除。
        }
    }
    
    // 创建好这三个函数以后，就可以设置请求拦截器和响应拦截器
    axios.interceptors.request.use(
        function (config) {
            removePendingRequest(config); // 检查是否存在重复请求
            addPendingRequest(config); // 将当前请求信息添加到 pendingRequest对象中
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    axios.interceptors.response.use(
        (response) => {
            removePendingRequest(response.config); // 从 pendingRequest对象中移除请求
            return response;
       },
       (error) => {
           removePendingRequest(error.config || {}); // 从 pendingRequest对象中移除请求
           if(axios.isCancel(error)){
               console.log(error.message);
           }else {
               // 自行处理异常请求
           }
           return Promise.reject(error);
       }
   );

    return (
        <div >
           <button onClick={sendGet}>发送get请求</button>
           <button onClick={sendPost}>发送post请求</button>
           <button onClick={sendError}>发送cuowu请求</button>
        </div>
    )
}

export default  Practice ;