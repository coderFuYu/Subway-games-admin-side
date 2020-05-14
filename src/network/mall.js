import {request} from "./request";


export function propList(token) {
  return request({
    url: '/propList',
    data: {
      'page': 1,
      'pageSize': 10
    }
  }, token)
}

export function mallList(token) {
  return request({
    url: '/sotreList',
    data: {
      'page': 1,
      'pageSize': 10
    }
  }, token)
}

export function addGoods(id, value, token) {
  return request({
    url: '/addGoods',
    data: {
      "propList":
          [
            {
              "propId": id,
              "propValue": value
            }
          ]
    }
  }, token)
}

export function delGoods(id, token) {
  return request({
    url: '/delGoods',
    data: {
      "propList":
          [
            {"propId": id}
          ]
    }
  }, token)
}

export function updateGood(id, value, token) {
  return request({
    url: '/updateGood',
    data: {
      'propId': id,
      'propValue': value
    }
  }, token)
}
