import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { fakeListings } from '../fake-data'

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.css']
})
export class ListingsPageComponent implements OnInit{

  // creating a variable of type Listing and initialize it to empty list
  listings : Listing[] = [];

  constructor() {};

  ngOnInit(): void {
    // set the listings list to the fakeListings list data
    this.listings = fakeListings;
  }

}
