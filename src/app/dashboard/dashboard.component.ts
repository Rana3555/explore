import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Foods } from '../shared/models/food';
import { StarRatingComponent } from 'ng-starrating';
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

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    // alert(`Old Value:${$event.oldValue}, 
    //   New Value: ${$event.newValue}, 
    //   Checked Color: ${$event.starRating.checkedcolor}, 
    //   Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }
}
