import { NgModule } from '@angular/core';
import { LucideAngularModule, Menu, X } from 'lucide-angular';

@NgModule({
  imports: [LucideAngularModule.pick({ Menu, X })],
  exports: [LucideAngularModule],
})
export class IconsModule {}