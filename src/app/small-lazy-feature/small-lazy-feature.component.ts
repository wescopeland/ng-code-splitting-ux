import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-lazy-feature',
  template: `
    <p>
      I am a <span class="small">small</span> lazy loaded (code split) feature
    </p>
  `,
  styles: [
    `
      .small {
        font-size: 0.75rem;
      }
    `
  ]
})
export class SmallLazyFeatureComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
