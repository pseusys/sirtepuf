import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TextFieldModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    HttpClientModule,
    ClipboardModule,
    FontAwesomeModule,
    ToastrModule.forRoot({
      "timeOut": 2000,
      "positionClass": "toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
