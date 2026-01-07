export class Player {
  _name;

    constructor(nuevoNombre) {
      this.name = nuevoNombre;  
    }

    set name(nombre){
      this._name = nombre;
    }

    get getName(){
      return this._name;
    }
  
  }