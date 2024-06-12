import { ChangeDetectionStrategy, Component } from '@angular/core'

import { OrderListModule } from '@features/order-list'

@Component({
  standalone: true,
  selector: 'd-orders-page',
  template: '<d-order-list/>',
  imports: [OrderListModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersPage {}
