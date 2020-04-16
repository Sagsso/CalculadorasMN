import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Calculator } from './calculator.model';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {


  calculators: Calculator[] = new Array();


  calculator: Calculator;
  
  constructor(private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {

    this.calculators['conversionesieee'] = {
      name: "Conversión de Bases e IEEE",
      description: "",
      images: ['assets/images/0.jpg', 'assets/images/1.jpg',
        'assets/images/2.jpg', 'assets/images/3.jpg',
        'assets/images/4.jpg', 'assets/images/5.jpg',
        'assets/images/6.jpg', 'assets/images/7.jpg',
        'assets/images/8.jpg', 'assets/images/9.jpg',
        'assets/images/10.jpg', 'assets/images/11.jpg',
        'assets/images/12.jpg'],
      downloadLink: ['/assets/Conversor de Bases.exe', '/assets/Calculadora IEEE.exe']
	// downloadLink: ['/assets/Calculadora IEEE.exe']
    }

    this.calculators['biseccion'] = {
      name: "Método de Bisección",
      description: "",
      images: ['assets/images/13.jpg', 'assets/images/14.jpg'],
      downloadLink: ['/assets/Metodo de Biseccion.exe']
    }

    this.calculators['reglafalsa'] = {
      name: "Método de Regla Falsa",
      description: "",
      images: ['assets/images/15.jpg', 'assets/images/16.jpg'],
      downloadLink: ['/assets/Metodo de la Regla Falsa.exe']
    }

    this.calculators['newtonraphson'] = {
      name: "Método de Newton Raphson",
      description: "",
      images: ['assets/images/17.jpg', 'assets/images/18.jpg'],
      downloadLink: ['/assets/Metodo de Newton Raphson.exe']
    }


    this.calculators['secante'] = {
      name: "Método de la Secante",
      description: "",
      images: ['assets/images/19.jpg'],
      downloadLink: ['/assets/Metodo de la Secante.exe']
    }

    this.calculators['raiz'] = {
      name: "Método de Raices",
      description: "",
      images: ['assets/images/20.jpg', 'assets/images/21.jpg'],
      downloadLink: ['/assets/Raices de Polinomios.exe']
    }

    this.calculators['rectangulos'] = {
      name: "Método de Rectángulos",
      description: "",
      images: ['assets/images/22.jpg', 'assets/images/23.jpg',
        'assets/images/24.jpg'],
      downloadLink: ['/assets/Metodo de Rectangulos.exe']
    }

    this.calculators['trapecios'] = {
      name: "Método de Trapecios",
      description: "",
      images: ['assets/images/25.jpg', 'assets/images/26.jpg',
        'assets/images/27.jpg', 'assets/images/28.jpg'],
      downloadLink: ['/assets/Metodo de Trapecios.exe']
    }

    this.calculators['simpson'] = {
      name: "Método de Simpson 1/3 y 3/8",
      description: "",
      images: ['assets/images/29.jpg', 'assets/images/30.jpg',
        'assets/images/31.jpg', 'assets/images/32.jpg',
        'assets/images/33.jpg', 'assets/images/34.jpg'],
      downloadLink: ['/assets/Metodo de Simpson Un Tercio.exe', '/assets/Metodo de SimpsonTres Octavos.exe']
      }
    this.calculators['montecarlo'] = {
      name: "Método de Montecarlo",
      description: "",
      images: ['assets/images/35.jpg', 'assets/images/36.jpg'],
      downloadLink: ['/assets/Metodo de Montecarlo.exe']
    }

    this.calculators['derivadas'] = {
      name: "Derivadas",
      description: "La Calculadora de Derivadas te permite calcular derivadas de funciones.Nuestra calculadora te permite verificar tus soluciones a ejercicios de Cálculo.La Calculadora de Derivadas soporta el cómputo de primeras y segundas derivadas.",
	    images: [],
      downloadLink: ['/assets/Derivadas.exe']
    }

    this.calculators['evaluador'] = {
      name: "Evaluador",
      description: "El Evaluador te permite evaluar funciones con los valores que ingreses. Nuestra calculadora te permite verificar tus soluciones a ejercicios de Cálculo.",
	    images: [],
      downloadLink: ['/assets/Evaluador.exe']
    }

    this.calculators['graficador'] = {
      name: "Graficador",
      description: "El Graficador te permite ingresar las funciones que deseas, y obtener su gráfica en el plano cartesiano con coordenadas(x, y), e identificar los puntos mediante el cursor",
	    images: [],
      downloadLink: ['/assets/Graficador.exe']
    }


    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.calculator = this.calculators[id];
      console.log(this.calculator);
      // this.product = this.productsService.getProductId(id);
    });
  }

}
