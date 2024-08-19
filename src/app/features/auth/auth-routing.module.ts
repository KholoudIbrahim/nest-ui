import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from 'src/app/home/home.component';
import { PageComponent } from 'src/app/page/page.component';

const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full',title:'Log in'
  },
  {
    path:'login',component:LoginComponent,title:'Log in'
  },
  // {
  //   path:'home',component:HomeComponent,title:'Home'
  // },
  // {
  //   path:'page',component:PageComponent,title:'page'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
