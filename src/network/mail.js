import {request} from "./request";


export function sendMail(title,userId,propId,mailMessage,propAmount,isPublic,token) {
  return request({
    url: '/addMail',
    data:{
      "title":title,
      "userId":userId,
      "propId":propId,
      "mailMessage":mailMessage,
      "propAmount":propAmount,
      "isPublic":isPublic
    }
  },token)
}
