import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'theme-toggle',
  template: `
    <button
      (click)="toggleTheme()"
      class="px-4 py-2 text-white bg-gray-800 rounded dark:bg-gray-200 dark:text-black"
    >
      Toggle Theme
    </button>
  `,
})
export class ThemeToggleComponent {
  constructor(private themeService: ThemeService) {}

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}