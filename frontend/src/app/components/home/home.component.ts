import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { IconsModule } from "../icons/icons.module";

@Component({
	selector: "app-home",
	imports: [IconsModule, ButtonModule, CommonModule],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.css",
})
export class HomeComponent {}
