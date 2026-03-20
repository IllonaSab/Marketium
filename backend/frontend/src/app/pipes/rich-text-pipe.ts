import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'richText',
})
export class RichTextPipe implements PipeTransform {
  transform(blocks: any[]): string {
    if (!blocks || !Array.isArray(blocks)) return '';

    return blocks
      .map((block) => {
        if (block.type === 'paragraph') {
          const text = block.children?.map((child: any) => child.text).join('') || '';
          return `<p>${text}</p>`;
        }
        if (block.type === 'heading') {
          const text = block.children?.map((child: any) => child.text).join('') || '';
          return `<h${block.level}>${text}</h${block.level}>`;
        }
        if (block.type === 'list') {
          const items = block.children
            ?.map((item: any) => {
              const text = item.children?.map((child: any) => child.text).join('') || '';
              return `<li>${text}</li>`;
            })
            .join('');
          return block.format === 'ordered' ? `<ol>${items}</ol>` : `<ul>${items}</ul>`;
        }
        return '';
      })
      .join('');
  }
}
