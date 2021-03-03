import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSceanceComponent } from './create-sceance.component';

describe('CreateSceanceComponent', () => {
  let component: CreateSceanceComponent;
  let fixture: ComponentFixture<CreateSceanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSceanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSceanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
