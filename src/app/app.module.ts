import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IconModule, IconSetService } from '@coreui/icons-angular';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BotonComponent } from './components/boton/boton.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BotonComponent,
    TimelineComponent,
    SkillsComponent,
  ],
  imports: [BrowserModule, IconModule],
  providers: [IconSetService],
  bootstrap: [AppComponent],
})
export class AppModule {}
