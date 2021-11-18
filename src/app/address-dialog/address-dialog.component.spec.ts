import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

import { AddressDialogComponent } from './address-dialog.component';

describe('AddressDialogComponent', () => {
  let component: AddressDialogComponent;
  let fixture: ComponentFixture<AddressDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule],
      declarations: [AddressDialogComponent],
      providers: [{
        provide: MatDialogRef,
        useValue: []
      }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
