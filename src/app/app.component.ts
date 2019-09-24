import { Component } from "@angular/core";

/**
 * Here app-root is the root component of the application and is registered in the index.html file.
 * The angular modules simply load this component into the index.html file on when page is loaded.
 * We can have multiple components in angular. All the 4 files starting from app.component.## are related to the same
 * component i.e. the root component.
 */
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  // styleUrls: ["./app.component.css"]
  styles: [
    `
    h3{
      color:dodgerblue;
    },
  `
  ]
})
export class AppComponent {
  title = "Pranit";
}
