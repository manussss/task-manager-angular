import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TabViewModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    SelectButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
