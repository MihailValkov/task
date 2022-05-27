import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadSpinnerComponent } from './load-spinner/load-spinner.component';
import { ResolveDirective } from './directives/resolve.directive';
@NgModule({
  declarations: [LoadSpinnerComponent, ResolveDirective],
  imports: [CommonModule],
  exports: [LoadSpinnerComponent, ResolveDirective],
})
export class SharedModule {}
