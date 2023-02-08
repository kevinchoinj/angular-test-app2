import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextRowComponent } from './text-row/text-row.component';
import { TestPageComponent } from './test-page/test-page.component';
import { RemoteAssociatesTestComponent } from './remote-associates-test/remote-associates-test.component';
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    TextRowComponent,
    TestPageComponent,
    RemoteAssociatesTestComponent,
    ServerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
