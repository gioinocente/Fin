import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { MetasComponent } from './views/metas/metas.component';
import { InvestimentosComponent } from './views/investimentos/investimentos.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MetasComponent,
    InvestimentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
