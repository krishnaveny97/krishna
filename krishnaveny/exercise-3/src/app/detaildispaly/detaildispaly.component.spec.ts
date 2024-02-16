import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaildispalyComponent } from './detaildispaly.component';

describe('DetaildispalyComponent', () => {
  let component: DetaildispalyComponent;
  let fixture: ComponentFixture<DetaildispalyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetaildispalyComponent]
    });
    fixture = TestBed.createComponent(DetaildispalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
