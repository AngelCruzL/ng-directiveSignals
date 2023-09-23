import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalsRoutingModule } from './signals-routing.module';
import { SignalsComponent } from './signals.component';
import { CounterComponent } from './pages/counter/counter.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

@NgModule({
  declarations: [SignalsComponent, CounterComponent, PropertiesComponent, UserInfoComponent, SideMenuComponent],
  imports: [CommonModule, SignalsRoutingModule],
})
export class SignalsModule {}
