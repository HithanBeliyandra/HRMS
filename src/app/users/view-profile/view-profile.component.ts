import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { user } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
  id : string;
  userData:user = new user();


  constructor( private UserService:UserService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.userData = new user();
    // this.id = this.route.snapshot.params['id'];
    // this.UserService.getUserById(this.id).subscribe( data=>{
    //   this.userData = data;
    //   console.log(data);
    
    // })
  }

}
