import { Component, OnInit } from '@angular/core';
import { ComponentListService } from '../service/component-list.service';
import { PixabayApiResponse } from '../models/pixabayApiCard.interficie';
import { SppinerService } from '../service/sppiner.service';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
} from '@angular/animations';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-20px)' }),
            stagger('300ms', [
              animate(
                '500ms ease-out',
                style({ opacity: 1, transform: 'translateY(0)' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class ComponentListComponent implements OnInit {
  cards: PixabayApiResponse['hits'] = [];
  isCardView: boolean = true;

  constructor(
    private componentListService: ComponentListService,
    private spinnerService: SppinerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.spinnerService.show();

    setTimeout(() => {
      this.spinnerService.hide();
      this.componentListService
        .getAllImages()
        .subscribe((response: PixabayApiResponse) => {
          this.cards = response.hits;
        });
    }, 1000);
  }

  showCardView() {
    this.isCardView = true;
  }

  showListView() {
    this.isCardView = false;
  }
}
