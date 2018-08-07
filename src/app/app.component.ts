import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isOpend:boolean=false;
  
  constructor(){}
   
   openX(){
    this.isOpend=true;
  }
  closeX(){
    this.isOpend=false;
  }
}
