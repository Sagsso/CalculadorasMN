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
      description: "El estándar del IEEE para aritmética en coma flotante (IEEE 754) es la norma 	o estándar técnico para computación en coma flotante, establecida en 1985 por el Instituto 	de Ingenieros Eléctricos y Electrónicos(IEEE).La norma abordó muchos problemas encontrados en las diversas implementaciones de coma flotante que las hacían difíciles de usar de forma fiable	y portátil.Muchas unidades de coma flotante de hardware utilizan ahora el estándar IEEE 754. ",
      images: [''],
      downloadLink: ['/assets/Conversor de Bases.exe', '/assets/Calculadora IEEE.exe']
    }

    this.calculators['biseccion'] = {
      name: "Método de Bisección",
      description: "Conocido también como método de corte binario o método Bolzano, es un método de búsqueda incremental en el que el intervalo siempre se divide en 2, si la función cambia de signo sobre un intervalo, se evalúa el valor de la función en el punto medio, la posición de la raíz se determina situándola en el punto medio del subintervalo dentro de cual ocurre el cambio de signo.Este proceso se repite hasta obtener una mejor aproximación.",
	    images: [''],
      downloadLink: ['/assets/Metodo de Biseccion.exe']
    }


    this.calculators['reglafalsa'] = {
      name: "Método de Regla Falsa",
      description: "Este método alternativo que aprovecha la visualización grafica es la de unir f(Xi) & f(Xu) con una línea recta.La intersección de esta línea en el eje de las x representa una mejor estimación de la raíz.",
	    images: [''],
      downloadLink: ['/assets/Metodo de la Regla Falsa.exe']
    }
    
    this.calculators['newtonraphson'] = {
      name: "Método de Newton Raphson",
      description: "La relativa cercanía del punto inicial a la raíz depende mucho de la 	naturaleza de la propia función; si ésta presenta múltiples puntos de inflexión o pendientes 	grandes en el entorno de la raíz, entonces las probabilidades de que el algoritmo diverja aumentan, lo cual exige seleccionar un valor supuesto cercano a la raíz.Una vez que se ha hecho esto, el método 	linealiza la función por la recta tangente en ese valor supuesto.La abscisa en el origen de dicha recta	será, según el método, una mejor aproximación de la raíz que el valor anterior.Se realizarán sucesivas iteraciones hasta que el método haya convergido lo suficiente.",
	images: [''],
      downloadLink: ['/assets/Metodo de Newton Raphson.exe']
    }


    this.calculators['secante'] = {
      name: "Método de la Secante",
      description: "Es una variación del método de Newton-Raphson donde en vez de calcular la derivada de la 	función en el punto de estudio, teniendo en mente la definición de derivada, se aproxima la pendiente a la recta que une la función evaluada en el punto de estudio y en el punto de la iteración anterior. Este método es de especial interés cuando el coste computacional de derivar la función de estudio y evaluarla es demasiado elevado, por lo que el método de Newton no resulta atractivo.En otras palabras, el método de la secante es un algoritmo de la raíz de investigación que utiliza una serie de raíces de las líneas secantes para aproximar mejor la raíz de una función f.El método de la	secante se puede considerar como una aproximación en diferencias finitas del método de Newton- Raphson. Sin embargo, este método fue desarrollado independientemente de este último.",
    images: [''],
      downloadLink: ['/assets/Metodo de la Secante.exe']
  }

this.calculators['raiz'] = {
  name: "Método de Raices",
  description: "La determinación de las raíces de una ecuación es uno de los problemas más antiguos en matemáticas y se han realizado un gran número de esfuerzos en este sentido.	Su importancia radica en que si podemos determinar las raíces de una ecuación también podemos determinar máximos y mínimos, valores propios de matrices, resolver sistemas de ecuaciones lineales y diferenciales,  etc...",
	images: [''],
  downloadLink: ['/assets/Raices de Polinomios.exe']
}

this.calculators['rectangulos'] = {
  name: "Método de Rectángulos",
  description: "Integración numérica de una función por el método de rectángulos. La integral definida entre los puntos a y b de una función continua y acotada f(x) representa el área comprendida debajo	de esa función.En ocasiones es necesario calcular integrales(áreas) de modo numérico, es decir, sin conocer la integral explicita de la función f(x). ",
	images: [''],
  downloadLink: ['/assets/Metodo de Rectangulos.exe']
}

this.calculators['trapecios'] = {
  name: "Método de Trapecios",
  description: "En análisis numérico la regla del trapecio es un método de integración, es decir, un método para calcular aproximadamente el valor de una integral definida.",
	images: [''],
  downloadLink: ['/assets/Metodo de Trapecios.exe']
}

