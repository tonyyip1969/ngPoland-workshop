import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import {StoreService} from "./store.service";
import {ListActionsService} from "./actions/list-actions.service";
import { LoginComponent } from './login/login.component';
import {UserActionsService} from "./actions/user-actions.service";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    { provide: StoreService, useValue: new StoreService() },
    {
      provide: ListActionsService,
      useFactory: (store) => new ListActionsService(store),
      deps: [StoreService]
    },

    {
      provide: UserActionsService,
      useFactory: (store) => new UserActionsService(store),
      deps: [StoreService]
    },


  ],

  bootstrap: [AppComponent]
})
export class AppModule {

}
