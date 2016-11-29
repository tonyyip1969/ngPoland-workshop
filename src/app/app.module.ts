import { TodolistModule } from './todolist/todolist.module';
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {LoginModule} from "./login/login.module";

@NgModule({
  declarations: [AppComponent],
  imports     : [BrowserModule, TodolistModule, LoginModule],
  bootstrap   : [AppComponent]
})

export class AppModule {


}