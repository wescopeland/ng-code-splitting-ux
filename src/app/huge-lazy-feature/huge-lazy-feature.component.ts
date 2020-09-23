import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

import * as Chart from "chart.js";

@Component({
  selector: "app-huge-lazy-feature",
  template: `
    <div id="chart"></div>
    <p>
      I am a <span class="huge">HUGE</span> lazy loaded (code split) feature
    </p>
  `,
  styles: [
    `
      .huge {
        font-size: 5rem;
      }
    `,
  ],
})
export class HugeLazyFeatureComponent implements OnInit {
  @ViewChild("chart") chartElement: ElementRef<HTMLCanvasElement>;

  constructor() {}

  ngOnInit() {
    new Chart(this.chartElement.nativeElement, {});
  }
}
