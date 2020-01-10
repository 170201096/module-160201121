import { Observable } from 'rxjs';
import { Travel } from './travel.model';
import { FirestoreService } from './services/firestore.service';
import { Router } from '@angular/router';
import { AuthenticateService } from './services/authentication.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  filterTravels ;
  datafilter:string;
  categoriName : string;

  createdBy:string;
  createDate:string;
  country : string;
  city : string;
  travelDate : string;
  categoria : string ;

  constructor(private navCtrl: NavController,
    public authService: AuthenticateService,
    private router: Router,
    private firestoreService: FirestoreService,) { 

    }

  ngOnInit() {
    this.getDatas();

  }


  filterBy(categoriName : string, datafilter: string) {

    console.log(this.datafilter);

    this.codeSelected();
    console.log(this.categoriName);

    this.firestoreService
      .getTravels()
      .subscribe();
       return this.firestoreService.filterBy(categoriName, datafilter).subscribe(
         res => this.filterTravels = res);
       
    
  }
  
  
  codeSelected(){
    switch(this.categoriName)
    {
      case 'Creater': 
        return this.categoriName= 'createrEmail';
      case 'Create Date': 
      return this.categoriName= 'createdDate';
      case 'Country': 
      return this.categoriName= 'country';
      case 'City': 
      return this.categoriName= 'city';
      case 'Travel Date': 
      return this.categoriName= 'Traveldate';
      case 'Categoria':
        this.categoriName='search';
        break;
      default: return 'null';
    }
    console.log('Seçim değiştirildi. Yeni seçim :');
    console.log(this.categoriName);
    }

    getDatas(){
      this.firestoreService
        .getTravels()
        .subscribe(res => this.filterTravels = res);

        
    }


    

  }



