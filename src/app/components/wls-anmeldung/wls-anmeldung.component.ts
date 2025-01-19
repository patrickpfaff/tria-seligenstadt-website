import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  bootstrapExclamationTriangle,
  bootstrapInfoCircle,
} from '@ng-icons/bootstrap-icons';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-wls-anmeldung',
  imports: [NgIcon, InputTextModule, FloatLabelModule, DropdownModule, RadioButtonModule, CheckboxModule, ButtonModule],
  providers: [provideIcons({ bootstrapExclamationTriangle, bootstrapInfoCircle })],
  templateUrl: './wls-anmeldung.component.html',
  styleUrl: './wls-anmeldung.component.scss'
})
export class WlsAnmeldungComponent {
  // Options for primeng dropdown
  public genders: any[] = [
    { label: 'Männlich' },
    { label: 'Weiblich' },
  ];
}
