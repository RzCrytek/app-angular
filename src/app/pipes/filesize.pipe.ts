import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize'
})
export class FilesizePipe implements PipeTransform {

  transform(size: number, extension = 'MB'): string {
    // const transformedSize = `${size} ${extension.toUpperCase()}`;
    const transformedSize = `${(size / (1024 * 1024)).toFixed(2)} ${extension.toUpperCase()}`;
    return transformedSize;
  }

}
