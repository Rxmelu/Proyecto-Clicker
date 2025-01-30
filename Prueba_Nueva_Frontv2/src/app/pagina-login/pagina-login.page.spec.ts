import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaLoginPage } from './pagina-login.page';

describe('PaginaLoginPage', () => {
  let component: PaginaLoginPage;
  let fixture: ComponentFixture<PaginaLoginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
