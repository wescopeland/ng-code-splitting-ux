import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { SmallLazyFeatureComponent } from './small-lazy-feature.component';

export const featureRoutes: Route[] = [
  {
    path: '',
    component: SmallLazyFeatureComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(featureRoutes)],
  declarations: [SmallLazyFeatureComponent]
})
export class SmallLazyFeatureModule {}
