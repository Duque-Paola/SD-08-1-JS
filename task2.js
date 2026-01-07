export class Player {
  _name;
  _level;

    constructor(nuevoNombre,nivel) {
      this.name = nuevoNombre;  
      this._level = nivel;
    }

    set name(nombre){
      this._name = nombre;
    }

    get getName(){
      return this._name;
    }

    set level(nivel){
      this._level = nivel;
    }

    get getLevel(){
      return this._level;
    }
  }
