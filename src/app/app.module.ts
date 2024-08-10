import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

import { AppComponent } from './app.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserModalComponent } from './user-modal/user-modal.component';
import { EditUserDialogComponent } from './edit-user-dialog/edit-user-dialog.component';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'user-modal', component: UserModalComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    UserListComponent,
    UserModalComponent,
    EditUserDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
