import { Component } from "@angular/core";

/**
 * Here app-root is the root component of the application and is registered in the index.html file.
 * The angular modules simply load this component into the index.html file on when page is loaded.
 * We can have multiple components in angular.
 */
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Pranit";
}
