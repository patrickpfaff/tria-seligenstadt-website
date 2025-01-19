import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  bootstrapHouse,
  bootstrapPeopleFill,
  bootstrapFlag,
  bootstrapSnow2,
  bootstrapUiChecksGrid,
  bootstrapSend,
  bootstrapCardText,
  bootstrapBoxSeam,
  bootstrapExclamationTriangle,
  bootstrapCaretDown
} from '@ng-icons/bootstrap-icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule ,NgIcon],
  templateUrl: './navbar.component.html',
  providers: [provideIcons({ bootstrapHouse, bootstrapPeopleFill, bootstrapFlag, bootstrapSnow2, bootstrapUiChecksGrid, bootstrapSend, bootstrapCardText, bootstrapBoxSeam, bootstrapExclamationTriangle, bootstrapCaretDown })],
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
