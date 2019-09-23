import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
/**
 * All global imports of the application are made here.
 * Any imported module has to be added into the @NgModule 's imports subsection.
 */
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  /**
   * All the code written in an angular project is done in typescript which is a superset of javascript.
   * Typescript is much more robust than javascript which allows us to check code type at the time of writing the code and hence
   * it is much more safer than javascript. It uses much more features like classes, types and Interfaces rather than
   * vanilla JS.Typescript does not run in the browser and is compiled to javascript in the end. Hence angular is used along with typescript.
   *
   */
}
