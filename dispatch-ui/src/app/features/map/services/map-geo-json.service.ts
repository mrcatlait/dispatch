import { Injectable } from '@angular/core'
import VectorSource from 'ol/source/Vector'
import VectorLayer from 'ol/layer/Vector'
import { Stroke, Style } from 'ol/style'
import { Feature } from 'ol'
import { Geometry, MultiLineString } from 'ol/geom'
import { fromLonLat } from 'ol/proj'

import data from './coordinates.json'

@Injectable()
export class MapGeoJsonService {
  private readonly source = new VectorSource()
  private readonly layer = new VectorLayer({ source: this.source })

  getLayer(): VectorLayer<VectorSource<Feature<Geometry>>> {
    return this.layer
  }

  load(): void {
    const feature = new Feature()
    feature.setId(1)
    const coordinates = data.coordinates.map((list) => list.map((childList) => fromLonLat(childList)))
    feature.setGeometry(new MultiLineString(coordinates))
    feature.setStyle(
      new Style({
        stroke: new Stroke({
          color: '#0068FF',
          width: 4,
        }),
      }),
    )
    this.source.addFeature(feature)
  }
}
