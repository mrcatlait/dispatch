import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app/app.module'

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err))

// https://dribbble.com/shots/15307679-Sidebar-Navigation-Tooltip-Exploration/attachments/7063734?mode=media
