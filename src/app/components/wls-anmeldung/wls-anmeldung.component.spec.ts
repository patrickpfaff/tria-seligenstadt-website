import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WlsAnmeldungComponent } from './wls-anmeldung.component';

describe('WlsAnmeldungComponent', () => {
  let component: WlsAnmeldungComponent;
  let fixture: ComponentFixture<WlsAnmeldungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WlsAnmeldungComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WlsAnmeldungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
