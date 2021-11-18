import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

import { EditUserDetailDialogComponent } from './edit-user-detail-dialog.component';

describe('EditUserDetailDialogComponent', () => {
  let component: EditUserDetailDialogComponent;
  let fixture: ComponentFixture<EditUserDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule],
      providers: [{
        provide: MatDialogRef,
        useValue: []
      }],
      declarations: [ EditUserDetailDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
