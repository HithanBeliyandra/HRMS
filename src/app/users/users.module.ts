import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserTableComponent } from './user-table/user-table.component';
import { UserInviteComponent } from './user-invite/user-invite.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import {MatMenuModule} from '@angular/material/menu';
<<<<<<< HEAD
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
=======
>>>>>>> 409846bc83f1f443e05e20707b8bea7a702bff5b


@NgModule({
  declarations: [
    UserTableComponent,
    UserInviteComponent,
    ViewProfileComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatCheckboxModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatChipsModule,
<<<<<<< HEAD
    MatMenuModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule
    
   

=======
    MatMenuModule
>>>>>>> 409846bc83f1f443e05e20707b8bea7a702bff5b
  ]
})
export class UsersModule { }
