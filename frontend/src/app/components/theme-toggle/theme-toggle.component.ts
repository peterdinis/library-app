import { Component } from "@angular/core";
import type { ThemeService } from "../../services/theme.service";
import { IconsModule } from "../icons/icons.module";

@Component({
	selector: "theme-toggle",
	standalone: true,
	imports: [IconsModule],
	template: `
    <button
      (click)="toggleTheme()"
      class="flex items-center gap-2 px-4 py-2 text-white bg-gray-800 rounded dark:bg-gray-200 dark:text-black"
    >
      <ng-container *ngIf="isDarkMode(); else lightMode">
        <lucide-icon name="moon" [size]="18"></lucide-icon>
      </ng-container>
      <ng-template #lightMode>
        <lucide-icon name="sun" [size]="18"></lucide-icon>
      </ng-template>
      <span>{{ isDarkMode() ? 'Dark Mode' : 'Light Mode' }}</span>
    </button>
  `,
})
export class ThemeToggleComponent {
	constructor(private themeService: ThemeService) {}

	toggleTheme(): void {
		this.themeService.toggleTheme();
	}

	isDarkMode(): boolean {
		return document.documentElement.classList.contains("dark");
	}
}
