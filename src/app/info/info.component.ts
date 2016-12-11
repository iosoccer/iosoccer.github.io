import { Component, OnInit } from '@angular/core';

interface Event {
  date: string;
  text: string;
  offset: number;
};

@Component({
  selector: 'ios-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  events: Event[];

  constructor() { }

  ngOnInit() {

    this.events = [
      {date: '2002', text: 'Event #1', offset: 20},
      {date: '2005', text: 'Event #2', offset: 60},
      {date: '2010', text: 'Event #3', offset: 100},
    ];
  }

}
