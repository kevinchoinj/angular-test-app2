import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextRowComponent } from './text-row/text-row.component';
import { TestPageComponent } from './test-page/test-page.component';
import { RemoteAssociatesTestComponent } from './remote-associates-test/remote-associates-test.component';

@NgModule({
  declarations: [
    AppComponent,
    TextRowComponent,
    TestPageComponent,
    RemoteAssociatesTestComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
