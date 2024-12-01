import { NgModule } from '@angular/core';
import { LucideAngularModule, Menu, Moon, Sun, X } from 'lucide-angular';

@NgModule({
  imports: [LucideAngularModule.pick({ Menu, X, Moon, Sun })],
  exports: [LucideAngularModule],
})
export class IconsModule {}