import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { GraphComponent } from './graph/graph.component';
import { TableComponent } from './table/table.component';
import { TopicCompetitionComponent } from './topic-competition/topic-competition.component';
import { DownloadBotsComponent } from './download-bots/download-bots.component';


@NgModule({
  declarations: [
    DashboardComponent,
    GraphComponent,
    TableComponent,
    TopicCompetitionComponent,
    DownloadBotsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
