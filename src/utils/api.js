import axios from "axios";
import { Message } from "element-ui";

//响应拦截器
axios.interceptors.response.use(success=>{
    //业务逻辑错误
    if(success.status&&success.status==200){
        if(success.data.code==500||success.data.code==401||success.data.code==403){
            Message.error({message:success.data.message});
            return;
        }
        if(success.data.message){
            Message.success({message:success.data.message});
        }
    }
    return success.data;
},error=>{
    if(error.response.code==504||error.response.code==404){
        Message.error({message:'无服务'})
    }
});

let base ='';

//封装json格式的post请求
export const postRequest=(url,params)=>{
    return axios({
        method:'post',
        url:'${base}${url}',
        data:params
    })
}