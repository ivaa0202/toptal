import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSearchPageComponent } from './start-search-page.component';

describe('StartSearchPageComponent', () => {
  let component: StartSearchPageComponent;
  let fixture: ComponentFixture<StartSearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartSearchPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
