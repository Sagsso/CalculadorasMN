import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'CalculatorsWeb';
  calculatorsList = [
    { route: 'conversionesieee', title: 'Conversión de Bases e IEEE' },
	{ route: 'biseccion', title: 'Método de Bisección' },
	{ route: 'reglafalsa', title: 'Método de Regla Falsa' },
	{ route: 'newtonraphson', title: 'Método de Newton Raphson' },
	{ route: 'secante', title: 'Método de la Secante' },
	{ route: 'raiz', title: 'Método de Raices' },
	{ route: 'rectangulos', title: 'Método de Rectángulos' },
	{ route: 'trapecios', title: 'Método de Trapecios' },	
	{ route: 'simpson', title: 'Método de Simpson 1/3 y 3/8' },
	{ route: 'montecarlo', title: 'Método de Montecarlo' },
	{ route: 'derivadas', title: 'Derivadas' },
	{ route: 'evaluador', title: 'Evaluador' },	
	{ route: 'graficador', title: 'Graficador' }
  ];


  constructor(private router: Router){}

  calculatorClick(name: string) {
    this.router.navigate([`/calculator/${name}`]);
  }
  goHome() {
    this.router.navigate([``]);
  }
}

