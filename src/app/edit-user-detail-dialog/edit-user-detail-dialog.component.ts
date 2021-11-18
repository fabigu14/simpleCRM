import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-edit-user-detail-dialog',
  templateUrl: './edit-user-detail-dialog.component.html',
  styleUrls: ['./edit-user-detail-dialog.component.scss']
})
export class EditUserDetailDialogComponent implements OnInit {

  user: User = new User();
  userId: string;
  birthDate: Date;
  loading = false;

  constructor(public dialogRef: MatDialogRef<EditUserDetailDialogComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  save(){
    this.loading = true;
    this.firestore
    .collection('users')
    .doc(this.userId)
    .update(this.user.toJson())
    .then(() => {
      
      this.loading = false;
      this.dialogRef.close();
    });
  }
}
