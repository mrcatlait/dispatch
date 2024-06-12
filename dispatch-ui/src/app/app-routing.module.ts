import { NgModule } from '@angular/core'
import { PreloadAllModules, Route, RouterModule, TitleStrategy } from '@angular/router'

import { Layout } from '@core/models'
import { PageTitleStrategy } from '@core/strategies'

interface ExtendedRoute extends Route {
  data?: {
    layout?: Layout
    icon?: string
  }
}

const routes: ExtendedRoute[] = [
  {
    path: '',
    loadComponent: () => import('./pages/home').then((c) => c.HomePage),
    title: 'Home',
    data: {
      icon: 'home',
    },
  },
  {
    path: 'orders',
    title: 'Orders',
    data: {
      icon: 'orders',
    },
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/orders/index').then((c) => c.OrdersPage),
        pathMatch: 'full',
      },
      {
        path: 'new',
        loadComponent: () => import('./pages/orders/new').then((c) => c.OrdersNewPage),
        title: 'Create order',
      },
      {
        path: ':orderId',
        loadComponent: () => import('./pages/orders/new').then((c) => c.OrdersNewPage),
      },
    ],
  },
  {
    path: 'fleet',
    loadComponent: () => import('./pages/fleet').then((c) => c.FleetPage),
    title: 'Fleet',
    data: {
      icon: 'local_shipping',
    },
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  providers: [
    {
      provide: TitleStrategy,
      useClass: PageTitleStrategy,
    },
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
