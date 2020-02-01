import { QaViewComponent } from './qa-view/qa-view.component';
import { QaComponent } from './qa/qa.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: 'news', component: NewsComponent
  },
  {
    path:'',redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'qa',
    component: QaComponent
  },
  {
    path: 'qav',
    component: QaViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
