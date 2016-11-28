import { TodolistModule } from './todolist/todolist.module';
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [AppComponent],
  imports     : [BrowserModule, TodolistModule],
  bootstrap   : [AppComponent]
})

export class AppModule {


}