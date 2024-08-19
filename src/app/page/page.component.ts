import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})

export class PageComponent {
  value = 'Clear me';
  constructor(private _emp:EmpService){}

  submit():void{
    this._emp.getEmployees().subscribe({
      next: (res)=> {
        console.log(res);
      }
    })
  }
}

