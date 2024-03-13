import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-basic-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.scss'
})
export class BasicFormComponent implements OnInit {
  dataService = inject(DataService);
  states: string[] = this.dataService.states;
  libraryUserForm!: FormGroup;
  bookListForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this._createFormWithChildren();
    this._createDynamicForm();
  }

  get booksArray(): FormArray {
    return this.bookListForm.controls['books'] as FormArray;
  }

  private _createFormWithChildren(): void {
    this.libraryUserForm = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl('')
      }),
      email: new FormControl(''),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl('')
      }),
      createdDate: new FormControl('')
    });
  }

  private _createDynamicForm(): void {
    this.bookListForm = new FormGroup({
      name: new FormControl(''),
      books: new FormArray([])
    });
  }

  initializeBookGroup(): FormGroup {
    return new FormGroup({
      id: new FormControl(this.booksArray.length),
      title: new FormControl(''),
      author: new FormControl(''),
      yearPublished: new FormControl(''),
      count: new FormControl(''),
      price: new FormControl('')
    });
  }

  selectState(event : any): void {
    console.log(event);
  }

  addBook(): void {
    this.booksArray.push(this.initializeBookGroup());
  }

  removeBook(index: number): void {
    this.booksArray.removeAt(index);
  }
}