this.calculators['simpson'] = {
  name: "Método de Simpson 1/3 y 3/8",
  description: "En integración numérica, una forma de aproximar una integral definida en un intervalo [a,b] es mediante la regla del trapecio, es decir, que sobre cada subintervalo en el que se divide [a, b]	se aproxima f por un polinomio de primer grado, para luego calcular la integral como suma de las áreas 	de los trapecios formados en esos subintervalos .El método utilizado para la regla de Simpson sigue la 	misma filosofía, pero aproximando los subintervalos de f mediante polinomios de segundo grado.",
	images: [''],
  downloadLink: ['/assets/Metodo de Simpson Un Tercio.exe','/assets/Metodo de SimpsonTres Octavos.exe']
}

this.calculators['montecarlo'] = {
  name: "Método de Montecarlo",
  description: "El método de Montecarlo proporciona soluciones aproximadas a una gran variedad de problemas matemáticos posibilitando la realización de experimentos con muestreos de números pseudoaleatorios en una computadora.El método es aplicable a cualquier tipo de problema, ya sea estocástico o determinista. A diferencia de los métodos numéricos que se basan en evaluaciones en N puntos en un espacio M- dimensionalpara producir una solución aproximada, el método de Montecarlo tiene un error absoluto de la estimación que decrece en virtud del teorema del límite central.",
images: [''],
  downloadLink: ['/assets/Metodo de Montecarlo.exe']
}

this.calculators['derivadas'] = {
  name: "Derivadas",
  description: "La Calculadora de Derivadas te permite calcular derivadas de funciones.	Nuestra calculadora te permite verificar tus soluciones a ejercicios de Cálculo. La Calculadora de Derivadas soporta el cómputo de primeras y segundas derivadas.",
	images: [''],
  downloadLink: ['/assets/Derivadas.exe']
}

this.calculators['evaluador'] = {
  name: "Evaluador",
  description: "El Evaluador te permite evaluar funciones con los valores que ingreses.	Nuestra calculadora te permite verificar tus soluciones a ejercicios de Cálculo.",
	images: [''],
  downloadLink: ['/assets/Evaluador.exe']
}

this.calculators['graficador'] = {
  name: "Graficador",
  description: "El Graficador te permite ingresar las funciones que deseas, y obtener	su gráfica en el plano cartesiano con coordenadas(x, y), e identificar los puntos	mediante el cursor.",
	images: [''],
  downloadLink: ['/assets/Graficador.exe']
}

this.calculators['operacionesmatrices'] = {
  name: "Operaciones de Matrices",
  description: "Antes que todo cabe mencionar qué es una matriz. Una matriz es una forma rectangular	donde se ordenan los números reales mediante coordenadas reflejadas en los subíndices. a dimensión de una matriz se representa como la multiplicación de la dimensión de la fila con la 	dimensión de la columna.Denominamos(m) para la dimensión de las filas y(n) para la dimensión de	las columnas.Entonces, una matriz m x n tendrá m filas y n columnas.",
	images: [''],
  downloadLink: ['/assets/Matrices.exe']
}

this.calculators['gaussjordan'] = {
  name: "Gauss Jordan",
  description: "Este método debe su nombre a Carl Friedrich Gauss y a Wilhelm jordan.	Se trata de una serie de algoritmos del algebra lineal para determinar los resultados de un	sistema de ecuaciones lineales y así hallar matrices e inversas.El sistema de Gauss se utiliza 	para resolver un sistema de ecuaciones y obtener las soluciones por medio de la reducción del sistema ado a otro que sea equivalente en el cual cada una de las ecuaciones tendrá una incógnita menos que 	la anterior.La matriz que resulta de este proceso lleva el nombre que se conoce como forma escalonada.",
	images: [''],
  downloadLink: ['/assets/Gauss.exe']
}

this.calculators['curvas'] = {
  name: "Ajuste de Curvas",
  description: "Es un procedimiento de análisis numérico en la que, dados un conjunto de datos (pares ordenados y familia de funciones), se intenta determinar la función continua que mejor se aproxime a los datos(línea de regresión o la línea de mejor ajuste), proporcionando una demostración visual de la relación entre los puntos de estos.En su forma más simple,  busca minimizar la suma de cuadrados de las diferencias ordenadas(llamadas residuos) entre los puntos generados por la función y los correspondientes datos.",
	images: [''],
  downloadLink: ['/assets/Curvas.exe']
}

    this.calculators['documentacion'] = {
      name: "Documentación",
      description: "Aquí podrás descargar toda la documentación del curso",
      images: [''],
      downloadLink: ['/assets/Documentacion.docx']
    }


    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.calculator = this.calculators[id];
      console.log(this.calculator);
      // this.product = this.productsService.getProductId(id);
    });
  }

}
