import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MapComponent, MapMarkerPopupComponent } from './components'
import { MapGeoJsonService, MapMarkerService, MapService } from './services'

import { SharedModule } from '@shared/shared.module'

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [MapComponent, MapMarkerPopupComponent],
  providers: [MapGeoJsonService, MapMarkerService, MapService],
  exports: [MapComponent],
})
export class MapModule {}
