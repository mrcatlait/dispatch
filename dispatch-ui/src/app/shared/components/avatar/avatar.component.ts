import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core'

@Component({
  selector: 'd-avatar',
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  readonly username = input.required<string>()
  readonly initials = computed(() => {
    const parts = this.username().split(' ')
    const initials = parts.length > 1 ? parts[0].charAt(0) + parts[1].charAt(0) : parts[0].charAt(0)

    return initials.toUpperCase()
  })
}
