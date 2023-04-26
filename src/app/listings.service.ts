import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Listing } from './types';

/**
 * RxJS - Library that makes working with async and eventbased code a lot easier
 * HTTPClient - Angular model that makes request to the server
 */

// tells server that request body of POST request is a Json object (which is needed for a POST request to work)
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(
    private http: HttpClient,
  ) { }

  getListings(): Observable<Listing []> {
    // An observable is how Angular incorporates async logic into it apps
    // An observable is some task that our app is executing, in this case,
    // loading data from a server, that our components then can subscribe to
    return this.http.get<Listing []>('/api/listings');
  }

  getListingById(id: string): Observable<Listing>{
    return this.http.get<Listing>(`/api/listings/${id}`);
  }

  // updates the views in the listing
  addViewToListing(id: string): Observable<Listing>{
    return this.http.post<Listing>(
      `/api/listings/${id}/add-view`,
      {},
      httpOptions,
    )
  }
}
