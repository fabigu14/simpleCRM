import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-address-dialog',
  templateUrl: './address-dialog.component.html',
  styleUrls: ['./address-dialog.component.scss']
})
export class AddressDialogComponent implements OnInit {

  user: User;
  userId: string;
  loading = false;

  constructor(public dialogRef: MatDialogRef<AddressDialogComponent>, private firestore: AngularFirestore) { }

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
