import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBoxShadow]'
})
export class BoxShadowDirective implements OnInit {

  @Input() appBoxShadow: boolean;
  @Input() appBoxShadowX: string;
  @Input() appBoxShadowY: string;
  @Input() appBoxShadowBlur: string;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    console.log(this.appBoxShadow);
    console.log(this.element.nativeElement);

    this.setBorder(this.appBoxShadow);
    this.setShadow(this.appBoxShadowX, this.appBoxShadowY, this.appBoxShadowBlur);
  }

  setBorder(value: boolean): void {
    const myClass = value ? 'stock' : 'no-stock';
    this.renderer.setAttribute(this.element.nativeElement, 'class', myClass);
  }

  setShadow(x: string, y: string, blur = '0'): void {
    const shadow = `${x} ${y} ${blur}`;
    this.renderer.setStyle(this.element.nativeElement, 'box-shadow', shadow);
  }

}
