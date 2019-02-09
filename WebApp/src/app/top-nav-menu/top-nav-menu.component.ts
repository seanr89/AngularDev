import { Component, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-top-nav-menu',
  templateUrl: './top-nav-menu.component.html',
  styleUrls: ['./top-nav-menu.component.css']
})
export class TopNavMenuComponent implements OnInit {

  private Title: string;

  constructor() {
      this.Title = 'Top Menu';
   }

  ngOnInit() {
  }

}
