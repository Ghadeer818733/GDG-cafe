import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathNotFoundComponent } from './path-not-found.component';

describe('PathNotFoundComponent', () => {
  let component: PathNotFoundComponent;
  let fixture: ComponentFixture<PathNotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PathNotFoundComponent]
    });
    fixture = TestBed.createComponent(PathNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
