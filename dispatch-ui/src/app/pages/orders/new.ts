import { ChangeDetectionStrategy, Component } from '@angular/core'

import { OrderModule } from '@features/order'

@Component({
  standalone: true,
  selector: 'd-orders-new-page',
  template: '<d-order/>',
  imports: [OrderModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersNewPage {}
