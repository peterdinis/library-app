import { NgModule } from "@angular/core";
import { Home, LucideAngularModule, Menu, School, X } from "lucide-angular";

@NgModule({
	imports: [LucideAngularModule.pick({ Menu, X, Home, School })],
	exports: [LucideAngularModule],
})
export class IconsModule {}
