import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadBotsComponent } from './download-bots.component';

describe('DownloadBotsComponent', () => {
  let component: DownloadBotsComponent;
  let fixture: ComponentFixture<DownloadBotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadBotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadBotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
