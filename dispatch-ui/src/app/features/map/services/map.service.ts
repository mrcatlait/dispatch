import { Injectable, inject } from '@angular/core'
import { Map, View } from 'ol'
import OSM from 'ol/source/OSM'
import TileLayer from 'ol/layer/Tile'

import { MapMarkerService } from './map-marker.service'
import { MapGeoJsonService } from './map-geo-json.service'

// Might need http://proj4js.org/

@Injectable()
export class MapService {
  private readonly mapGeoJsonService = inject(MapGeoJsonService)
  private readonly mapMarkerService = inject(MapMarkerService)

  private readonly map = new Map({
    view: new View({
      center: [0, 0],
      zoom: 1,
    }),
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
      this.mapMarkerService.getLayer(),
      this.mapGeoJsonService.getLayer(),
    ],
  })

  constructor() {
    this.mapMarkerService.registerClickHandler(this.map)
  }

  setTargetElement(element: HTMLElement): void {
    this.map.setTarget(element)
  }
}
