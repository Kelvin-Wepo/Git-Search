import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
  providers:[APIService]
})
export class RepositoriesComponent implements OnInit {
  userName:any;
  public info:any=[];
  public repos:any=[];
  public profiles:any=[]
  constructor(private apiService:APIService) { 
  this.apiService.getUserInfo().subscribe(info => {
    this.info = info;
  });
  this.apiService.getUserRepos().subscribe(repos => {
    this.repos=repos;
  });
}
  ngOnInit(): void {
    this.apiService.getProfiles().subscribe((data)=> {
      this.profiles = data;
    })
  }

}
