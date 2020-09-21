import { Component } from '@angular/core';

@Component({
  selector: 'app-body-calculator',
  templateUrl: './body-calculator.component.html',
  styleUrls: ['./body-calculator.component.css']
})
export class BodyCalculatorComponent {
  resultado : string ='';
  botonesFila1 : string []=['AC','CE','*','/'];
  botonesFila2 : string []=['7','8','9','+'];
  botonesFila3 : string []=['6','5','4','-'];
  botonesFila4 : string []=['3','2','1','='];

  AgregarExprecion( valor :string){
    if(valor =='CE' || valor == 'AC')
    {
      this.resultado = '';
    }
    else
    {
      if(valor=='=')    
      {
        this.resultado = eval(this.resultado);
        if(!this.isNumber(this.resultado))
        {
          this.resultado='Math Error';
        }
      }
      else
      {
        this.resultado = this.resultado + valor;
      }
    }
  }

  

  isNumber(value: string | number): boolean
  {
    return ((value != null) &&
      (value !== '') &&
    !isNaN(Number(value.toString())));
}


}
