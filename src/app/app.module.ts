import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { NgModule } from '@angular/core';

import {CardsService} from "./cards/cards.service";
import { AppComponent } from './app.component';
import { CardCreateComponent } from './cards/card-create/card-create.component';
import { CardsListComponent } from './cards/cards-list/cards-list.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import {AppRoutingModule} from "./app.routings";
import { ImgSrcCheckDirective } from './cards/shared/directives/img-src-check.directive';
import { PhoneValidatorDirective } from './cards/shared/directives/phone-validator.directive';
import { CardEditComponent } from './cards/card-edit/card-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CardCreateComponent,
    CardsListComponent,
    NavbarComponent,
    ImgSrcCheckDirective,
    PhoneValidatorDirective,
    CardEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
