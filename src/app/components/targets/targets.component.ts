import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-targets',
  templateUrl: './targets.component.html',
  styleUrls: ['./targets.component.scss']
})
export class TargetsComponent implements OnInit {

  @Input() items: any [] = [];


  constructor() {}

  ngOnInit() {
  }

}
