import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagesService } from './images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit, OnDestroy {
  images: any = [];
  constructor(private imagesService: ImagesService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  search() {
    this.imagesService.search('')
      .subscribe(response => {
        console.log(response.data[0].images.downsized_medium?.url);
        this.images = response.data;
      });
  }
}
