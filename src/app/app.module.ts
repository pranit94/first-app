import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
/**
 * All global imports of the application are made here.
 * Any imported module has to be added into the @NgModule 's imports subsection.
 */
/**
 * 1.AppComponent is the last/main/root component written and the module present in it is which is then passed as an
 * argument to the bootstrap to notify angular that this component needs to be bootstrapped and considered on
 * loading the application. When angular loads the application, it identifies the selector app-root and then finds an html file in this appcomponent,
 * which will then be loaded into out html view.
 * 2.A module is a bundle of functionalities which are present in the app. In this application currently we have only one
 * module which represents our entire app. A class is converted into a module using the @NgModule decorator which can be
 * used to create a module.
 * 3.All modules are registered in the declarations section of NgModule. You simply add path with file name in the imports.
 * 4.No extension of .ts is required in any of the components present there.
 * 5.Imports are used to simply add new modules into this module to make our application a bit leaner.
 * 6.For eg:- browsermodule is a module which is simply required to start an app.
 */
@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent],
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
