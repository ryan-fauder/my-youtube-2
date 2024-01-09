import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListaVideosComponent } from './components/lista-videos/lista-videos.component';
import { Observable } from 'rxjs';
import { Video } from './interfaces/video';
import { VideoService } from './services/video.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListaVideosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'my-youtube-2';
  videos$!: Observable<Video[]>;
  videoToPlay: Video | null = null;
  constructor(private _videoService: VideoService){}

  ngOnInit(): void {
    this.videos$ = this._videoService.getVideoList();
  }
  
  playVideo(id: number){
    this._videoService.getVideo(id).subscribe(
      video => this.videoToPlay = video
    );
  }
}
