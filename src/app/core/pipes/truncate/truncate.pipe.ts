import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {


  transform(value: string, ...args: any[]): string {

    const limit = args[0] > 0? args[0]: 10
    const endChar = args[1] ? args[1]: '...'

    return value.substring(0, limit).trim() + ' '+endChar ;
  }

}
