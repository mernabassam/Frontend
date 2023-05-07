import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { MainHeaderComponent } from './header/main-header/main-header.component';
import { SecondSectionComponent } from './second-section/second-section.component';
import { ThirdSectionComponent } from './third-section/third-section.component';
import { FourthSectionComponent } from './fourth-section/fourth-section.component';
import { FifthSectionComponent } from './fifth-section/fifth-section.component';
import { SixthSectionComponent } from './sixth-section/sixth-section.component';
import { SeventhSectionComponent } from './seventh-section/seventh-section.component';
import { EighthSectionComponent } from './eighth-section/eighth-section.component';
import { NinethSectionComponent } from './nineth-section/nineth-section.component';
import { TenthSectionComponent } from './tenth-section/tenth-section.component';
import { EleventhSectionComponent } from './eleventh-section/eleventh-section.component';
import { TwelvethSectionComponent } from './twelveth-section/twelveth-section.component';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
     NavBarComponent,
     MainHeaderComponent,
     SecondSectionComponent,
     ThirdSectionComponent,
     FourthSectionComponent,
     FifthSectionComponent,
     SixthSectionComponent,
     SeventhSectionComponent,
     EighthSectionComponent,
     NinethSectionComponent,
     TenthSectionComponent,
     EleventhSectionComponent,
     TwelvethSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
