# Variables y Operaciones
## Responde las siguientes preguntas:
1. ¿Qué es una variable y para qué sirve?
	* Una variable es una referecia a un espacio de memoria que definimos para almacenar un tipo de dato.
2. ¿Cuál es la diferencia entre declarar e inicializar una variable?
	* Inicializar una variable consiste en crear y asignar un valor por defecto, declarar consiste en crear la variable con su respectiva palabra reservada y nombrarla sin asignar valores.
3. ¿Cuál es la diferencia entre sumar números y concatenar strings?
	* La diferencia es que al sumar números obtienes un resultado de la operación sumar mientras que concatenar 		strigns consiste en unir estos elementos.
4. ¿Cuál operador me permite sumar o concatenar?
	* El operador que me permite sumar o concatenar es el + plus.

-----------------------------------------------------
## Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
   * Nombre
     * name type string
   * Apellido
     * lastName type string
   * Nombre de usuario
     * nickname type string
   * Edad
     * age type number
   * Correo electrónico
     * email type string
   * Mayor de edad
     * greaterAge type boolean
   * Dinero ahorrado
     * savedMoney type number
   * Deudas
     * debts type number

----------------------------------------------------------------
## Traduce a código JavaScript las variables del ejemplo anterior.
> `const name = 'Adrian';`
> 
>`const lastName = 'Ducuara Benitez';`
>
>`const nickname = '@adrianducuara';`
>
>`const age = 25;`
>
>`const email = 'adrian@mail.com';` 
>
>`const greaterAge = false;`
>
>`const savedMoney = 50000;`
>
>`const debts = 20000;`

----------------------------------------------------------------
## Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
### Nombre completo (nombre y apellido)
### Dinero real (dinero ahorrado menos deudas)


>``console.log(`Nombre y apellido: ${name} ${lastName}`);``
>
>``console.log(`Dinero ahorrado: $${savedMoney - debts}`);``

--------------------------------------------------------------
# Funciones
### Responde las siguientes preguntas:
1. ¿Qué es una función?:
   * Una función es un bloque de código escrito para solucionar una tarea específica.
2. ¿Cuándo me sirve usar una función en mi código?:
	* Una función en mi código sirve cuando escribimos
    líneas de código que se utilizan en repetidas ocasiones.
3. ¿Cuál es la diferencia entre parámetros y argumentos de una función?
	* Los parametros son variables que especificamos en los parentesis de una función cuando la estamos construyendo, en cambio los argumentos son los valores que introducimos en los parentesis de una función cuando la estamos invocando.

### Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

>`const name = "Adrian";`
>
>`const lastname = "Ducuara Benitez";`
>
>`const completeName = name + lastname;`
>
>`const nickname = "adrianducuara";`
>
>`console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");`

### Respuesta

	function printMyPersonalInfo(name, lastName, nickname) {
		console.log(`Mi nombre es ${name} ${lastName}, pero prefiero que me digas ${nickname}.`);
	}

-------------------------------------------------------------------------
# Condicionales

### Responde las siguientes preguntas en la sección de comentarios:
1. ¿Qué es un condicional?
	* Una condicional es una estructura de control que nos permite implementar condiciones en el flujo de ejecución de nuestro código.
2. ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
	* En JavaScript existe aproximadamente 3 el ifelse, switch y el ternario.

	#### Diferencias:
	* ****Ifelse****: Se evalua una condición y en el caso de ser true o verdadero ejecutará todas las instrucciones contenidas en el cuerpo del If de lo contrario si es false o falso ejecutará las instrucciones dentro del cuerpo de else.
	* ****switch****: Toma un elemento y evalúa los posibles valores que este tenga asignado, en el caso de cumplir con algun valor, este ejecutará las instrucciones correspondientes, al definir cada uno de los casos se debe 
	* finalizar con la palabra reservada break, porque esta estructura de control continuará ejecutando el resto de casos e instrucciones sin tomar criterios.
	* ****Ternario****: Tiene la misma funcionalidad del ifelse pero implementando esta condicional en una sola línea de la siguiente manera: (true) ? 'Hey' : 'Upss', es una forma corta de implementar esta estructura de control.

3. ¿Puedo combinar funciones y condicionales?
    * Claro que si, de hecho las funciones de acuerdo a su objetivo en algún momento sugirá la necesidad de tomar decisiones y de acuerdo a eso ejecutar cada una de sus líneas de código.
  
4. Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

		const tipoDeSuscripcion = "Basic";

		switch (tipoDeSuscripcion) {
			case "Free":
				console.log("Solo puedes tomar los cursos gratis");
				break;
			case "Basic":
				console.log("Puedes tomar casi todos los cursos durante un mes");
				break;
			case "Expert":
				console.log("Puedes tomar casi todos los cursos durante un año");
				break;
			case "ExpertPlus":
				console.log("Tú y alguien más pueden tomar TODOS los cursos durante un año");
				break;
		}

	### Respuesta
		const tipoDeSuscripcion = "ExpertPlus";

		if (tipoDeSuscripcion === 'Free') {
			console.log("Solo puedes tomar los cursos gratis");
		} else if (tipoDeSuscripcion === 'Basic') {
			console.log("Puedes tomar casi todos los cursos durante un mes");
		} else if (tipoDeSuscripcion === 'Expert') {
			console.log("Puedes tomar casi todos los cursos durante un año");
		} else {
			console.log("Tú y alguien más pueden tomar TODOS los cursos durante un año");
		}

### Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

	if (tipoDeSuscripcion === 'Free') {
		console.log("Solo puedes tomar los cursos gratis");
	}
	if (tipoDeSuscripcion === 'Basic') {
		console.log("Puedes tomar casi todos los cursos durante un mes");
	} 
	if (tipoDeSuscripcion === 'Expert') {
		console.log("Puedes tomar casi todos los cursos durante un año");
	} 
	if(tipoDeSuscripcion === 'ExpertPlus') {
		console.log("Tú y alguien más pueden tomar TODOS los cursos durante un año");
	}
--------------------------------------------------------------------------------
>### 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏
---------------------------------------------------------------------------------
### ***Respuesta con objetos***:
	const tipoDeSuscripcion = "Free";

	const plansSuscription = {
		"Free": {
			"message": "Solo puedes tomar los cursos gratis"
		},
		"Basic": {
			"message": "Puedes tomar casi todos los cursos durante un mes"
		},
		"Expert": {
			"message": "Puedes tomar casi todos los cursos durante un año"
		},
		"ExpertPlus": {
			"message": "Tú y alguien más pueden tomar TODOS los cursos durante un año"
		}
	}

	if (plansSuscription[tipoDeSuscripcion]) {
		console.log(plansSuscription[tipoDeSuscripcion].message);
	} else {
		throw Error('Plan no exist');
	}

### ***Ahora con Array***:

	const tipoDeSuscripcion = "Free";


	const plansSuscription = ['Free', 'Basic', 'Expert', 'ExpertPlus'];
	const plansSuscriptionMessage = [
		'Solo puedes tomar los cursos gratis', 
		'Puedes tomar casi todos los cursos durante un mes', 'Puedes tomar casi todos los cursos durante un año', 
		'Tú y alguien más pueden tomar TODOS los cursos durante un año'
	];

	for(let index in plansSuscription) {
		if (tipoDeSuscripcion === plansSuscription[index]) {
			console.log(plansSuscriptionMessage[index]);
		}
	}

-------------------------------------------------------------
# Ciclos
### Responde las siguientes preguntas:
1. ¿Qué es un ciclo?
	* Un ciclo es una estructura de control que se encarga de ejecutar instrucciones en un número determinado o indeterminado de veces.
2. ¿Qué tipos de ciclos existen en JavaScript?
    * Exite los siguiente:
        - Ciclo for
        - Ciclo for in
        - Ciclo for of
        - Ciclo while
        - Ciclo do while
3. ¿Qué es un ciclo infinito y por qué es un problema?
    * Un ciclo infinito es el momento donde cualquiera de estas estructuras de control se ejecutan en un número indeterminado de veces e infinito, quiere decir que no existe una condición o criterio para finalizar la ejecución. 
	Esto es un problema porque puede ocasionar un stackOverFlow, es decir, una sobre carga en la memoria Ram congelando el funcionamiento del computador.
4. ¿Puedo mezclar ciclos y condicionales?
    * Si, en algunas oportunidades tal vez queremos utilizar, como es habitual un ciclo para leer una colección de datos y tal vez dependiendo de algunos criterios que estos valores cumplan, ejecutar una instrucción.

### Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
	for (let i = 0; i < 5; i++) {
	    console.log("El valor de i es: " + i);
	}
### Respuesta
	let i = 0;
	while (i < 5) {
		console.log("El valor de i es: " + i);
		i++;
	}
###
	for (let i = 10; i >= 2; i--) {
		console.log("El valor de i es: " + i);
	}
### Respuesta:
	let i = 10;
	while (i >= 2) {
		console.log("El valor de i es: " + i);
		i--;
	}
### Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
>💡 Pista: puedes usar la función prompt de JavaScript.

	let sentinel = false;

	do {
		const userNumber = Number(prompt("¿Cuánto es 2 + 2", 0));
		if ( userNumber === 4) {
			console.log("Felicitaciones!");
			sentinel = true;
		}
	}while (sentinel !== true);

-------------------------------------------------------------
# Listas
### Responde las siguientes preguntas:
1. ¿Qué es un array?
    * Un array es una estructura de datos que nos permite almacenar un conjunto de elementos de cualquier tipo cada elemento es alamacenado y referenciado con indices del 0 al infinito según sea la cantidad total.
2. ¿Qué es un objeto?
    * Un objeto es la forma forma de almacenar y organizar un conjunto de datos, no se si podría decir que es una  estructura de datos, sin embargo nos permite almacenar datos en llave/valor, aquí no hacemos referencia a cada uno de los valores por indice sino por key-clave personalizadas.
3. ¿Cuándo es mejor usar objetos o arrays?
    * Depende de la necesidad en algunos escenarios es notable la ventaja y desventajas de uno u otro.
4. ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
    * Claro que si, en algunas ocasiones podemos tener un objeto donde tal vez algunas de sus keys o propiedades puede contener como valor un array de elementos.
### Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
	function printFirstElement(array) {
		console.log("Primer elemento del array es: " + array[0]);
	}
	printFirstElement([3, 6, 1, 0]);
### Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
	function printElementOfArray(array) {
		for(let index in array) {
			console.log("Elemento con indice " + index + " -> " + array[index]);
		}
	}
	printElementOfArray([2, 0, "Banano", [ 'Marte', 'Jupiter'], 'mango']);
### Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
	const Person = {
		name: "Adrian",
		lastName: "Ducuara",
		favorite: [
			"Software Dev",
			"Music",
			"Drums",
			"Reflexion",
			"Travel"
		],
	}

	function printObjElement(obj) {
		for(let property in obj) {
			console.log(`${property} : ${obj[property]}`)
		}
	}

	printObjElement(Person);