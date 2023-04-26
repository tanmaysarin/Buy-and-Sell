import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing } from '../types';

import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css']
})
export class ListingDetailPageComponent implements OnInit{

  isLoading: boolean = true;
  listing = {} as Listing;
  
  constructor(
    private route: ActivatedRoute, // Allows listing-details-page to access the url parameter in current path
    private listingService: ListingsService,
  ) {}
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // this.listing = fakeListings.find(listing => listing.id === id)!; // adding an exclamation makes typescript know that the value can never be null
    this.listingService.getListingById(id!)
      .subscribe(listing => {
        this.listing = listing;
        this.isLoading = false;
      });

    this.listingService.addViewToListing(id!)
      .subscribe(() => console.log('Views Updated!'));
  }

}
