import { Component, Input } from '@angular/core';
import { Order } from 'src/interfaces/order';


@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent {
  @Input()
  orders: Order[] = [];

  addOrder(order: Order) {
    // Add the new order to the existing orders list
    this.orders.push(order);
  }

  deleteOrder(orderId: number) {
    // Remove the order with the specified ID from the orders list
    this.orders = this.orders.filter((order) => order.id !== orderId);
  }
}
