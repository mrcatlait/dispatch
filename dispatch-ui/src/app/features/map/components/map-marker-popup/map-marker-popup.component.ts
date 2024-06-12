import { ChangeDetectionStrategy, Component, ViewChild, computed, effect, inject } from '@angular/core'

import { MapMarkerService } from '@features/map/services'

@Component({
  selector: 'd-map-marker-popup',
  templateUrl: './map-marker-popup.component.html',
  styleUrls: ['./map-marker-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapMarkerPopupComponent {
  // @ViewChild(MatMenuTrigger) menuTrigger?: MatMenuTrigger

  private readonly mapMarkerService = inject(MapMarkerService)

  readonly selectedMarkerId = computed(() => this.mapMarkerService.selectedMarker()?.getId())

  constructor() {
    effect(() => {
      const marker = this.mapMarkerService.selectedMarker()

      // if (marker) {
      //   this.menuTrigger?.openMenu()
      // } else {
      //   this.menuTrigger?.closeMenu()
      // }
    })
  }
}
