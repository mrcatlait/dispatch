import { NgModule } from '@angular/core'
import { RouterLink } from '@angular/router'
import { AgGridAngular } from '@ag-grid-community/angular'

import { OrderListComponent } from './components'

import { SharedModule } from '@shared/shared.module'

@NgModule({
  declarations: [OrderListComponent],
  imports: [AgGridAngular, RouterLink, SharedModule],
  providers: [],
  exports: [OrderListComponent],
})
export class OrderListModule {}
