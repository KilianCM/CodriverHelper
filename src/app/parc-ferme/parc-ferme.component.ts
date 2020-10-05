import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'parc-ferme',
  templateUrl: './parc-ferme.component.html',
  styleUrls: ['./parc-ferme.component.scss']
})
export class ParcFermeComponent implements OnInit {

  entry = new Date();
  duration = 20;
  exit = null;
  entryAllowed = null;

  constructor() { }

  ngOnInit(): void {
  }

  setNow() {
    this.entry = new Date();
  }

  computeExitHour() {
    this.exit = moment(this.entry).add(this.duration, 'm').toDate();
    this.entryAllowed = moment(this.exit).add(-10, 'm').toDate();
  }
}
