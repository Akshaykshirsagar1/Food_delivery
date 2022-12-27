import { Component, OnInit } from '@angular/core';
import { FoodservService } from '../foodserve.service';

import { Foods } from '../shared/model/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
foods:Foods[]=[];
term:string="";

  constructor(private fs:FoodservService) {

   }
   

  ngOnInit() {
    this.foods=this.fs.getfood();
  }
namesearch:string="";
}
