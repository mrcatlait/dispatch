import { NgModule } from '@angular/core'
import { RouterLink } from '@angular/router'
import { AgGridAngular } from '@ag-grid-community/angular'

import { FleetComponent } from './components'

import { SharedModule } from '@shared/shared.module'
import { MapModule } from '@features/map'

@NgModule({
  declarations: [FleetComponent],
  imports: [AgGridAngular, MapModule, RouterLink, SharedModule],
  providers: [],
  exports: [FleetComponent],
})
export class FleetModule {}
