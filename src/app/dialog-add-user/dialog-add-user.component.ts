import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.model';



@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  user = new User();
  birthDate: Date;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  save() {

    this.loading = true;
    this.user.birthDate = this.birthDate.getTime();
    this.firestore
      .collection('user')
      .add(this.user.toJson())
      .then((result: any) => {
        console.log(result);
        this.loading = false;
        this.dialogRef.close();
      });
    
  }
}
