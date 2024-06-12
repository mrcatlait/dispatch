import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BlankLayoutComponent, DefaultLayoutComponent } from './layout'

import { CoreModule } from '@core/core.module'
import { SharedModule } from '@shared/shared.module'

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BlankLayoutComponent, CoreModule, DefaultLayoutComponent, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
