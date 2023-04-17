import { Component } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  isOpened:boolean=false;

  toggle(): void {
    this.isOpened = !this.isOpened;
  }

  constructor(){}

  ngOnInit():void{}

}
