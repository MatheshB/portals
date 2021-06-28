import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultsComponent } from './default/defaults/defaults.component';
import { LandingpgComponent } from './landingpg/landingpg.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { VendloginComponent } from './vendor/vendlogin/vendlogin.component';
import { EmploginComponent } from './employee/emplogin/emplogin.component';


const routes: Routes = [
  { path: '',component:LandingpgComponent},
  { path: 'login',component:LoginComponent},
  { path: 'landingpg',component:LandingpgComponent},
  {
    path: 'defaults',
    loadChildren: () => import('./default/default.module').then(m => m.DefaultModule )
  },
  { path: 'vendlogin',component:VendloginComponent},
  {
    path: 'venddefault',
    loadChildren: () => import('./vendor/venddefault/venddefault.module').then(m => m.VenddefaultModule )
  },
   { path: 'emplogin',component:EmploginComponent},
  {
    path: 'empdefault',
    loadChildren: () => import('./employee/empdefault/empdefault.module').then(m => m.EmpdefaultModule )
  }

// { path: '', redirectTo : 'login', pathMatch:'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
