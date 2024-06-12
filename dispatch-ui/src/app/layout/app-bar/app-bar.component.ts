import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core'

import { SharedModule } from '@shared/shared.module'

@Component({
  standalone: true,
  selector: 'd-app-bar',
  templateUrl: 'app-bar.component.html',
  styleUrls: ['app-bar.component.scss'],
  imports: [SharedModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppBarComponent {
  @Output() toggleExpand = new EventEmitter<void>()
}
