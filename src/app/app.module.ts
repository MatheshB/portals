import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DefaultModule } from './default/default.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LandingpgComponent } from './landingpg/landingpg.component';
import { MatStepperModule } from '@angular/material/stepper';
import { VendloginComponent } from './vendor/vendlogin/vendlogin.component';
import { VenddefaultModule } from './vendor/venddefault/venddefault.module';
import { VendinvoiceComponent } from './vendor/vendmodules/vendinvoice/vendinvoice.component';
import { EmploginComponent } from './employee/emplogin/emplogin.component';
import { EmpdefaultModule } from './employee/empdefault/empdefault.module';
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingpgComponent,
    VendloginComponent,
    EmploginComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DefaultModule,
    MatFormFieldModule,
    MatStepperModule,
    VenddefaultModule,
    EmpdefaultModule,
    NgxPaginationModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
