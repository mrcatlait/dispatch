import { Injectable, Signal, signal } from '@angular/core'

import { Breakpoint } from '@core/models'

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {
  isMatched(breakpoint: Breakpoint): boolean {
    return window.matchMedia(breakpoint).matches
  }
}
