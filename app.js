class Persona {
    constructor(name, age, dni, sexo, peso, altura, fecha) {
        this.name = name;
        this.age = age;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.fecha = fecha;
    }
    mostrarGeneracion () {
        if (this.fecha >= 1994 && this.fecha <= 2010) {
            document.write(`<b>Generacion :</b> Z <br> <b>Rasgo Caracterisitco :</b> Irreverencia`);
        } else if (this.fecha >= 1981 && this.fecha <= 1993) {
            document.write(`<b>Generacion :</b> Y <br> <b>Rasgo Caracterisitco :</b> Frustacion`);
        } else if (this.fecha >= 1969 && this.fecha <= 1980) {
            document.write(`<b>Generacion :</b> X <br> <b>Rasgo Caracterisitco :</b> Obsesion por el exito`);
        } else if(this.fecha >= 1981 && this.fecha <= 1993){
            document.write(`<b>Generacion :</b> Baby Boom <br> <b>Rasgo Caracterisitco :</b> Ambicion`);
        } else if(this.fecha >= 1981 && this.fecha <= 1993){
            document.write(`<b>Generacion :</b> Silent Generation <br> <b>Rasgo Caracterisitco :</b> Austeridad`);
        }
    }
    esMayorDeEdad () {
        if (this.age <= 17){
            alert("Eres Menor de edad");
        }else{
            alert("Eres Mayor de edad")
        }
    }
    mostrarDatos () {
        for(let key in this){
            console.log(`${key} : ${this[key]}`);
        }
    } 
    generarDNI () {
        let numero = Math.round(Math.random()*100000000)
        while(numero.toString().length !== 8){
            numero = Math.round(Math.random()*100000000)
        }
        console.log(numero);
    }
}


const nolasco = new Persona("nolasco", 11, 45443536, "H", 80, 185, 2004)
