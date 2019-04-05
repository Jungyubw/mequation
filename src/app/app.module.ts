import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import {FileUploadModule} from 'primeng/fileupload';
import {SelectButtonModule} from 'primeng/selectbutton';

import { MathquillAngular2Module } from './mathquill-angular2/index';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    SelectButtonModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    FileUploadModule,
    MathquillAngular2Module.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
