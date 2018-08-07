import { Directive } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { HostListener } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';

@Directive({
  selector: '[appOverlyDirective]'
})
export class OverlyDirectiveDirective implements OnInit,OnDestroy,OnChanges {

  @Input() isOpen: boolean;
  @Output() toggle = new EventEmitter<any>();
  constructor(private el: ElementRef, private renderer: Renderer2) { 
  }
  ngOnChanges(changes: SimpleChanges): void {
    if( this.isOpen ){
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    }
  }
  ngOnInit() {}
 
  ngOnDestroy(): void {
   // console.log("ngOnDestroy")
    this.renderer.setStyle(document.body, 'overflow-y', 'auto');
  }
  @HostListener('click') onClick(event) {
    this.toggle.emit();
  }
}
