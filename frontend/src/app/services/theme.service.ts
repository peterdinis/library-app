import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkModeClass = 'dark';

  constructor() {
    // Apply the saved theme on initialization
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.classList.add(savedTheme);
    }
  }

  enableDarkMode(): void {
    document.documentElement.classList.add(this.darkModeClass);
    localStorage.setItem('theme', this.darkModeClass);
  }

  disableDarkMode(): void {
    document.documentElement.classList.remove(this.darkModeClass);
    localStorage.removeItem('theme');
  }

  toggleTheme(): void {
    if (document.documentElement.classList.contains(this.darkModeClass)) {
      this.disableDarkMode();
    } else {
      this.enableDarkMode();
    }
  }
}