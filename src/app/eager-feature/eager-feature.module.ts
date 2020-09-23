import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EagerFeatureComponent } from './eager-feature.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EagerFeatureComponent],
  exports: [EagerFeatureComponent]
})
export class EagerFeatureModule {}
