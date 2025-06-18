import { Component, EventEmitter, inject, Output, Input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from './new-task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  // @Output() add = new EventEmitter<NewTaskData>();
  enteredTitle = ''; // signal('');
  enteredSummary = '' // signal('');
  enteredDate = ''; // signal('');
  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId);
    // this.add.emit({
    //   title: this.enteredTitle,
    //   summary: this.enteredSummary,
    //   date: this.enteredDate
    // });
    this.close.emit();
  }
}
