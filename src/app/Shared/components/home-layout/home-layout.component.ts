import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var initLayout: any;
@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css'],
})
export class HomeLayoutComponent implements OnInit, AfterViewInit {
  constructor() {}
  ngAfterViewInit(): void {
    initLayout();
  }

  ngOnInit(): void {}
}
