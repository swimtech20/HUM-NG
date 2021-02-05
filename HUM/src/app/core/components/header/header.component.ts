import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showEggs: boolean = true;
  dummyHouseID: number = 32;

  constructor() {}

  ngOnInit(): void {}
}
