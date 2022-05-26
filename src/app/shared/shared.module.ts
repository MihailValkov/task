import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadSpinnerComponent } from './load-spinner/load-spinner.component';

@NgModule({
  declarations: [LoadSpinnerComponent],
  imports: [CommonModule],
  exports: [LoadSpinnerComponent],
})
export class SharedModule {}
