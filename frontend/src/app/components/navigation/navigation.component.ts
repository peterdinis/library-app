import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule, Menu, X } from 'lucide-angular';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, LucideAngularModule.pick({ Menu, X })],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  navbar: boolean = false;

  toggleNavbar(): void {
    this.navbar = !this.navbar;
  }
}
