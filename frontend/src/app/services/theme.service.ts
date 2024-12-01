import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkModeClass = 'dark';

  constructor() {
    if (this.isBrowser()) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        document.documentElement.classList.add(savedTheme);
      }
    }
  }

  enableDarkMode(): void {
    if (this.isBrowser()) {
      document.documentElement.classList.add(this.darkModeClass);
      localStorage.setItem('theme', this.darkModeClass);
    }
  }

  disableDarkMode(): void {
    if (this.isBrowser()) {
      document.documentElement.classList.remove(this.darkModeClass);
      localStorage.removeItem('theme');
    }
  }

  toggleTheme(): void {
    if (this.isBrowser()) {
      if (document.documentElement.classList.contains(this.darkModeClass)) {
        this.disableDarkMode();
      } else {
        this.enableDarkMode();
      }
    }
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
