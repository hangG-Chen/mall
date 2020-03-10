/*
 * @Author: your name
 * @Date: 2020-03-04 14:16:36
 * @LastEditTime: 2020-03-10 12:14:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\network\home.js
 */
import { request } from './request'

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}
export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}