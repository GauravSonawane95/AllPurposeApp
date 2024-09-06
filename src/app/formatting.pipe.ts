import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer,SafeHtml } from '@angular/platform-browser';
@Pipe({
  name: 'formatting'
})
export class FormattingPipe implements PipeTransform {
 
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    if (!value) {
      return value;
    }

    let formattedText = value;

    // Replace "## " with <h1> tags
    formattedText = formattedText.replace(/^## (.+)$/gm, '<h1>$1</h1>');

    // Replace "**" with <h2> tags
    formattedText = formattedText.replace(/\*\*(.+?)\*\*/g, '<h2>$1</h2>');

    // Replace "* **" with <p> tags
    formattedText = formattedText.replace(/^\* \*\*(.+?)\*\*$/gm, '<p>$1</p>');

    // Ensure paragraphs are separated by <br> tags
    formattedText = formattedText.replace(/\n/g, '<br>');

    // Sanitize the formatted HTML
    return this.sanitizer.bypassSecurityTrustHtml(formattedText);
  }
}
