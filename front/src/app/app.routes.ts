import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ShowWeatherComponent } from './show-weather/show-weather.component';

const appRoutes: Routes = [
  {
    path: '',
    component: FormComponent,
  },
  {
    path: 'show',
    component: ShowWeatherComponent,
  }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
