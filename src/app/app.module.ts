import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReportComponent } from './report/report.component';
import { AppRoutingModule } from './app-routing.module';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';



@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ButtonModule,
    CalendarModule,
    AutoCompleteModule,
    DropdownModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
