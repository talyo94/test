import { Directive, Input } from '@angular/core';

// if there is an error with image src, load placeholder

@Directive({
  selector: 'img[src]',
  host: {
    '[src]': 'checkPath(src)',
    '(error)': 'onError()'
  }
})
export class ImgSrcCheckDirective {
  @Input() src: string;

  public defaultImg: string = 'http://via.placeholder.com/350x150';
  public onError() {
    this.src =  this.defaultImg;
  }
  public checkPath(src) {
    return src ? src : this.defaultImg;
  }
}
