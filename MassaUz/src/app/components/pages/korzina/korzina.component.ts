import { Component } from '@angular/core';

@Component({
  selector: 'app-korzina',
  standalone: true,
  imports: [],
  templateUrl: './korzina.component.html',
  styleUrl: './korzina.component.scss'
})
export class KorzinaComponent {
  value:number=1
  cost:number=880
  withvalue:number=880
  plus(){
   this.value++
   this.withvalue=this.value*this.cost
  }
  minus(){
   if(this.value!=0){
      this.value--
      this.withvalue=this.value*this.cost

   }
  }
}
