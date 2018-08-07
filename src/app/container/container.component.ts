import { Component, OnInit } from '@angular/core';
import { AfterContentInit } from '@angular/core';
import { ContentChild } from '@angular/core';
import { ModalComponent } from 'src/app/modal/modal.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, AfterContentInit {
  @ContentChild(ModalComponent) modalComponent: ModalComponent;
  ngAfterContentInit(): void {
    this.modalComponent.close.subscribe(() => {
      // Open the item
      console.log(this.modalComponent);
      this.closeItem(this.modalComponent);
    });

  }
closeItem(item:ModalComponent) {
  if(this.modalComponent.isModalOpen){
    this.modalComponent.isModalOpen=false;
  }
}
openM(){
  this.modalComponent.isModalOpen=true;
}
  constructor() { }

  ngOnInit() {
  }

}
