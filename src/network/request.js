import axios from 'axios'

export default function request(config) {
  const instance = axios.create({
    baseURL = "http://123.207.32.32:8000/api/wh",
    // baseURL = "http://106.54.54.237:8000/api/wh",
    timeout: 5000
  });
  instance.interceptors.request.use(config => {
    return config  
  },err => {
    return err    
  });
  instance.interceptors.reponse.use(res => {
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