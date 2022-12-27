import { Injectable } from '@angular/core';
import { Foods } from './shared/model/food';

@Injectable({
  providedIn: 'root'
})
export class FoodservService {
 
  constructor() { }
 
  getfood():Foods[]{
    return[
      {
        id:1,
    price:250,
    name:'Pizza',
    star:4.5,
    favorite:false,
    imgurl:'/assets/f1.jpeg'
      },
      {
        id:2,
    price:250,
    name:'burger',
    star:4.5,
    favorite:false,
    imgurl:'/assets/f2.jpeg'
      },
      {
        id:3,
    price:250,
    name:'bowl',
    star:4.5,
    favorite:false,
    imgurl:'/assets/f3.jpeg'
      },
      {
        id:4,
    price:250,
    name:'fried chips',
    star:4.5,
    favorite:false,
    imgurl:'/assets/f4.jpeg'
      },
      {
        id:5,
    price:250,
    name:'PIZZA',
    star:4.5,
    favorite:false,
    imgurl:'/assets/f5.jpeg'
      },
      {
        id:6,
    price:250,
    name:'pack',
    star:4.5,
    favorite:false,
    imgurl:'/assets/f6.jpeg'
      },
      {
        id:7,
    price:250,
    name:'sdfghj',
    star:4.5,
    favorite:false,
    imgurl:'/assets/f7.jpeg'
      },
      {
        id:8,
    price:250,
    name:'ppppp',
    star:4.5,
    favorite:false,
    imgurl:'/assets/f8.jpeg'
      },
      {
        id:9,
    price:250,
    name:'piwijje',
    star:4.5,
    favorite:false,
    imgurl:'/assets/f9.jpeg'
      },
      {
        id:10,
    price:250,
    name:'Pizza',
    star:4.5,
    favorite:false,
    imgurl:'/assets/f10.jpeg'
      }
    ]
  }
}
