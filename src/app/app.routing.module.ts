import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//path
import { HomeComponent } from './component/home/home.component';
import { MyservicesComponent } from './component/myservices/myservices.component';
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'services', component: MyservicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }