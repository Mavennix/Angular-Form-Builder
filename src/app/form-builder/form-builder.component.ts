import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormBuilderComponent implements OnInit {
  hoverItem = null;

  openEditModal = false;
  getEditElement;

  sourceBuilderTools = [
    { name: 'First Name', inputType: 'text', class: 'half' },
    { name: 'Last Name', inputType: 'text', class: 'half' },
    { name: 'Middle Name', inputType: 'text', class: 'half' },
    { name: 'Number', inputType: 'number', class: 'half' },
    { name: 'Email', inputType: 'email', class: 'half' },
    { name: 'Password', inputType: 'password', class: 'half' },
    { name: 'Phone', inputType: 'tel', class: 'half' },
    { name: 'Button', inputType: 'button', class: ' half' },
    { name: 'Radio', inputType: 'radio', class: ' half' },
    { name: 'Checkbox', inputType: 'checkbox', class: 'half' },
    { name: 'Select', inputType: 'select', class: 'half' },
    { name: 'Switch', inputType: 'switchbox', class: 'half' },
    { name: 'Date', inputType: 'date', class: 'half' },
    { name: 'Time', inputType: 'time', class: 'half' },
    { name: 'File', inputType: 'file', class: 'half' },
    { name: 'layout', inputType: 'col', col: [{
        grid: 6,
        offset: 0,
        push: 0,
        pull: 0,
        children: [] as any[]
      },
      {
        grid: 6,
        offset: 0,
        push: 0,
        pull: 0,
        children: [] as any[]
      }]
    }

  ];
  targetBuilderTools: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  onHover(item) {
    this.hoverItem = item.uid;
   }

  droppableItemClass = (item: any) => `${item.class} ${item.inputType}`;

  builderDrag(e: any) {
    const item = e.value;
    item.uid = item.inputType + '_' + Math.random().toString(36).substr(2, 9);
    console.log(this.targetBuilderTools);
    console.log(this.sourceBuilderTools);
  }

  clickDrop(e: any) {
    // Deep copy into element
    const newElement = JSON.parse(JSON.stringify(e));
    newElement.uid = e.inputType + '_' + Math.random().toString(36).substr(2, 9);
    this.targetBuilderTools.push(newElement);
    console.log(newElement);
    console.log(this.targetBuilderTools);
    console.log(this.sourceBuilderTools);

  }
  log(e: any) {
    console.log(e.type, e);
  }

  canMove(e: any): boolean {
    return e.indexOf('Disabled') === -1;
  }

  onDelete(e) {
    this.deleteElement(this.targetBuilderTools, e);
    for (let i = 0; i < this.targetBuilderTools.length; i++) {
      const element = this.targetBuilderTools[i];
      if (element.col) {
        this.findElement(element.col, e);
      }
    }
  }

  findElement(element, e) {
    for (let j = 0; j < element.length; j++) {
      const col = element[j];
      for (let index = 0; index < col.children.length; index++) {
        const element = col.children[index];
        if (element === e) {
          this.deleteElement(col.children, e)
        } else {
          this.findElement(element.col, e);
        }
      }
    }
  }

  deleteElement(element, e){
    const index = element.indexOf(e);
    if (index >= 0) {
      element.splice(index, 1);
    }
  }

  onEdit(e) {
    console.log(e);
    this.openEditModal =  true;
    this.getEditElement = e;
  }
}
