import { Products } from './../../products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})

export class ProductListComponent implements OnInit {

  products = Products
  constructor() { }

  ngOnInit(): void {
    // this.products = Products
  }

}
