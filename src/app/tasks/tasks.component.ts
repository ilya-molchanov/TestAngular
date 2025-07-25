import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from '../tasks/new-task/new-task.model';
import { TasksService } from "./tasks.service";

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})

export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name: string | undefined;
  isAddingTask = false;

  constructor(private tasksService: TasksService) { }  

  get selectedUserTasks() {
    // let t = this.tasks.filter((task) => task.id === this.userId);
    // debugger;
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  // onAddTask(taskData: NewTaskData) {    
  //   this.isAddingTask = false;
  // }
}
