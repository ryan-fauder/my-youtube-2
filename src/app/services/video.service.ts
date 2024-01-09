import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../interfaces/video';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  apiUrl: string = environment.apiUrl;
  constructor(private _http: HttpClient) { }

  getVideoList(): Observable<Video[]>{
    return this._http.get<Video[]>(`${this.apiUrl}/videos`);
  }
  deleteVideo(id: number): Observable<Video>{
    return this._http.delete<Video>(`${this.apiUrl}/video`);
  }
  uploadVideo(video: Video): Observable<Video>{
    return this._http.post<Video>(`${this.apiUrl}/upload`, video);
  }
  getVideo(id: number): Observable<Video>{
    return this._http.get<Video>(`${this.apiUrl}/stream`);
  }

}
