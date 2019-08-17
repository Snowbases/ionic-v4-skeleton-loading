import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  mode: string
  _text: string;
  _image: string;
  @Input() width: any;
  @Input() height: any;
  @Input() radius: any;
  @Input()
  set text(val: any) {
    this.mode = 'text';
    console.log('currently selected text', val);
    this._text = val;

    if (typeof this._text !== "undefined" && this._text !== "") {
      this.removeLoading();
    }
  }
  @Input()
  set image(val: any) {
    this.mode = 'image';
    console.log('currently selected image', val);
    this._image = val;

    if (typeof this._image !== "undefined" && this._image !== "") {
      this.removeLoading();
    }
  }
  styles: any = {};

  constructor(
    private elementRef: ElementRef,
    private renderer2: Renderer2,
  ) {

  }

  ngOnInit() {
    this.createLoading();
  }

  createLoading() {
    this.renderer2.setStyle(
      this.elementRef.nativeElement.querySelector("#loading"),
      "width",
      this.width
    );
    this.renderer2.setStyle(
      this.elementRef.nativeElement.querySelector("#loading"),
      "height",
      this.height
    );
    if (typeof this.radius !== "undefined" && this.radius !== "") {
      this.renderer2.setStyle(
        this.elementRef.nativeElement.querySelector("#loading"),
        "border-radius",
        this.radius
      );
      this.styles = {
        width: this.width,
        height: this.height
      }
      this.styles.borderRadius = this.radius;
    }
    console.log('create loading');
  }

  removeLoading() {
    this.renderer2.removeClass(
      this.elementRef.nativeElement.querySelector("#loading"),
      "linear-background"
    );
    console.log('remove loading');
  }
}
