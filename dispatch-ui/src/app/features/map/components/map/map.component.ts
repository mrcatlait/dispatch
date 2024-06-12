import { ChangeDetectionStrategy, Component, ElementRef, OnInit, inject } from '@angular/core'

import { MapGeoJsonService, MapMarkerService, MapService } from '@features/map/services'

// https://dev.to/camptocamp-geo/openlayers-in-an-angular-application-mn1

@Component({
  selector: 'd-map',
  template: '',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements OnInit {
  private readonly mapGeoJsonService = inject(MapGeoJsonService)
  private readonly mapMarkerService = inject(MapMarkerService)
  private readonly mapService = inject(MapService)

  private readonly elementRef = inject(ElementRef)

  ngOnInit() {
    this.mapService.setTargetElement(this.elementRef.nativeElement)
    this.mapMarkerService.addMarker({ lon: 25, lat: 55, label: 'Testinfo', id: 1 })
    this.mapMarkerService.addMarker({ lon: 15, lat: 50, label: 'Testinfo 2', id: 2 })
    this.mapGeoJsonService.load()
  }
}
