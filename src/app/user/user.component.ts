import { Component, OnInit } from '@angular/core';
// import { profile } from 'console';
import { APIService } from '../api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[APIService]
})
export class UserComponent implements OnInit {
public user:any=[]
userName: any = [];
info: any = [];
repos: any=[];
profile: any;
display: any =true;
  constructor(private apiService:APIService) {
    this.apiService.getUserInfo().subscribe(info => {
      this.info = info;
    });

    this.apiService.getUserRepos().subscribe(repos => {
      console.log(repos);
      this.repos=repos;
    });
  }
  //   this.apiService.getUser().subscribe((response:any)=>{
  //     this.user=response;
  //     console.log(response)
  //   })
  //  }

  ngOnInit(): void {
  }
  findGithubUser() {  
    this.display = false
    this.apiService.updateProfile(this.userName);
    this.apiService.getProfileInfo().subscribe((profile) => {
      this.profile = profile;
    });

    this.apiService.getRepos(this.userName).subscribe((repos) => {
      this.repos = repos;
    });

    this.apiService.getProfileInfo().subscribe((info) => {
      this.info = info;
    });
    }
}


