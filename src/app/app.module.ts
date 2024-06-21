import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImgGalleryComponent } from './img-gallery/img-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgGalleryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
