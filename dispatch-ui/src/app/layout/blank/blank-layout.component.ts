import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  standalone: true,
  selector: 'd-blank-layout',
  templateUrl: 'blank-layout.component.html',
  styleUrls: ['blank-layout.component.scss'],
  imports: [RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlankLayoutComponent {}
