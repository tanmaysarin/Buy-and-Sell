import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css']
})
export class ListingDataFormComponent implements OnInit{

  @Input() buttonText: any; // buttonText variable will be defined in the html files of the components from where the button will be clicked

  // defining the variables to store the current values in the fields, and setting them to empty if the fields were left empty
  @Input() currentName: string = '';
  @Input() currentDescription: string = '';
  @Input() currentPrice: string = '';

  // defining the variables of the listing , used in the html file
  id: string = '';
  name: string = '';
  description: string = '';
  price: string = '';

  @Output() onSubmit = new EventEmitter<Listing>();

  constructor(
    private router: Router,
  ) {}
  
  ngOnInit(): void {
    // updating the values of the variables used in the html file, with the current values in the field
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.price;
  }

  // when the button is clicked, it called an onSubmit method/function, which should be defined in
  // that particular component's component.ts file.
  onButtonClicked(): void {
    this.onSubmit.emit({
      id: this.id,
      name: this.name,
      description: this.description,
      price: Number(this.price),
    })
  }

}
