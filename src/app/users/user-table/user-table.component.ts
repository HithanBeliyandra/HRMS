import { Component, OnInit,ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserInviteComponent } from '../user-invite/user-invite.component';
import { UserService } from '../shared/user.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { user } from '../shared/user.model';
import { ViewProfileComponent } from '../view-profile/view-profile.component';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  displayedColumns: string[] = ['select','email', 'role','status','lastActivity','Action'];
  dataSource: MatTableDataSource<user>;
  statusList:string[]=['Activate','Deactivate','Pending','Expired'];
  user:user=new user();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  selection = new SelectionModel<user>(true, []);

  constructor(public dialog: MatDialog, private userService:UserService) { }


  ngOnInit(): void {
    this.getAlluser();
  }

  openDialog() {
    this.dialog.open(UserInviteComponent, {
      width:'30%'
    });
  }
  openProfile() {
    this.dialog.open(ViewProfileComponent, {
      width:'20%'
    });
  }

  getAlluser(){
    this.userService.getUser()
    .subscribe({
      next:(res: any)=>{
       this.dataSource=new MatTableDataSource(res);
       this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
     
      },
      error:(err)=>{
        alert("something went wrong");
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected === numRows;
  
}

activateSelectedUsers() {
  this.selection.selected.forEach( user => {

    this.userService.activateUser(user,user.id).subscribe((_res: any)=>{
      user.status="Activated";
      console.log(this.user.status);
      this.getAlluser();
    });
  
 });
 
}

deActivateSelectedUsers() {
  this.selection.selected.forEach( user => {

    this.userService.activateUser(user,user.id).subscribe((_res: any)=>{
      user.status="Deactivate";

      console.log(this.selection.selected);
      
      this.getAlluser();
    });
  
 });
 
}

/** Selects all rows if they are not all selected; otherwise clear selection. */
masterToggle() {
  this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
      console.log(this.selection.selected);
      
}

}

