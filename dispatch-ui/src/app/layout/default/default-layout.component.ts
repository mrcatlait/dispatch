import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core'
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'

import { NavigationDrawerComponent } from '../navigation-drawer/navigation-drawer.component'
import { NavigationRailComponent } from '../navigation-rail/navigation-rail.component'
import { AppBarComponent } from '../app-bar/app-bar.component'

import { SharedModule } from '@shared/shared.module'
import { NavigationService } from '@core/services'
@Component({
  standalone: true,
  selector: 'd-default-layout',
  templateUrl: 'default-layout.component.html',
  styleUrls: ['default-layout.component.scss'],
  imports: [
    AppBarComponent,
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
    SharedModule,
    NavigationRailComponent,
    NavigationDrawerComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultLayoutComponent {
  private readonly navigationService = inject(NavigationService)

  readonly route = this.navigationService.route

  readonly expanded = signal(true)

  readonly menuIcon = computed(() => (this.expanded() ? 'menu_open' : 'menu'))

  handleToggleExpand() {
    this.expanded.update((expanded) => !expanded)
  }
}
