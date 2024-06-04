import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesComponent } from './images/images.component';
import { ImageComponent } from './image/image.component';
import { ComponentListComponent } from './component-list/component-list.component';
import { ComponentDetailComponent } from './component-detail/component-detail.component';

const routes: Routes = [
  { path: '', component: ComponentListComponent },
  { path: 'detail/:id', component: ComponentDetailComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
