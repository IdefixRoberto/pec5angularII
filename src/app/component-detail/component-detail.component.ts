import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentListService } from '../service/component-list.service';
import { PixabayApiResponse } from '../models/pixabayApiCard.interficie';
import { SppinerService } from '../service/sppiner.service';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-detail.component.html',
  styleUrls: ['./component-detail.component.css'],
})
export class ComponentDetailComponent implements OnInit {
  card: PixabayApiResponse['hits'][0] | undefined;
  progress = 0;
  displayClass = 'displayNone';
  progressColor = '';
  progressClass = '';
  toggleIcon = faPlus;
  interval: any;

  constructor(
    private componentListService: ComponentListService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private spinnerService: SppinerService
  ) {}

  ngOnInit(): void {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      if (id) {
        this.componentListService.getImageById(+id).subscribe((response) => {
          this.card = response.hits[0];
        });
      }
    }, 300);
  }

  goBack(): void {
    this.spinnerService.show();
    setTimeout(() => {
      this.router.navigate(['/']);
      this.spinnerService.hide();
    }, 300);
  }

  toggleDisplay(): void {
    this.displayClass =
      this.displayClass === 'displayNone' ? 'displayFlex' : 'displayNone';
    if (this.displayClass === 'displayFlex') {
      this.animateProgress();
    } else {
      clearInterval(this.interval);
    }
    this.toggleIcon = this.displayClass === 'displayNone' ? faPlus : faMinus;
  }

  private animateProgress(): void {
    this.progress = 0;
    clearInterval(this.interval);
    const targetProgress = Math.floor(Math.random() * 100) + 1;
    this.interval = setInterval(() => {
      if (this.progress < targetProgress) {
        this.progress++;
        this.setProgressColor();
        this.updateProgressBarWidth();
      } else {
        clearInterval(this.interval);
      }
    }, 60);
  }

  setProgressColor(): string {
    if (this.progress < 25) {
      return 'red'; // Red
    } else if (this.progress < 50) {
      return 'orange'; // Orange
    } else if (this.progress < 65) {
      return 'yellow'; // Yellow
    } else if (this.progress < 80) {
      return 'blue'; // Blue
    } else {
      return 'green'; // Green
    }
  }

  private updateProgressBarWidth(): void {
    const progressBar = document.querySelector(
      '.mat-progress-bar-primary'
    ) as HTMLElement;
    if (progressBar) {
      progressBar.style.width = `${this.progress}%`;
    }
  }
}
