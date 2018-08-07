import { Component, OnInit, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() isModalOpen:boolean;
  @Output() close = new EventEmitter<any>();
  @Output() open = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  closeModal(){
    this.close.emit() ;
  }

}
