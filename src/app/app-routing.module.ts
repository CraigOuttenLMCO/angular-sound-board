import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayerComponent } from './player/player.component';
import { TabbedPlayerComponent } from './tabbed-player/tabbed-player.component';

const routes: Routes = [
  {
    path: 'board',
    component: PlayerComponent
  }, {
    path: 'tabbedboard',
    component: TabbedPlayerComponent
  }, {
    path: '',
    redirectTo: 'board',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
