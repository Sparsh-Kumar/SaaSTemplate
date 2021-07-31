import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { GraphComponent } from './graph/graph.component';
import { TableComponent } from './table/table.component';
import { DownloadBotsComponent } from './download-bots/download-bots.component';
import { TopicCompetitionComponent } from './topic-competition/topic-competition.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'graph', component: GraphComponent },
      { path: 'topic-competition', component: TopicCompetitionComponent },
      { path: 'get-tabledata', component: TableComponent },
      { path: 'download-bots', component: DownloadBotsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
