import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Foods } from '../shared/models/food';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  foods: Foods[]=[];

  constructor(private fs:FoodService) { }

  ngOnInit(): void {
    this.foods = this.fs.getAll();
  }

}
