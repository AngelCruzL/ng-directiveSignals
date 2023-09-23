import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  counter = signal(10);
  squareCounter = computed(() => this.counter() ** 2);

  increaseBy(value: number) {
    this.counter.update(current => current + value);
  }
}
