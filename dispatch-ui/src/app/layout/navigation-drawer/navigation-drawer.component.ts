import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
@Component({
  standalone: true,
  selector: 'd-navigation-drawer',
  templateUrl: 'navigation-drawer.component.html',
  styleUrls: ['navigation-drawer.component.scss'],
  imports: [RouterLinkActive, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationDrawerComponent {}
