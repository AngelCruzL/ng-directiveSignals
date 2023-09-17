import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  color: string = 'red';
  #formBuilder = inject(FormBuilder);
  productForm = this.#formBuilder.group({
    name: [
      '',
      [Validators.required, Validators.minLength(6), Validators.email],
    ],
  });

  changeToRandomColor() {
    this.color = '#xxxxxx'.replace(/x/g, y =>
      ((Math.random() * 16) | 0).toString(16),
    );
  }
}
