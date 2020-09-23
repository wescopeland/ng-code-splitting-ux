import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";
import { AgGridModule } from "ag-grid-angular";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatBadgeModule } from "@angular/material/badge";
import { MatTableModule } from "@angular/material/table";
import { MatSelectModule } from "@angular/material/select";

import { HugeLazyFeatureComponent } from "./huge-lazy-feature.component";

export const featureRoutes: Route[] = [
  {
    path: "",
    component: HugeLazyFeatureComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    MatAutocompleteModule,
    MatBadgeModule,
    MatTableModule,
    MatSelectModule,
    RouterModule.forChild(featureRoutes),
  ],
  declarations: [HugeLazyFeatureComponent],
})
export class HugeLazyFeatureModule {}
