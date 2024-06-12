import { ChangeDetectionStrategy, Component } from '@angular/core'

import { FleetModule } from '@features/fleet'

@Component({
  standalone: true,
  selector: 'd-fleet-page',
  template: '<d-fleet/>',
  imports: [FleetModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FleetPage {}
