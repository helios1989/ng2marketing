import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//path
import { HomeComponent } from './component/home/home.component';
import { MyservicesComponent } from './component/myservices/myservices.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { FaqComponent } from './component/faq/faq.component';
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'services', component: MyservicesComponent},
  { path: 'contact', component: ContactsComponent},
  { path: 'faq', component: FaqComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }