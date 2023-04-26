import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';

import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.css']
})
export class ListingsPageComponent implements OnInit{

  // creating a variable of type Listing and initialize it to empty list
  listings : Listing[] = [];

  constructor(
    private listingsService: ListingsService,
  ) {};

  ngOnInit(): void {
    // as getListings returns an observable, the subscribe method gets called whenever getListings is called
    this.listingsService.getListings()
      .subscribe(listings => this.listings = listings)
      // listings: the listings data we got from server
      // this.listings: the data received from server gets set to the variable present in this file
  }

}
