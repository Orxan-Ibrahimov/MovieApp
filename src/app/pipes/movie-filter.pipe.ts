import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/movie';

@Pipe({
  name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {

  transform(value:Movie[], filterText:string): Movie[] {
    filterText = filterText?.toLowerCase();

    return filterText?value.filter((m:Movie) => m.name.toLowerCase().indexOf(filterText) !== -1):value;
  }

}
