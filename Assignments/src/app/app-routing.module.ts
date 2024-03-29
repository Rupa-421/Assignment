import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './Components/first-page/first-page.component';
import { SecondPageComponent } from './Components/second-page/second-page.component';
import { ThirdPageComponent } from './Components/third-page/third-page.component';
import { FourthComponent } from './Components/fourth/fourth.component';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
const routes: Routes = [{path:'first',component:FirstPageComponent},
{path:'second',component:SecondPageComponent},
{path:'third',component:ThirdPageComponent},
{path:'fourth',component:FourthComponent},
{path:'',component:HomePageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
