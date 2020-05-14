import {request} from "./request";


export function noticeList(token) {
  return request({
    url: '/noteList',
    data: {
      'page': 1,
      'pageSize': 5
    }
  }, token)
}

export function deleteNotice(id,token) {
  return request({
    url: '/delNote',
    data: {
      'id': id
    }
  }, token)
}
export function addNotice(title,message,token) {
  return request({
    url: '/addNote',
    data: {
      'noteTitle': title,
      'noteMessage': message
    }
  }, token)
}

