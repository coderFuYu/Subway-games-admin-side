import {request} from "./request";

export function login(userName,passWord) {
  return request({
    url: '/login',
    data:{
      'userName':userName,
      'passWord':passWord
    }
  },'')
}
