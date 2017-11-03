
import { Component, OnInit } from '@angular/core';
import { ITeams } from './equipos';
import { ICatalogo} from './equipos';
import { ProductService } from './product.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  newEquipo: ITeams[] = [{name:"",country:"",img:"",description:""}]; 
  newCatalogo: ICatalogo[]=[{name:'',img:'',precio:'',description:''}];
  currentTeam: any;
  equipos: any;
  errorMessage:any;
  catalogo: ICatalogo[]=[{name:'',img:'',precio:'',description:''}];
  equipos2: ITeams[] = [{
    name:'Necaxa',
    country:'México',
    img:'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/4282.png',
    description:"soy de aguascalientes"
  },
  {
    name:'Chivas',
    country:'México',
    img:'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/3678.png',
    description:"soy el mejor equipo de mexico"
  },
  {
    name:'Barcelona',
    country:'España',
    img:'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png',
    description:"soy el mejor equipo de españa"
  },
  {
    name:'PSG',
    country:'Francia',
    img:'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/49.png',
    description:'soy el mejor equipo de francia'
  },
  {
    name:'Bayern Munich',
    country:'Alemania',
    img:'https://img.fcbayern.com/image/fetch/f_auto,h_220,q_auto:good,w_220/https://fcbayern.com/binaries/content/gallery/fc-bayern/logos/bundesliga/480px-logo_fc_bayern_munchen.svg.png%3Fv%3D1502975949150',
    description:"soy el mejor de alemania"
  }
];


constructor(private _productService: ProductService){

}


updateTeam(){

}

/*removeTeam(equipo):void{
  this.equipos = this.equipos.filter( (x)=>{    //eliminar primer forma
      return x.name != equipo.name
  });
}*/

removeTeam(equipo):void{
  for(let i=0; i<this.equipos.length; i++){
    if(this.equipos[i].name == equipo.name){      //eliminar segunda forma
      this.equipos.splice(i,1);
    }
  } 
}

setCurrentTeam(equipo){
  this.currentTeam = equipo;
}

  
  ngOnInit():void {
    this._productService.getProducts().subscribe(
      photos => this.equipos = photos,
      error => this.errorMessage = <any>error
    );
  }
  

addEquipo():void{
  this.equipos.push(this.newEquipo[0]);
  this.newEquipo = [{img:"",name:"",country:"",description:""}];
}

}
