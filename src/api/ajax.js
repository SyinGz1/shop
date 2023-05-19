/* 
封装ajax请求函数，切返回值是一个promise对象
*/
import axios from 'axios'

export default function ajax (url, data = {}, method = 'GET') {
    return new Promise(function (resolve, reject) {
        // 执行异步ajax请求

        let promise;

        // 判断请求的方式
        if (method === "GET" || method === "get") {//GET请求
            // 准备url，query参数数据
            let dataStr = ''; //数据拼接字符串
            Object.keys(data).forEach((key) => {
                dataStr += key + '=' + data[key] + '&'
            });
            console.log('query参数：', dataStr);

            if (dataStr !== '') {
                dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            console.log("url：", url);

            // 发送get请求
            promise = axios.get(url);
        
        } else if (method === "POST" || method === "post") {//POST请求
            // 发送post请求
            promise = axios.post(url, data)
        } else {
            return reject('目前支持GET请求和POST请求，这两种请求方式！');
            console.log('！！！');
        }

        
        promise.then((response) => {
            resolve(response.data);
        }).catch((error) => {
            reject(error);
        })
    });
}

