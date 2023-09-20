import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsComponent } from './signals.component';
import { CounterComponent } from './pages/counter/counter.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { PropertiesComponent } from './pages/properties/properties.component';

const routes: Routes = [
  {
    path: '',
    component: SignalsComponent,
    children: [
      { path: 'counter', component: CounterComponent },
      { path: 'user-info', component: UserInfoComponent },
      { path: 'properties', component: PropertiesComponent },
      { path: '**', redirectTo: 'counter', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignalsRoutingModule {}
