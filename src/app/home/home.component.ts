import { Component } from '@angular/core';
import { Alumno } from 'src/app/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public alumnos: Alumno[] = [
    new Alumno(1, 'Gruppo', 'Mariano', 'mgruppo@mail.com', 37, new Date('1985-11-26'),true),
    new Alumno(3, 'Joe', 'Doe', 'jdoe@mail.com', 35, new Date('1987-05-14'),false),
    new Alumno(4, 'Juan', 'Perez', 'kakashi@mail.com', 23, new Date('2000-02-24'),false),
    new Alumno(5, 'Paulo', 'Dybala', 'pdybala@mail.com', 29, new Date('1993-11-15'),true),
    new Alumno(6, 'Lionel', 'Messi', 'lmessi@mail.com', 35, new Date('1987-06-24'),true),
  ];
}
