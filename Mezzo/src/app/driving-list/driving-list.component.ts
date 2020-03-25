import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Drive} from '../drive.model'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-driving-list',
  templateUrl: './driving-list.component.html',
  styleUrls: ['./driving-list.component.css']
})
export class DrivingListComponent implements OnInit {
  obs_drive : Observable<Drive[]>
  vettoreDrive : Drive[];

  constructor(public Http :HttpClient) { }

  ngOnInit(): void {
    this.obs_drive = this.Http.get<Drive[]>("https://my-json-server.typicode.com/malizia-g/fine_anno_exp/mezzi")
    this.obs_drive.subscribe(this.ogg_driving) // dico all'observable cosa fare quando riceve i datii


  }
  ogg_driving = ( mezzo : Drive[]) =>
  {
    this.vettoreDrive = mezzo ;
  }

}
