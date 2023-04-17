import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit{

  email: string = '';
  message: string = '';
  listing = {} as Listing; // initializing it like this because we only wasnt 1 listing and not a list

  constructor(
    private route: ActivatedRoute, // Allows listing-details-page to access the url parameter in current path
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find(listing => listing.id == id)!; // adding an exclamation makes typescript know that the value can never be null
    this.message = `Hi! I am interested in your ${this.listing.name.toLocaleLowerCase()}!`;
  }

  sendMessage(): void {
    alert('Your message has been sent!');
    this.router.navigateByUrl('/listings');
  }

}
