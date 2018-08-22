import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayerComponent } from './player/player.component';
import { TabbedPlayerComponent } from './tabbed-player/tabbed-player.component';
import { ChainPlayerComponent } from './chain-player/chain-player.component';

const routes: Routes = [
  {
    path: 'legacyboard',
    component: PlayerComponent
  }, {
    path: 'tabbedboard',
    component: TabbedPlayerComponent
  }, {
    path: 'chain',
    component: ChainPlayerComponent
  }, {
    path: '',
    redirectTo: 'tabbedboard',
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
