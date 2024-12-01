import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { IconsModule } from "../icons/icons.module";
import { ThemeToggleComponent } from "../theme-toggle/theme-toggle.component";

@Component({
	selector: "app-navigation",
	imports: [CommonModule, IconsModule, ThemeToggleComponent],
	templateUrl: "./navigation.component.html",
	styleUrl: "./navigation.component.css",
})
export class NavigationComponent {
	navbar = false;

	toggleNavbar(): void {
		this.navbar = !this.navbar;
	}
}
