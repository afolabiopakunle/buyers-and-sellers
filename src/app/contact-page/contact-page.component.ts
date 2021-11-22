import { Component, OnInit } from '@angular/core';
import {Listing} from "../types";
import {ActivatedRoute, Router} from "@angular/router";

import { fakeListings } from "../fake-data";

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  email: string = '';
  message: string = '';
  listing!: Listing;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find(listing => listing.id === id) as Listing;
    this.message = `Hi, I'm interested in your ${this.listing.name}
    `
    console.log(this.message)
  }

}
