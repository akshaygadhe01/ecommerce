import { Component, OnInit } from '@angular/core';
import { product } from '../prod-details-layout.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product: product[]=[
    new product(1,'TEST-PRODUCT','This is testing description to be displayed on page.','https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1550688238-theory-1550688225.jpg','500')
  ]

  constructor() { }

  ngOnInit() {
  }

}
