import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {LucideAngularModule, ArrowUpRight, File, Home, UserCheck, X, Menu} from "lucide-angular";
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), importProvidersFrom(LucideAngularModule.pick({File, X, Home, Menu, UserCheck, ArrowUpRight})), provideRouter(routes), provideClientHydration(withEventReplay())]
};
