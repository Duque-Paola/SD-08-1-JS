export class Player {
  _name;
  _level;

    constructor(nuevoNombre,nivel) {
      this.name = nuevoNombre;  
      this.level = nivel;
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
    
    info(){
      return `${this._name} has reached Level ${this._level} !`
    }
    levelUp(){
      this.level = this.level + 1;
    }
}

const jugador = new Player("Joseph", 8);
const jugador2 = new Player("Kenan", 10);
console.log(jugador.info())
console.log(jugador2.info())
jugador.levelUp();