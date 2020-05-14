import {request} from "./request";


export function dayLive(token) {
  return request({
    url: '/dayLive',
    data:{
      'page':1,
      'pageSize':7
    }
  },token)
}
export function monthLive(token) {
  return request({
    url: '/dayLive',
    data:{
      'page':1,
      'pageSize':7
    }
  },token)
}
