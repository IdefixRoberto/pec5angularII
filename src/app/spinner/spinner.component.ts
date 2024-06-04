import { Component, OnInit } from '@angular/core';
import { SppinerService } from '../service/sppiner.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent implements OnInit {
  isLoading: Observable<boolean>;

  constructor(private spinnerService: SppinerService) {
    this.isLoading = this.spinnerService.isLoading$;
  }

  ngOnInit(): void {}
}
