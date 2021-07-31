import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicCompetitionComponent } from './topic-competition.component';

describe('TopicCompetitionComponent', () => {
  let component: TopicCompetitionComponent;
  let fixture: ComponentFixture<TopicCompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicCompetitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
