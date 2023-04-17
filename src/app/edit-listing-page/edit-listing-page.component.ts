import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent implements OnInit{

  listing = {} as Listing;

  constructor(
    private router : Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find(listing=>listing.id===id)!;
  }

  onSubmit(): void {
    alert('Saveing changes to the listing...');
    this.router.navigateByUrl('/my-listings');
  }

}
