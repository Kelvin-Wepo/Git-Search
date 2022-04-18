import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers:[APIService]
})
export class NavigationComponent implements OnInit {
userName:any;
public info:any=[];
public repos:any=[];
public profiles:any=[]
  constructor() { }

  ngOnInit(): void {
  }

}
