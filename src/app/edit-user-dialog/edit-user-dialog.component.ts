import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user.model'; // Asegúrate de que esta ruta sea correcta

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.css']
})
export class EditUserDialogComponent implements OnInit {
  userForm: FormGroup;
  isEdit: boolean = false;
  roles: string[] = ['Admin', 'Member', 'Owner'];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { isEdit: boolean, user?: User }
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      title: [''],
      department: [''],
      status: [false],
      role: ['Member']
    });
  }

  ngOnInit(): void {
    this.isEdit = this.data.isEdit;
    if (this.isEdit && this.data.user) {
      this.userForm.patchValue(this.data.user);
      this.userForm.get('status')?.setValue(this.data.user.status === 'Active');
    }
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const userData = this.userForm.value;
      // Convert status to 'Active' or 'Inactive'
      userData.status = userData.status ? 'Active' : 'Inactive';
      this.dialogRef.close(userData);
    }
  }

  toggleStatus(event: any): void {
    this.userForm.get('status')?.setValue(event.target.checked);
  }
}
