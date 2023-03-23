import { Component, Output, EventEmitter } from '@angular/core';
import { Order } from 'src/interfaces/order';


@Component({
  selector: 'app-add-order-form',
  templateUrl: './add-order-form.component.html',
  styleUrls: ['./add-order-form.component.css']
})
export class AddOrderFormComponent {
  @Output() orderSave = new EventEmitter<Order>();
  newOrder: Order = {
    restaurant: '', description: '', rating: 1, orderAgain: false,
    id: 0
  };

  submitForm() {
    // Emit the new order object to the parent component
    this.orderSave.emit(this.newOrder);

    // Reset the form
    this.newOrder = {  restaurant: '', description: '', rating: 1, orderAgain: false,
    id: 0};
  }
}
