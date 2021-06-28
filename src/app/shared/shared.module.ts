import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HighchartsChartModule } from 'highcharts-angular';
import { RouterModule } from '@angular/router';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    FlexLayoutModule,
    MatListModule,
    MatButtonModule,
    RouterModule,
    MatExpansionModule


  ],
  exports : [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class SharedModule { }

