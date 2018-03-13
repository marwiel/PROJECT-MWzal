import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
      if (!items) {
          return [];
      }

      return value ? items.filter(item => item.indexOf(value) !== -1) : items;
  }
}
