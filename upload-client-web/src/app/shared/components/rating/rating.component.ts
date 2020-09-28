import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input() amount;
  constructor() { }

  ngOnInit(): void {
  }

  getNumber(): Array<number> {
    return new Array(this.amount);
  }

}
