import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { EagerFeatureModule } from './eager-feature/eager-feature.module';
import { EagerFeatureComponent } from './eager-feature/eager-feature.component';

const routes: Route[] = [
  {
    path: 'eager-feature',
    component: EagerFeatureComponent
  },
  {
    path: 'small-lazy-feature',
    loadChildren: () =>
      import('./small-lazy-feature/small-lazy-feature.module').then(
        m => m.SmallLazyFeatureModule
      )
  },
  {
    path: 'huge-lazy-feature',
    loadChildren: () =>
      import('./huge-lazy-feature/huge-lazy-feature.module').then(
        m => m.HugeLazyFeatureModule
      )
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), EagerFeatureModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
