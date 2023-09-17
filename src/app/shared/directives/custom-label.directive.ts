import { Directive, ElementRef, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective {
  #htmlElement!: ElementRef<HTMLElement>;
  #color!: string;
  #errors?: ValidationErrors | null;

  constructor(private el: ElementRef<HTMLElement>) {
    this.#htmlElement = el;
    this.#htmlElement.nativeElement.textContent = 'Hello World';
  }

  @Input() set color(color: string) {
    this.#color = color;
    this.setLabelColor();
  }

  @Input() set errors(errors: ValidationErrors | null | undefined) {
    this.#errors = errors;
    this.setLabelError();
  }

  setLabelColor() {
    this.#htmlElement.nativeElement.style.color = this.#color;
  }

  setLabelError() {
    if (!this.#errors) {
      this.#htmlElement.nativeElement.textContent = 'No hay errores';
      return;
    }

    const errors = Object.keys(this.#errors);

    if (errors.includes('required')) {
      this.#htmlElement.nativeElement.textContent = 'El campo es requerido';
      return;
    }

    if (errors.includes('minlength')) {
      const minLength = this.#errors['minlength']['requiredLength'];
      const currentLength = this.#errors['minlength']['actualLength'];

      this.#htmlElement.nativeElement.textContent = `El campo debe tener al menos ${minLength} caracteres, actualmente tiene ${currentLength} caracteres`;
      return;
    }

    if (errors.includes('email')) {
      this.#htmlElement.nativeElement.textContent = `El campo debe ser un correo electrónico`;
      return;
    }
  }
}
