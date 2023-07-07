import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Cart } from 'src/app/shared/models/Carts';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent implements OnInit{  
  constructor(private ordersService: OrderService ,private router:Router) { }

  // orders: any;
  order!:Order;
  cart!: Cart;
  ngOnInit() {
    console.log(this.ordersService.getNewOrderForCurrentUser())
    this.ordersService.getNewOrderForCurrentUser().subscribe((o)=>{
      console.log(o)
      this.order=o
    })
  }
}
