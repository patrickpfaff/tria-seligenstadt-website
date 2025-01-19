import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WlsAnmeldungComponent } from './components/wls-anmeldung/wls-anmeldung.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'winterlaufserie', component: WlsAnmeldungComponent }
];
