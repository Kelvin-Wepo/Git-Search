import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class APIService {
private userName:string;
private user:any;
private _Url = 'https://api.github.com/users';
private clientId='92edcd4370946e511cd7'
private clientSecret='92edcd4370946e511cd7'


  constructor(private http:HttpClient) { 
    console.log('service is ready')
    this.userName='Kelvin-wepo';
  
  }ngOnInit() {
    // GET request with response type <any>
    this.http.get<any>('https://api.github.com/users').subscribe((data) => {
      this.userName = data.total;
      console.log(this.userName);
    });
  }
  //get profile info
  getUserInfo() {
    return this.http.get('https://api.github.com/users/' + this.userName + "?client_Id=" + this.clientId + "?client_secret=" + this.clientSecret); }
  //get repo information
  getUserRepos() {
    return this.http.get(
      'https://api.github.com/users/' + this.userName + '/repos'
    );  }

    getProfiles() {
      return this.http.get<any[]>(this._Url);  }

       getRepos(user: any){
        let userrepo = 
        this.http.get('https://api.github.com/users/'+this.userName+'/repos?acess_token='+environment.apiToken); 
        console.log(userrepo)
        return userrepo    
      }
      
      getProfileInfo(){  
        return this.http.get('https://api.github.com/users/'+this.userName+'?acess_token='+environment.apiToken);   
       } 
      updateProfile(userName:string){
        this.userName = userName;
      }

      
        
        




  // ngOnInit() {
  //   // GET request with response type <any>
  //   this.http.get<any>('https://api.github.com/users').subscribe((data) => {
  //     this.userName = data.total;
  //     console.log(this.userName);
  //   });
  // }
//   getUser() {
//     return this.http.get("https://api.github.com/users/" + this.userName).pipe(map(data => {
//       return data;
//     }));
// }
}