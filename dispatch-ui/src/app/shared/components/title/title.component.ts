import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core'

import { NavigationService } from '@core/services'

@Component({
  selector: 'd-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {
  private readonly navigationService = inject(NavigationService)

  readonly breadcrumbs = this.navigationService.breadcrumbs
  readonly hasBreadcrumbs = computed(() => {
    const breadcrumbs = this.breadcrumbs()

    return breadcrumbs && breadcrumbs.length > 1
  })
  readonly title = computed(() => this.navigationService.route()?.title)
}
