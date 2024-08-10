import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../user.model';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [
    {
      name: "Lindsay Walton",
      email: "lindsay.walton@example.com",
      title: "Front-end Developer",
      department: "Optimization",
      status: "Active",
      role: "Member",
      avatar: "https://img.freepik.com/free-psd/3d-illustration-person-with-pink-hair_23-2149436186.jpg?w=826&t=st=1723261405~exp=1723262005~hmac=96cb0a1d8ce150f37d6b689104782f7c02e8ad0fa362d02bd7f8442480ebe89c" // de la web
    },
    {
      name: "Courtney Henry",
      email: "courtney.henry@example.com",
      title: "Designer",
      department: "Intranet",
      status: "Active",
      role: "Admin",
      avatar: "https://img.freepik.com/free-psd/3d-illustration-person_23-2149436192.jpg?w=826&t=st=1723261386~exp=1723261986~hmac=983b4702fc0051c452f88e125b962cb5ff8b135625de3006c0f3db91e0f53c23" // de la web
    },
    {
      name: "Tom Cook",
      email: "tom.cook@example.com",
      title: "Director of Product",
      department: "Directives",
      status: "Active",
      role: "Member",
      avatar: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1723261372~exp=1723261972~hmac=c075230cbea18cffbaac90a50f3f8da7302be284f2f66bceb455e3b681201890" // de la web
    },
    {
      name: "Whitney Francis",
      email: "whitney.francis@example.com",
      title: "Copywriter",
      department: "Program",
      status: "Active",
      role: "Admin",
      avatar: "https://img.freepik.com/free-psd/3d-illustration-person_23-2149436179.jpg?t=st=1723261331~exp=1723264931~hmac=9341d4d6b3a0c2d4413e8328efd45874da4c301e509bf19db476a592073d8e2a&w=826" // de la web
    },
    {
      name: "Leonard Krasner",
      email: "leonard.krasner@example.com",
      title: "Senior Designer",
      department: "Mobility",
      status: "Active",
      role: "Owner",
      avatar: "https://img.freepik.com/free-psd/3d-illustration-business-man-with-glasses_23-2149436194.jpg?t=st=1723261310~exp=1723264910~hmac=3101344bb4dcf6de7393409665c3c0a79badda1a7d98e317db609bcb9d031480&w=826" // de la web
    },
    {
      name: "Floyd Miles",
      email: "floyd.miles@example.com",
      title: "Principal Designer",
      department: "Security",
      status: "Active",
      role: "Member",
      avatar: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1723261281~exp=1723261881~hmac=96f1bfc74b38faf75b85fa656c8d0581c42af06242435a4662b147a42a7c2c23" // de la web
    }
  ];

  roles: string[] = ['Admin', 'Member', 'Owner'];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { }

  openAddModal(): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: { isEdit: false }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Aquí puedes actualizar la lista de usuarios si es necesario
      }
    });
  }

  openEditModal(user: User): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: { isEdit: true, user }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Aquí puedes actualizar la lista de usuarios si es necesario
      }
    });
  }
}
