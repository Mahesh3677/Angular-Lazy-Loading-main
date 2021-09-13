import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { TwoRoutingModule } from "./two-routing.module";
import { TwoComponent } from "./two.component";

@NgModule({
  declarations : [TwoComponent],
  imports : [
    CommonModule,
    ReactiveFormsModule,
    TwoRoutingModule
  ],
  exports : [TwoComponent]
})
export class TwoModule {}
