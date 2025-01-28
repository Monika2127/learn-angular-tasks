import { Injectable } from "@angular/core";
import { TASKS_LIST } from "../dummy-data/tasks";
import { NEWTASKDATA, TASK } from "../types/tasks.interface";

@Injectable({
    providedIn: 'root'
})
export class TasksService {
    tasks: TASK[] = TASKS_LIST;

    constructor() {
        const tasks = localStorage.getItem('tasks');

        if(tasks) 
            this.tasks = JSON.parse(tasks);
    }

    getUserTasks(userId: string) {
        return this.tasks.filter(task => task.userId === userId);
    }

    onCompleteTask(id: string) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveTasks();
    }

    onAddTask(taskData: NEWTASKDATA, userId: string) {
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date
        })
        this.saveTasks();
    }

    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}