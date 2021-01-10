class Persona{
	constructor(nombre, edad, genero){
		this.nombre = nombre;
		this.edad = edad;
		this.genero = genero;
	}

	//metodo obtener detalle de persona
	obtDetalles(){
		console.log(`Hola, mi nombre es ${this.nombre} tengo ${this.edad} años de edad y mi genero es ${this.genero} y soy una persona`)
	}
};

class Estudiante extends Persona{
	constructor(nombre, edad, genero, curso, grupo){
		super(nombre, edad, genero);
		this.curso = curso;
		this.grupo = grupo;
	}
	//metodo registrar curso
	registrar(){
		console.log(`Usted ha sido registrado en el ${this.curso} curso`);
	}
}

class Profesor extends Persona{
	constructor(nombre, edad, genero, curso, grupo, asignatura, nivel){
		super(nombre, edad, genero, curso, grupo);
		this.asignatura = asignatura;
		this.nivel = nivel;
	}

	//metodo asignar
	asignar(){
		console.log(`Al docente ${this.nombre} se le ha asignado la asignatura de ${this.asignatura} nivel II`)
	}
}

const persona = new Persona('Anthony', 21, 'masculino');
const estudiante = new Estudiante('Enrique', 22 ,'masculino', 'noveno', 'primer');
const docente = new Profesor('Mario', 41, 'masculino', 'noveno', 'primer', 'Matemáticas', 'II')

persona.obtDetalles();
estudiante.registrar();
docente.asignar();
