import { NgModule } from '@angular/core'
import { RouterLink } from '@angular/router'
import { AgGridAngular } from '@ag-grid-community/angular'

import { OrderComponent, OrderFormComponent } from './components'

import { SharedModule } from '@shared/shared.module'
import { MapModule } from '@features/map'

@NgModule({
  declarations: [OrderComponent, OrderFormComponent],
  imports: [AgGridAngular, MapModule, RouterLink, SharedModule],
  providers: [],
  exports: [OrderComponent],
})
export class OrderModule {}
