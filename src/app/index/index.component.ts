import { Component, OnInit } from '@angular/core';
declare const carisols: any;
declare const myTest: any;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() {

    carisols()
    myTest();
   }

  ngOnInit() {
  }

}
