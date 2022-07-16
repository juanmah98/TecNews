import { Component, OnInit } from '@angular/core';

/* interface data{
  titel: string,
  subtitel: string,
  img: string,
}  */

@Component({
  selector: 'app-new-home',
  templateUrl: './new-home.component.html',
  styleUrls: ['./new-home.component.css']
})
export class NewHomeComponent implements OnInit {

  style = false;

  bander = true;
  arreTriple: any = [];
  constructor() { }
  
  ngOnInit(): void {
  }

  date: any =  {
    titel: "New Times",
    subtitel: "En medio de la crisis del gasoil que atraviesa la Argentina, con falta de suministro del combustible prácticamente en todo el país y con los transportistas de cargas autoconvocados manifestándose a lo largo y ancho del territorio a través de distintas medidas de fuerza",
    img: "https://media.datacenterdynamics.com/media/images/Extra.width-880.jpg",
    autor: "San Juan - Tec"
  }

  setBandera(){
    this.bander = !this.bander;
  }

  setStyle(){
    this.style = true
  }
  

  unSetStyle(){
    this.style = false;
  }


  arreDoble: any[] = [
    {
    titel: "PRIMERO",
    subtitel: "En medio de la crisis del gasoil que atraviesa la Argentina, con falta de suministro del combustible prácticamente en todo el país y con los transportistas de cargas autoconvocados manifestándose a lo largo y ancho del territorio a través de distintas medidas de fuerza",
    url: "https://mott.pe/noticias/wp-content/uploads/2019/03/los-50-paisajes-maravillosos-del-mundo-para-tomar-fotos.jpg",
    autor: "San Juan - Tec"
    },
    {
      titel: "SEGUNDO",
      subtitel: "En medio de la crisis del gasoil que atraviesa la Argentina, con falta de suministro del combustible prácticamente en todo el país y con los transportistas de cargas autoconvocados",
      url: "https://fotos.perfil.com/2019/11/08/trim/1280/720/horacio-aquino-paisajista-802753.jpg",
      autor: "San Juan - Tec"
    },    
  ];

  arreglo: any[] = [
  "Juan", "Marcelo", "Alicia", "Daniel", "Mauro", "Evelyn", "César", "Nahuel"
  ]













  /* arreMulti: any = [
    {
    titel: "PRIMERO",
    subtitel: "En medio de la crisis del gasoil que atraviesa la Argentina, con falta de suministro del combustible prácticamente en todo el país y con los transportistas de cargas autoconvocados manifestándose a lo largo y ancho del territorio a través de distintas medidas de fuerza",
    img: "https://mott.pe/noticias/wp-content/uploads/2019/03/los-50-paisajes-maravillosos-del-mundo-para-tomar-fotos.jpg",
    autor: "San Juan - Tec"
    },
    {
      titel: "SEGUNDO",
      subtitel: "En medio de la crisis del gasoil que atraviesa la Argentina, con falta de suministro del combustible prácticamente en todo el país y con los transportistas de cargas autoconvocados",
      img: "https://fotos.perfil.com/2019/11/08/trim/1280/720/horacio-aquino-paisajista-802753.jpg",
      autor: "San Juan - Tec"
    },    

    {
      titel: "TERCERO",
      subtitel: "Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit.",
      img: "https://www.rosario3.com/__export/1656463136233/sites/rosario3/img/2022/06/28/whatsapp_image_2022-06-28_at_7_59_59_pm.jpeg_1756841869.jpeg",
      autor: "San Juan - Tec"
    }, 

    {
      titel: "TERCERO",
      subtitel: "Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit.",
      img: "https://www.rosario3.com/__export/1656002569050/sites/rosario3/img/2022/06/23/crimen_cabin_9_3.jpeg_1756841869.jpeg",
      autor: "San Juan - Tec"
    }, 

    {
      titel: "TERCERO",
      subtitel: "Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit.",
      img: "https://www.rosario3.com/__export/1656429507199/sites/rosario3/img/2022/06/28/aic11.png_1756841869.png",
      autor: "San Juan - Tec"
    }, 
  ];

  filter(){

    this.arreTriple = this.arreMulti.filter(elemet => elemet.title?.toLowerCase().includes(value)||elemet.name?.includes(value))
  } */



}
