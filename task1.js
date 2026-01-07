export class Player {
  name;

    constructor(nombre) {
      this.name = nombre;  
    }

    set name(nombre){
      this.name = nombre;
    }

    get getNombre(){
      return this.name;
    }
  
    
  }