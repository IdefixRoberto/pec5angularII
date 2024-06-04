import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../service/images.service.ts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from '../models/image.interface';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {
  image!: Image;

  constructor(
    private imagesService: ImagesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Identifier --> ', identifier);
    if (identifier !== null) {
      this.imagesService.getImageById(identifier).subscribe((image) => {
        if (image) {
          this.image = image;
          return console.log('image ==> ', this.image);
        } else {
          return this.router.navigateByUrl('/');
        }
      });
    }
  }
}
