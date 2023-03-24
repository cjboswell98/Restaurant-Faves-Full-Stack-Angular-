import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "src/interfaces/order";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  url: string = "http://localhost:8080/orders";

  constructor(private http: HttpClient) { }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('http://localhost:8080/orders');
  }

  getOrdersFromAnotherSource(): Observable<Order[]> {
    // Call the API or perform other operations to retrieve orders
    // and return the result as an Observable
    return this.http.get<Order[]>('http://localhost:8080/orders');
  }

  getOrder(orderId: number): Observable<Order> {
    const url = `${this.url}/${orderId}`;
    return this.http.get<Order>(url);
  }

  addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>('http://localhost:8080/orders', order);
  }

  updateOrders(orders: Order[]): Observable<any> {
    return this.http.put('http://localhost:8080/orders', orders);
  }
}
