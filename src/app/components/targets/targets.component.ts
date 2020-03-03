import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-targets',
  templateUrl: './targets.component.html',
  styleUrls: ['./targets.component.scss']
})
export class TargetsComponent implements OnInit {

  @Input() items: any [] = [];


  constructor( private route: Router ) {}

  verArtista( item: any ) {

    let artistaId;

    if ( item.type === 'artist'){
      artistaId = item.id;
    }else {
      artistaId = item.artists[0].id;
    }

    this.route.navigate([ '/artist', artistaId ]);

  }

  ngOnInit() {
  }

}
