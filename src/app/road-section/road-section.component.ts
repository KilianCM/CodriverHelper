import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'road-section',
  templateUrl: './road-section.component.html',
  styleUrls: ['./road-section.component.scss']
})
export class RoadSectionComponent implements OnInit {

  time = new Date();
  timeAllowed = 20;
  theoricTime = null;

  constructor() { }

  ngOnInit(): void {
  }

  setNow() {
    this.time = new Date();
  }

  computeTime() {
    this.theoricTime = moment(this.time).add(this.timeAllowed, 'm').toDate();
  }

}
