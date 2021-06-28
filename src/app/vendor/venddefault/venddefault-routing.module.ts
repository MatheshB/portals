import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendloginComponent } from '../vendlogin/vendlogin.component';
import { VendcreDebComponent } from '../vendmodules/vendcre-deb/vendcre-deb.component';
import { VenddashboardComponent } from '../vendmodules/venddashboard/venddashboard.component';
import { VendgoodsComponent } from '../vendmodules/vendgoods/vendgoods.component';
import { VendinvoiceComponent } from '../vendmodules/vendinvoice/vendinvoice.component';
import { VendpaymentComponent } from '../vendmodules/vendpayment/vendpayment.component';
import { VendprofileComponent } from '../vendmodules/vendprofile/vendprofile.component';
import { VendpurordComponent } from '../vendmodules/vendpurord/vendpurord.component';
import { VendrfqComponent } from '../vendmodules/vendrfq/vendrfq.component';
import { VendupdprofileComponent } from '../vendmodules/vendupdprofile/vendupdprofile.component';
import { VenddefaultComponent } from './venddefault/venddefault.component';
const routes: Routes = [
  { path: '', component: VenddefaultComponent ,children :[
    { path : 'venddashboard', component : VenddashboardComponent },
    { path : 'vendprofile', component : VendprofileComponent },
    { path : 'vendupdprofile', component : VendupdprofileComponent },
    { path : 'vendrfq', component : VendrfqComponent },
    { path : 'vendgoods', component : VendgoodsComponent },
    { path : 'vendpayment', component : VendpaymentComponent },
    { path : 'vendpurord', component : VendpurordComponent },
    { path : 'vendcre-deb', component : VendcreDebComponent},
    { path : 'vendinvoice', component : VendinvoiceComponent },
    { path : '', redirectTo : 'venddefault', pathMatch : 'full' }
  ] },
  {path:'vendlogin',component:VendloginComponent}

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenddefaultRoutingModule { }
