import { Component } from '@angular/core';
import { Order } from 'src/interfaces/order';
import { OrdersService } from './services/orders.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restaurant-faves-frontend';
  orders: Order[] = [];
  newOrder: Order = {
    id: 0,
    description: '',
    restaurant: '',
    rating: 0,
    orderAgain: false
  };

  constructor(private orderAPI: OrdersService) {
    this.orderAPI.getAllOrders().subscribe(
      (result) => {
        console.log(result);
        this.orders = result;
      },
      (error) => {
        console.error('Failed to retrieve orders', error);
      }
    );
  }

  addOrder(newOrder: Order) {
    this.orderAPI.addOrder(newOrder).subscribe(
      (result) => {
        console.log(result);
        // add new order to orders list
        this.orders.push(result);
        // clear new order form
        this.newOrder = {
          id: 0,
          description: '',
          restaurant: '',
          rating: 0,
          orderAgain: false
        };
      },
      (error) => {
        console.error('Failed to add new order', error);
      }
    );
  }
}
