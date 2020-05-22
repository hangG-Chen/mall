/*
 * @Author: your name
 * @Date: 2020-03-25 15:41:02
 * @LastEditTime: 2020-05-11 16:09:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\network\detail.js
 */
import { request } from "./request"
export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.discountBgColor = itemInfo.discountBgColor;
    this.columns = columns;
    this.services = services
  }
}
// export class Shop {
//   constructor(shopInfo) {
//     this.name = shopInfo.name;
//     this.shopLogo = shopInfo.shopLogo;
//     this.shopId = shopInfo.shopId;
//     this.services = shopInfo.services;
//     this.shopUrl = shopInfo.shopUrl;

//   }
// }