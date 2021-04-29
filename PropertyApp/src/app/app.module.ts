import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { PropertyDetailFormComponent } from './property-details/property-detail-form/property-detail-form.component';
import { HttpClientModule } from '@angular/common/http';
import { PropertyOldFormComponent } from './property-details/property-old-form/property-old-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyDetailsComponent,
    PropertyDetailFormComponent,
    PropertyOldFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
