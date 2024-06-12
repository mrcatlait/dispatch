import { Component, ChangeDetectionStrategy, Input, HostBinding, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'd-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrl: './skeleton.component.scss',
  // eslint-disable-next-line @angular-eslint/use-component-view-encapsulation
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonComponent {
  @Input()
  @HostBinding('style.width.px')
  width: number

  @Input()
  @HostBinding('style.height.px')
  height: number

  @Input()
  @HostBinding('class.d-skeleton-text')
  text = false

  @Input()
  @HostBinding('class.d-skeleton-circular')
  circular = false
}
