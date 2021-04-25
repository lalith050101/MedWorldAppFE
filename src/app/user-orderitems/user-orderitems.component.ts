import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../model/order';
import { OrderList } from '../model/order-list';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-user-orderitems',
  templateUrl: './user-orderitems.component.html',
  styleUrls: ['./user-orderitems.component.css']
})
export class UserOrderitemsComponent implements OnInit {
  orderId:string = "";
  orderData:any;
  orders:Order[] = [];
  paymentId:string = "";
  constructor(private orderService:OrderService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.orderId = this.activatedRoute.snapshot.params['id'];
    this.getOrderDetails();
  }

  getOrderDetails(){
    this.orderService.getUserOrder(this.orderId).subscribe((data) => {
      this.orderData = data;
      this.paymentId = data.paymentId;
      this.getOrderItems();
    })
  }

  getOrderItems(){
    this.orderService.getUserOrderItems(this.paymentId).subscribe((data) => {
      this.orders = data;
      console.log("items....",data);
      
    })
  }

}
