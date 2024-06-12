import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { SelectorDirective, SliderDirective } from './directives'
import {
  AvatarComponent,
  BreadcrumbsComponent,
  ChipComponent,
  LogoComponent,
  MenuComponent,
  SearchComponent,
  SkeletonComponent,
  TitleComponent,
} from './components'
import { DurationPipe } from './pipes'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    AvatarComponent,
    BreadcrumbsComponent,
    ChipComponent,
    DurationPipe,
    LogoComponent,
    MenuComponent,
    SearchComponent,
    SelectorDirective,
    SkeletonComponent,
    SliderDirective,
    TitleComponent,
  ],
  exports: [
    AvatarComponent,
    BreadcrumbsComponent,
    ChipComponent,
    CommonModule,
    DurationPipe,
    LogoComponent,
    MenuComponent,
    ReactiveFormsModule,
    RouterModule,
    SearchComponent,
    SelectorDirective,
    SkeletonComponent,
    SliderDirective,
    TitleComponent,
  ],
})
export class SharedModule {}
