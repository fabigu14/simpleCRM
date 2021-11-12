import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.model';
import { AddressDialogComponent } from '../address-dialog/address-dialog.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  routerId = '';
  user: User = new User();

  constructor(public dialog: MatDialog, private route: ActivatedRoute, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.routerId = paramMap.get('id');
      console.log(this.routerId);
      this.getUser();
    })
  }

  getUser() {
    this.firestore
      .collection('users')
      .doc(this.routerId)
      .valueChanges()
      .subscribe((user: any) => {
        this.user = new User(user);
      })
  }

  openAddressDialog(){
    this.dialog.open(AddressDialogComponent);
  }
}
