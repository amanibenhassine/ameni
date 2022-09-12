import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employe } from '../modals/employe';
import { Presence } from '../modals/presence';



@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  employe: Employe = new Employe();
  host :string = "http://localhost:8080";

  constructor(private httpClient:HttpClient){}

  public getEmployeesList()  {
    console.log("test call");
    return this.httpClient.get<any>("/users");
  }

  public getEmploye(id: any){
    console.log("this is id ="+ id)
    return this.httpClient.get<any>("/user/"+ id);
  }

  public archiveEmploye(id: any){
    return this.httpClient.get<any>("/archiveEmploye/"+ id);
  }

  public getActiveEmployees(){
    return this.httpClient.get<any>("/activeEmployees");
  }

  public getArchivedEmployees(){
    return this.httpClient.get<any>("/archivedEmployees");
  }

  public generateReport(id: number){
    return this.httpClient.get<any>("/report/pdf"+"/"+ id);
  }

  public deleteEmployeById (id: number)  {
    return this.httpClient.delete("/users"+"/" + id);
  }

  public editUser (employe:Employe)  {
    return this.httpClient.put("/updateUser",employe);
  }

  public editPhoto (fileImage:File,id:number)  {

    const data:FormData= new FormData();
    data.append('id',JSON.stringify(id));
    data.append('image',fileImage);
    return this.httpClient.put("/photo?id="+id,fileImage);
  }

  public updateEmployee(employe:Employe, fileImage:File) {
    const data:FormData= new FormData();
    data.append('user',JSON.stringify(employe));
    data.append('image',fileImage);
    return this.httpClient.put("/user",data);
  }

  public createEmploye(employe, fileImage:File) {

    const data:FormData= new FormData();
    data.append('user',JSON.stringify(employe));
    data.append('image',fileImage);
    
    return this.httpClient.post<Employe>("/createEmploye", data);
  }

  setter(employe:Employe){
    this.employe= employe;
  }

 getter(){
   return this.employe;
 }

  

  
}