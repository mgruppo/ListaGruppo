export interface IAlumno {
    legajo: number;
    nombre: string;
    apellido: string;
    email: string;
    edad: number;
    nacimiento: Date;
    activo: boolean;
  }
  
  export class Alumno implements IAlumno {
    constructor(
      public legajo: number,
      public nombre: string,
      public apellido: string,
      public email: string,
      public edad: number,
      public nacimiento: Date,
      public activo: boolean,
    ) {}
  
    get fullName(): string {
      return this.nombre + ' ' + this.apellido;
    }

    alternarRegularidad(ev: MouseEvent) {
      this.activo = !this.activo;
    }

}    