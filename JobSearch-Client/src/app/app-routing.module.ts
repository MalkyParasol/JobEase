import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './components/root/root.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';

const routes: Routes = [
  {path:'',component : RootComponent,
    children:[{path:'jobs',component:JobsListComponent,
      children:[{path:'filter',component:JobsListComponent}]
    }]
  },
  {path:'login',component:LoginComponent},
  //{path: 'jobs',component:JobsListComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
