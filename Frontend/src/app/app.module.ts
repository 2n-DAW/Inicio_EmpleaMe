import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { } from './shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CoreModule } from './core/core.module';

// Toastr
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
    ],
    imports: [
        SharedModule,
        NgbModule,
        BrowserModule,
        CarouselModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        AuthModule,
        CoreModule,
        ToastrModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent,]
})
export class AppModule { }