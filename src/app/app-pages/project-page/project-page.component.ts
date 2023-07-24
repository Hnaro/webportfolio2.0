import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiveLinkService } from 'src/app/app-services/active-link.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css'],
  providers: [ActiveLinkService]
})
export class ProjectPageComponent implements OnInit{
  //descriptions
  description: string = "This website uses IGDB API 'https://www.igdb.com/' contains"+
  " information about games and other games youd like to know more about. you can filter your search or search a specific game name "+
  ",this project was created to showcase my skills in using different API and angular tools and using html and css for frontend.";
  descriptionXsotic: string = "This website is an entertainment website that is using mongodb for backend database. \n "+
  "it has mini games that is created only using angular tools and node express js with the help of database and localstorage in angular"

  // default
  defautDesc: string = "this website is coming soon... Sorry for the inconvenience.."
  defaultCover: string = "assets/img/defaultCover.png"

  // gameinfoweb
  gameinfowebImageUrl: string = "assets/img/gameinfowebCover.png"
  gameinfowebgitHubUrl: string = "https://github.com/Hnaro/gameinfowebProd"
  gameinfoWebUrl = "http://3.99.158.183/";
  constructor(private activeLink: ActiveLinkService, private route: ActivatedRoute) {
    this.activeLink.setHomeState("Message from home");
  }

  ngOnInit(): void {
  }

}
