import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VenddefaultRoutingModule } from './venddefault-routing.module';
import { VenddefaultComponent } from './venddefault/venddefault.component';
import { VenddashboardComponent } from '../vendmodules/venddashboard/venddashboard.component';
import { VendcreDebComponent } from '../vendmodules/vendcre-deb/vendcre-deb.component';
import { VendpaymentComponent } from '../vendmodules/vendpayment/vendpayment.component';
import { VendprofileComponent } from '../vendmodules/vendprofile/vendprofile.component';
import { VendpurordComponent } from '../vendmodules/vendpurord/vendpurord.component';
import { VendrfqComponent } from '../vendmodules/vendrfq/vendrfq.component';
import { VendupdprofileComponent } from '../vendmodules/vendupdprofile/vendupdprofile.component';
import { VendgoodsComponent } from '../vendmodules/vendgoods/vendgoods.component';
import { VendsharedModule } from '../vendshared/vendshared.module';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { VendinvoiceComponent } from '../vendmodules/vendinvoice/vendinvoice.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    VenddefaultComponent,
    VenddashboardComponent,
    VendcreDebComponent,
    VendinvoiceComponent,
    VendpaymentComponent,
    VendprofileComponent,
    VendpurordComponent,
    VendrfqComponent,
    VendupdprofileComponent,
    VendgoodsComponent,


  ],
  imports: [
    CommonModule,
    VenddefaultRoutingModule,
    VendsharedModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatStepperModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    NgxPaginationModule


  ]
})
export class VenddefaultModule { }

