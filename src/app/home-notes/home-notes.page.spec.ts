import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNotesPage } from './home-notes.page';

describe('HomeNotesPage', () => {
  let component: HomeNotesPage;
  let fixture: ComponentFixture<HomeNotesPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(HomeNotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
