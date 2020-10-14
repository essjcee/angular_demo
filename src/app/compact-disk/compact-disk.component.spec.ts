import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompactDiskComponent } from './compact-disk.component';

describe('CompactDiskComponent', () => {
  let component: CompactDiskComponent;
  let fixture: ComponentFixture<CompactDiskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompactDiskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompactDiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
