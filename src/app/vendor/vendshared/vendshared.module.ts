import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendheaderComponent } from './vendheader/vendheader.component';
import { VendsidebarComponent } from './vendsidebar/vendsidebar.component';
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
    VendheaderComponent,
    VendsidebarComponent
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
    VendheaderComponent,
    VendsidebarComponent
  ]
})
export class VendsharedModule { }
