import { Component } from "@angular/core";

/**
 * Typescript files are created in angular to instantiate a class and to set up the blueprint of its object in it.
 * It is notified to be a special class i.e. a component using a decorator(@).@Component decorator is a part of @angular/core package.
 * selector in the component is like a unique id which can be used to identify this component in other places throughout the files.
 * TemplateUrl is used to specify the html file for this template file.
 */
@Component({
  selector: "app-server",
  templateUrl: "./server.component.html"
})
export class ServerComponent {}
