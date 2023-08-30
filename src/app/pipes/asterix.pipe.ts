import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(ch: string) {
    let voyels:any = ["A","E","O","I","U","Y", "a", "e", "i", "o", "u", "y"];
    let toCh: string= "";
      for (let i = 0; i < ch.length; i++) {
        for (let j = 0; j < voyels.length; j++) {
          if (ch[i] == voyels[j]){
            toCh += "*";
            break;
          }
          
        }
        if (toCh.length == i){
          toCh += ch[i];
        }
        
      }
      return toCh;

  }

}
