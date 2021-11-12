import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users = [];

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { }

  ngOnInit(): void {

    this.firestore
    .collection('users')
    .valueChanges({idField: 'userId'})
    .subscribe((changes: any) =>{
      this.users = changes;
      console.log(this.users);
      
    })
  }

  openDialog(): void {
    this.dialog.open(DialogAddUserComponent);
  }
}
