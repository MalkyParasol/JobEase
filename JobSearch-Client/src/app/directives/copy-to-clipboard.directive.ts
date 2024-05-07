import {  Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appCopyToClipboard]'
})
export class CopyToClipboardDirective {

  @Input() copyText:string | undefined ;

  constructor() {}

  @HostListener('click')
  onClick():void{
    const textToCopy = this.copyText ?? '';
    const successful = this.copyToClipboard(textToCopy);
    if (successful) {
      console.log('Copied to clipboard!');
      alert('Copied');
    } else {
      console.warn('Failed to copy to clipboard!');
    }
  }

  private copyToClipboard(text: string): boolean {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      return document.execCommand('copy'); 
    } catch (err) {
      return false; 
    } finally {
      document.body.removeChild(textArea);
    }
  }

}
