import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DetailComponent} from "./detail/detail.component";
import {AddComponent} from "./add/add.component";

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "note/:id", component: DetailComponent},
  {path: "add", component: AddComponent}
];
