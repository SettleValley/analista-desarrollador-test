import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientDetailComponent } from "./components/client-detail/client-detail.component";

import { AuthGuard } from "./auth.guard";
import { TokenInterceptorService } from "./services/token-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    DashboardComponent,
    ClientDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard, 
    {      
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
