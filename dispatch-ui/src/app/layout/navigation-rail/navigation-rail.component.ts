import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
@Component({
  standalone: true,
  selector: 'd-navigation-rail',
  templateUrl: 'navigation-rail.component.html',
  styleUrls: ['navigation-rail.component.scss'],
  imports: [RouterLinkActive, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationRailComponent {}
