import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core'

@Component({
  selector: 'd-chip',
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipComponent {
  @HostBinding('class.label-l') labelClass = true
}
