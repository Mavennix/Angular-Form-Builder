import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { TestDndComponent } from './test-dnd/test-dnd.component';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    TestDndComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDnDModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
