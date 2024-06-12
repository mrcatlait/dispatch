import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'd-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderComponent {}
