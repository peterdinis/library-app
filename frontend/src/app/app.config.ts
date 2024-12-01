import {
	type ApplicationConfig,
	importProvidersFrom,
	provideZoneChangeDetection,
} from "@angular/core";
import {
	provideClientHydration,
	withEventReplay,
} from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import {
	ArrowUpRight,
	File,
	Home,
	LucideAngularModule,
	Menu,
	UserCheck,
	X,
} from "lucide-angular";
import { routes } from "./app.routes";
import {
	provideTanStackQuery,
	QueryClient,
  } from '@tanstack/angular-query-experimental'
  
export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		importProvidersFrom(
			LucideAngularModule.pick({
				File,
				X,
				Home,
				Menu,
				UserCheck,
				ArrowUpRight,
			}),
		),
		provideRouter(routes),
		provideClientHydration(withEventReplay()),
		provideTanStackQuery(new QueryClient())
	],
};
