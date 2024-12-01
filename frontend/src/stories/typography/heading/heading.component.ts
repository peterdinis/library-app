import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  template: `
    <ng-container [ngSwitch]="level">
      <h1
        *ngSwitchCase="'h1'"
        [class]="baseClass"
        [ngClass]="fontSize"
        [style.color]="color"
      >
        <ng-content></ng-content>
      </h1>
      <h2
        *ngSwitchCase="'h2'"
        [class]="baseClass"
        [ngClass]="fontSize"
        [style.color]="color"
      >
        <ng-content></ng-content>
      </h2>
      <h3
        *ngSwitchCase="'h3'"
        [class]="baseClass"
        [ngClass]="fontSize"
        [style.color]="color"
      >
        <ng-content></ng-content>
      </h3>
      <h4
        *ngSwitchCase="'h4'"
        [class]="baseClass"
        [ngClass]="fontSize"
        [style.color]="color"
      >
        <ng-content></ng-content>
      </h4>
      <h5
        *ngSwitchCase="'h5'"
        [class]="baseClass"
        [ngClass]="fontSize"
        [style.color]="color"
      >
        <ng-content></ng-content>
      </h5>
      <h6
        *ngSwitchCase="'h6'"
        [class]="baseClass"
        [ngClass]="fontSize"
        [style.color]="color"
      >
        <ng-content></ng-content>
      </h6>
    </ng-container>
  `,
})
export class HeadingComponent {
  @Input() level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h1';
  @Input() fontSize: string = 'text-4xl'; // Predvolená veľkosť
  @Input() color: string = 'inherit'; // Predvolená farba
  baseClass = 'font-bold'; // Základné Tailwind triedy
}
