import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconsModule } from '../icons/icons.module';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, IconsModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  navbar: boolean = false;

  toggleNavbar(): void {
    this.navbar = !this.navbar;
  }
}
