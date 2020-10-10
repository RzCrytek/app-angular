import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectedish'
})
export class SelectedishPipe implements PipeTransform {

  transform(value: string): string {
    return `El platillo seleccionado es: ${value}`;
  }

}
