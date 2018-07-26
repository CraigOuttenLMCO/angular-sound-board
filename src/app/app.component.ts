import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng Sound Board';

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    // Example from: https://alligator.io/angular/custom-svg-icons-angular-material/
    this.matIconRegistry.addSvgIcon('stop-button', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/StopButton.svg'));
    this.matIconRegistry.addSvgIcon('poo-pile', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/PileOfPoo.svg'));
  }
}
