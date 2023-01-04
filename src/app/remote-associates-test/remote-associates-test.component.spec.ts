import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteAssociatesTestComponent } from './remote-associates-test.component';

describe('RemoteAssociatesTestComponent', () => {
  let component: RemoteAssociatesTestComponent;
  let fixture: ComponentFixture<RemoteAssociatesTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoteAssociatesTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoteAssociatesTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
