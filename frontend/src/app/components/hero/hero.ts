import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from '../button/button';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, Button],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() buttonLabel: string = '';
  @Output() buttonClicked = new EventEmitter<void>();
}
