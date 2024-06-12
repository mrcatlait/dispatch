import { Injectable, signal } from '@angular/core'
import { Feature, Map } from 'ol'
import { Geometry, Point } from 'ol/geom'
import VectorLayer from 'ol/layer/Vector'
import { fromLonLat } from 'ol/proj'
import VectorSource from 'ol/source/Vector'
import { Icon, Style } from 'ol/style'
import Select, { SelectEvent } from 'ol/interaction/Select'
import { click } from 'ol/events/condition'

import { Marker } from '../models'

@Injectable()
export class MapMarkerService {
  readonly selectedMarker = signal<Feature<Geometry> | null>(null)

  private readonly markers: Feature[] = []
  private readonly source = new VectorSource({ features: this.markers })
  private readonly layer = new VectorLayer({
    source: this.source,
  })

  getLayer(): VectorLayer<VectorSource<Feature<Geometry>>> {
    return this.layer
  }

  addMarker(marker: Marker): void {
    const feature = new Feature({})

    feature.setId(marker.id)
    feature.setGeometry(new Point(fromLonLat([marker.lon, marker.lat])))
    feature.setProperties({ label: marker.label })
    feature.setStyle(
      new Style({
        image: new Icon({
          // src: './assets/svg/location_primary.svg',
          // size: [46, 46],
          // color: '#0068FF',
          anchor: [0.5, 46],
          anchorXUnits: 'fraction',
          anchorYUnits: 'pixels',
        }),
      }),
    )

    this.markers.push(feature)
    this.source.addFeature(feature)
    // this.markerSource.removeFeature(marker)
  }

  registerClickHandler(map: Map) {
    const selectSingleClick = new Select({
      style: null,
      condition: click,
      toggleCondition: () => true,
      layers: [this.layer],
    })

    map.addInteraction(selectSingleClick)

    selectSingleClick.on('select', (event: SelectEvent) => {
      let markers: Feature<Geometry>[] = []

      if (event.selected.length > 0) {
        markers = event.selected
      } else if (event.deselected.length > 0) {
        markers = event.deselected
      }

      if (markers.length) {
        const marker = markers[0]
        marker.setStyle(
          new Style({
            image: new Icon({
              src: './assets/svg/location_selected_primary.svg',
              anchor: [0.5, 46],
              anchorXUnits: 'fraction',
              anchorYUnits: 'pixels',
            }),
          }),
        )

        const oldMarker = this.selectedMarker()

        if (oldMarker !== marker) {
          oldMarker?.setStyle(
            new Style({
              image: new Icon({
                src: './assets/svg/location_primary.svg',
                anchor: [0.5, 46],
                anchorXUnits: 'fraction',
                anchorYUnits: 'pixels',
              }),
            }),
          )
        }

        this.selectedMarker.set(marker)
      }
    })
  }
}
