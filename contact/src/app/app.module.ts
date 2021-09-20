import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { LayoutComponent } from './component/layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from './component/layout/layout.module';
import { DataTablesModule } from 'angular-datatables';
import { FooterComponent } from './component/layout/footer/footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LayoutModule,
    FormsModule,
    DataTablesModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
