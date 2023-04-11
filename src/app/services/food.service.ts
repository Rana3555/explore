import { Injectable } from '@angular/core';
import { Foods } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Foods[]{
    return [
      {
        id: 1,
        name: 'dosa',
        cookTime: '10-20',
        price :10,
        favorite: false,
        origins: ['south  indian'],
        stars: 4.5,
        imageUrl: '/assets/item 1.jpg',
        tags: ['Roste','crunch']
      },
      {
        id: 2,
        name: 'noodle',
        cookTime: '10-20',
        price :10,
        favorite: false,
        origins: ['chinese'],
        stars: 4.5,
        imageUrl: '/assets/item 2.jpg',
        tags: ['Fired','Dry','Wet']
      },
      {
        id: 3,
        name: 'pizza',
        cookTime: '10-20',
        price :10,
        favorite: false,
        origins: ['america'],
        stars: 4.5,
        imageUrl: '/assets/item 5.jpg',
        tags: ['pepper','mixed','veg','non-veg']
      },
      {
        id: 4,
        name: 'dosa',
        cookTime: '10-20',
        favorite: false,
        price :10,
        origins: ['south  indian'],
        stars: 4.5,
        imageUrl: '/assets/item 3.jpg',
        tags: ['BreakFast']
      },
      {
        id: 5,
        name: 'dosa',
        cookTime: '10-20',
        price :10,
        favorite: false,
        origins: ['south  indian'],
        stars: 4.5,
        imageUrl: '/assets/item 5.jpg',
        tags: ['BreakFast']
      },
      {
        id: 6,
        name: 'dosa',
        cookTime: '10-20',
        price :10,
        favorite: false,
        origins: ['south  indian'],
        stars: 4.5,
        imageUrl: '/assets/item 7.jpg',
        tags: ['BreakFast']
      }
    ];
  }

}
