import { GeoPosition } from './geo-position.model'

export interface Marker extends GeoPosition {
  id: number
  label?: string
}
