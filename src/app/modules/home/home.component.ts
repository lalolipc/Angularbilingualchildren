import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({ selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.scss'] })


export class HomeComponent {
  slidesStore = [{ path: '../../assets/books1920x480.jpg', title: "Books" },
  { path: '../../assets/kitchen1920x480.jpg', title: "Kitchen" },
  { path: '../../assets/music1920x480.jpg', title: "Music" },
  { path: '../../assets/park1920x480.jpg', title: "The Park" }];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 500,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}