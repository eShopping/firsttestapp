import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import{DateAdapter} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,MatDatepickerModule,MatButtonModule,MatNativeDateModule,MatInputModule,MatRadioModule,MatSelectModule,BrowserAnimationsModule,MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
