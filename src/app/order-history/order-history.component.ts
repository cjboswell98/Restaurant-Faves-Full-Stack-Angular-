import { Component, Input } from '@angular/core';
import { Order } from 'src/interfaces/order';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent {
  @Input()
  orders: Order[] = [];

  constructor(private orderAPI: OrdersService) {}

  addOrder(order: Order) {
    // Add the new order to the existing orders list
    this.orders.push(order);
  }

  deleteOrder(orderId: number) {
    // Remove the order with the specified ID from the orders list
    this.orders = this.orders.filter((order) => order.id !== orderId);
  }

  ngOnInit() {
    // Retrieve orders from another source, e.g. a REST API
    this.orderAPI.getOrdersFromAnotherSource().subscribe(
      (result) => {
        // Assign the retrieved orders to the orders array in this component
        this.orders = result;
      },
      (error) => {
        console.error('Failed to retrieve orders from another source', error);
      }
    );
  }
}
