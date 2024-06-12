import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core'

import { NavigationService } from '@core/services'

@Component({
  selector: 'd-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
  private readonly navigationService = inject(NavigationService)

  readonly breadcrumbs = this.navigationService.breadcrumbs
  readonly hasBreadcrumbs = computed(() => {
    const breadcrumbs = this.breadcrumbs()

    return breadcrumbs && breadcrumbs.length > 1
  })
}
