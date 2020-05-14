import axios from 'axios'

export function request(config,token) {
  const instance = axios.create({
    method: 'post',
    'baseURL':'/api/admin',
    timeout: 5000,
    headers: {
      'token':token
    }
  })
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
  return instance(config)
}

