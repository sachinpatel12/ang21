import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name:'firstCharToUpperCase'
})


export class firstCharToUpperCase implements PipeTransform{
   

    transform(value: any, ...args: any[]) {
         if (!value) return '';

    const trimmed = value.trim();

    if (trimmed.length === 0) return '';

    return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
    }
}