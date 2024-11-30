import { Component } from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [IconsModule, ButtonModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
}
