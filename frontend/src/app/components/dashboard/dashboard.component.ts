import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  longText = `Congratulation ! You are now part of the community Next Recruitment.`;

  constructor() { }

  ngOnInit() {
  }

}
