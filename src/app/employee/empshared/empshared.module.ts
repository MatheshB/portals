import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpsidebarComponent } from './empsidebar/empsidebar.component';
import { EmpheaderComponent } from './empheader/empheader.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';




@NgModule({
  declarations: [
    EmpsidebarComponent,
    EmpheaderComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    RouterModule,
    MatExpansionModule
  ],
  exports : [
    EmpsidebarComponent,
    EmpheaderComponent
  ]
})
export class EmpsharedModule { }
