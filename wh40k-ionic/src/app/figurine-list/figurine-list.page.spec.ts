import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FigurineListPage } from './figurine-list.page';

describe('FigurineListPage', () => {
  let component: FigurineListPage;
  let fixture: ComponentFixture<FigurineListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FigurineListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
