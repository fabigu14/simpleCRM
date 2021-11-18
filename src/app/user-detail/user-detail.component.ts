import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.model';
import { AddressDialogComponent } from '../address-dialog/address-dialog.component';
import { EditUserDetailDialogComponent } from '../edit-user-detail-dialog/edit-user-detail-dialog.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userId = '';
  user: User = new User();

  constructor(public dialog: MatDialog,
     private route: ActivatedRoute, 
     private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id');
      console.log(this.userId);
      this.getUser();
    })
  }

  getUser() {
    if(this.userId){
      this.firestore
      .collection('users')
      .doc(this.userId)
      .valueChanges()
      .subscribe((user: any) => {
        this.user = new User(user);
        console.log(this.user);
      })
    }
    
  }

  openAddressDialog(){
    const dialog = this.dialog.open(AddressDialogComponent);
    dialog.componentInstance.user = new User(this.user.toJson());
    dialog.componentInstance.userId = this.userId;
  }

  openUserDetailDialog(){
    const dialog = this.dialog.open(EditUserDetailDialogComponent);
    dialog.componentInstance.user = new User(this.user.toJson());
    dialog.componentInstance.userId = this.userId;
  }
}
