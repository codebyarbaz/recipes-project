import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  @Output() onDisplay: EventEmitter<string> = new EventEmitter<string>();

  display(section: string): void {
    this.onDisplay.emit(section);
  }
}
