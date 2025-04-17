import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  imports: [CommonModule,FormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  job= "";

  jobs = [
    "đớp",
    "ngủ",
    "chơi",
    "học",
    "code"
  ]

  handleAddJob() {
    this.jobs.push(this.job);
    this.job = "";
  }

  onDelete(index : number) {
    // this.jobs.splice(index, 1);
    this.jobs = this.jobs.filter((item, i) => i !== index);
  }
}
