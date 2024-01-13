import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
@Component({
  selector: 'app-imgslider',
  templateUrl: './imgslider.component.html',
  styleUrls: ['./imgslider.component.css']
})
export class ImgsliderComponent implements OnInit {
  images: string[] = [
    '/assets/image-1.jpeg',
    '/assets/image-2.jpeg',
    '/assets/image-3.jpeg',
    // Add more image paths as needed
  ];

  ngOnInit(): void {
    this.initSwiper();
  }

  private initSwiper(): void {
    const swiper = new Swiper('.swiper-container', {
      // Optional: Add additional Swiper options here
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}
