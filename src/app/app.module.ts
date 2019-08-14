import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

import {
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule,
} from '@angular/material';

import { OverlayContainer } from '@angular/cdk/overlay';
import { from } from 'rxjs';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AngularFireModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
