import axios from 'axios'
import config from '@/config';

//用于登录超时跳转
import router from '../router'
// axios 配置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.timeout = 10000;

export function fetch(url, type, params, token) {
    // let token;
    if (!params) params = {};
    //if(token) params.token = token;

    let user = localStorage.getItem('user');
    if (user && !token) {
        token = JSON.parse(user).token;
    }
    return new Promise((resolve, reject) => {
        if (type == 'get' || type == 'GET') {
            var param = '';
            for (var key in params) {
                param += '&' + key + '=' + params[key]
            }
            param = param.replace('&', '');
            axios.get(url, {
                    params: params,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': 'Bearer ' + token,
                    }
                })
                .then(response => {
                    if (response.data.code == 401) {
                        router.push('/login');
                        return;
                    }
                    resolve(response.data);
                }).catch((error) => {
                    //alert("发现服务器异步请求500报错，可能原因：服务器异常或请求参数错误。");
                    console.log(error)
                    reject(error)
                })
        } else if (type == 'upload' || type == 'UPLOAD') {
            axios.post(url, params, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': 'Bearer ' + token,
                    }
                })
                .then(response => {
                    if (response.data.code == 401) {
                        router.push('/login');
                        return;
                    }
                    resolve(response.data);
                }).catch((error) => {
                    //alert("发现服务器异步请求500报错，可能原因：服务器异常或请求参数错误。");
                    console.log(error)
                    reject(error)
                })
        } else {

            //router.push('/index');
            var param = '';
            //console.log(params);
            for (var key in params) {
                param += '&' + key + '=' + params[key]
            }
            param = param.replace('&', '');

            axios.post(url, param, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': 'Bearer ' + token,
                    }
                })
                .then(response => {

                    if (response.data.code == 401) {
                        router.push('/login');
                        return;
                    }

                    resolve(response.data);

                }).catch((error) => {
                    console.log(error);

                    //alert("发现服务器异步请求500报错，可能原因：服务器异常或请求参数错误。");
                    reject(error)
                })
        }
    })
}