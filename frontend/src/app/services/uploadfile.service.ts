import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadfileService {

  constructor(private https: HttpClient) { }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const data: FormData = new FormData();
    data.append('file', file);
    const newRequest = new HttpRequest('POST', '/savefile', data, {
    reportProgress: true,
    responseType: 'text'
    });
    return this.https.request(newRequest);
    }
}