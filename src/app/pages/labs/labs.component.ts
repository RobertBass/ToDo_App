import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Hola Mundo';
  tasks = signal([
    'Instalar Angular',
    'Crear Proyecto',
    'Crear Componente',
    'Crear Servicio'
  ]);
  name = signal('Roberto');
  age = signal(38);
  disabled = false;
  img = 'https://w3schools.com/howto/img_avatar.png';

  person = {
    name: 'Roberto',
    age: 18,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  }

  clickHandler(){
    alert('Hola')
  }

  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value
    this.name.set(newValue);
    console.log(this.name);
  }

  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}
