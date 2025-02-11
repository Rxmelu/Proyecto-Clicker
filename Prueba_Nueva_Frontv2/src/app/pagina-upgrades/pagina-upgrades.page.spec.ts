import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaUpgradesPage } from './pagina-upgrades.page';

describe('PaginaUpgradesPage', () => {
  let component: PaginaUpgradesPage;
  let fixture: ComponentFixture<PaginaUpgradesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaUpgradesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
