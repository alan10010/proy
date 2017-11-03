import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProfileComponent } from "./profile/profile.component";
import { TableComponent } from './table/table.component';
import { ConvertToSpacePipe } from './shared/convert-to-space.pipe';
import { DescriptionComponent } from './shared/description.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    TableComponent,
    ConvertToSpacePipe,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
