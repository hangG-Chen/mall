/*
 * @Author: your name
 * @Date: 2020-03-04 10:49:31
 * @LastEditTime: 2020-04-09 15:52:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\network\request.js
 */
import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    // baseURL : "http://152.136.185.210:8000/api/h8" ,
    // baseURL : "http://123.207.32.32:8000/api/h8" ,
    baseURL : "http://106.54.54.237:8000/api/h8"  ,
    timeout: 5000
  });
  instance.interceptors.request.use(config => {
    return config  
  },err => {
    return err    
  });
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '请求错误'
          break
        case 401:
          err.message = '未授权的访问'
          break
      }
    }
    return err
  });
  return instance(config)
}