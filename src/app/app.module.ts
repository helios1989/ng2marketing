import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { HeroImageComponent } from './component/shared/hero-image/hero-image.component';
import { HomeComponent } from './component/home/home.component';
import { MoreInfoComponent } from './component/shared/more-info/more-info.component';
import { DisclaimerComponent } from './component/disclaimer/disclaimer.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { TrademarkFooterComponent } from './component/shared/trademark-footer/trademark-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroImageComponent,
    HomeComponent,
    MoreInfoComponent,
    DisclaimerComponent,
    FooterComponent,
    TrademarkFooterComponent
  ],
  imports: [
    BrowserModule,
    CollapseModule.forRoot(), BsDropdownModule.forRoot() 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
