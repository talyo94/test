import {NgModule, Class} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CardsListComponent} from "./cards/cards-list/cards-list.component";
import {CardCreateComponent} from "./cards/card-create/card-create.component";
import {CardEditComponent} from "./cards/card-edit/card-edit.component";


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/cards',
    pathMatch: 'full'
  },
  {
    path: 'cards',
    component: CardsListComponent
  },
  {
    path: 'cards/create',
    component: CardCreateComponent
  },
  {
    path: 'cards/:id/update',
    component: CardEditComponent
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}


