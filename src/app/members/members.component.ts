import { Component, OnInit } from '@angular/core';
import { Member } from 'src/Modals/Member';
import { GLOBAL } from '../app_config';



@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dataSource: Member[] = GLOBAL._DB.members;
  displayedColumns: string[] = ['id', 'cin', 'name', 'type', 'cv', 'creationDate', 'icone'];

}
