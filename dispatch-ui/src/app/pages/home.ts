import { ChangeDetectionStrategy, Component } from '@angular/core'

import { SharedModule } from '@shared/shared.module'

@Component({
  standalone: true,
  selector: 'd-home-page',
  template: `content`,
  imports: [SharedModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {}
