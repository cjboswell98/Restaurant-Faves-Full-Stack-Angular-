import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { AddOrderFormComponent } from './add-order-form/add-order-form.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderHistoryComponent,
    AddOrderFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Add FormsModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
