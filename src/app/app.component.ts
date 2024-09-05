import { Component } from '@angular/core';
import { IconSetService } from '@coreui/icons-angular';
import {
  cibAngular,
  cibBootstrap,
  cibCss3Shiled,
  cibHtml5Shield,
  cibJavascript,
  cilBriefcase,
  cilChevronRight,
  cilSchool,
} from '@coreui/icons';
import { TIMELINE_DATA } from 'src/assets/json/timeline-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolio';
  timelineData: any = TIMELINE_DATA;

  constructor(public iconSet: IconSetService) {
    iconSet.icons = {
      cilChevronRight,
      cilSchool,
      cilBriefcase,
      cibHtml5Shield,
      cibCss3Shiled,
      cibJavascript,
      cibBootstrap,
      cibAngular,
    };
  }
}
