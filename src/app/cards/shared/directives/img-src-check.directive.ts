import { Directive, Input } from '@angular/core';

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
    return this.defaultImg;
  }
  public checkPath(src) {
    console.log(src);
    return src ? src : this.defaultImg;
  }
}
