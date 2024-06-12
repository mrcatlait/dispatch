import { Injectable, inject } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router'
import { filter, map } from 'rxjs'

interface Breadcrumb {
  label: string
  url: string
}

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private readonly router = inject(Router)
  private readonly activatedRoute = inject(ActivatedRoute)

  private readonly activatedRoute$ = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map(() => this.activatedRoute),
    map((route) => {
      while (route.firstChild) {
        route = route.firstChild
      }
      return route
    }),
    map(({ snapshot }) => snapshot),
  )

  readonly route = toSignal(this.activatedRoute$)

  private readonly breadcrumbs$ = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map(() => {
      const root = this.router.routerState.snapshot.root
      const breadcrumbs: Breadcrumb[] = []

      this.addBreadcrumb(root, [], breadcrumbs)

      return breadcrumbs
    }),
  )

  readonly breadcrumbs = toSignal(this.breadcrumbs$)

  private addBreadcrumb(route: ActivatedRouteSnapshot | null, parentUrl: string[], breadcrumbs: Breadcrumb[]) {
    if (!route) {
      return
    }
    const routeUrl = parentUrl.concat(route.url.map((url) => url.path))

    if (route.title) {
      const breadcrumb = {
        label: route.title,
        url: '/' + routeUrl.join('/'),
      }

      const duplicateIndex = breadcrumbs.findIndex((b) => b.url === breadcrumb.url)

      if (duplicateIndex !== -1) {
        breadcrumbs.splice(duplicateIndex, 1)
      }

      breadcrumbs.push(breadcrumb)
    }

    this.addBreadcrumb(route.firstChild, routeUrl, breadcrumbs)
  }
}
