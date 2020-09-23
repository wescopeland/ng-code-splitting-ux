import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eager-feature',
  template: `
    <p>I am an eager feature living in your main bundle</p>
  `,
  styleUrls: []
})
export class EagerFeatureComponent implements OnInit {
  ngOnInit() {}
}
