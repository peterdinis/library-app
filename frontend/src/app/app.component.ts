import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { NavigationComponent } from "./components/navigation/navigation.component";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, NavigationComponent, FooterComponent, HomeComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
})
export class AppComponent {
	title = "frontend";
}
