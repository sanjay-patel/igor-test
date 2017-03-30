import { Component, AfterViewInit, OnInit } from '@angular/core';

import { ApiService } from './shared';

import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  url = 'https://github.com/preboot/angular2-webpack';
  title: string;
  private opened: boolean = false;
  constructor(private api: ApiService) {
    this.title = this.api.title;
  }
  
  ngOnInit() {}
  ngAfterViewInit() {}
  
  toggleSidebar() {
    this.opened = !this.opened;
  }
}
