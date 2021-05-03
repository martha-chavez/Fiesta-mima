import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  imagenes:string[]=["cake1.jpeg","cake2.jpeg","mesa1.jpg","mesa3.jpg"];
  productos = [
    {
        "nombre": "product1.jpg",
        "desc": "Mesa de dulces",
        "url":"https://www.facebook.com/FiestaMima/photos/a.668971426457233/2712334605454228/?type=3&theater"
    },
    {
        "nombre": "product2.jpg",
        "desc": "Pastel Mario Bros",
        "url":"https://www.facebook.com/FiestaMima/photos/a.668971426457233/3956416934379316/?type=3&theater"
    },
    // {
    //     "nombre": "product3.jpg",
    //     "desc": "Mesa de dulces",
    //     "url":"https://www.facebook.com/FiestaMima/photos/a.668971426457233/2648211811866508/?type=3&theater"
    // },
    // {
    //     "nombre": "product4.jpg",
    //     "desc": "Pastel Oso",
    //     "url":"https://www.facebook.com/FiestaMima/photos/a.668971426457233/3888754654478878/?type=3&theater"
    // },
    // {
    //     "nombre": "product5.jpg",
    //     "desc": "Pastel Nintendo Switch",
    //     "url":"https://www.facebook.com/FiestaMima/photos/a.668971426457233/3852928648061479/?type=3&theater"
    // },
    {
        "nombre": "product6.jpg",
        "desc": "Pastel Casa de papel",
        "url":"https://www.facebook.com/FiestaMima/photos/a.668971426457233/3827432220611122/?type=3&theater"
    },
    // {
    //     "nombre": "product7.jpg",
    //     "desc": "Galletas Mariquitas",
    //     "url":"https://www.facebook.com/FiestaMima/photos/a.668971426457233/3820066671347677/?type=3&theater"
    // },
    {
        "nombre": "product8.jpg",
        "desc": "Cupcakes Navidad",
        "url":"https://www.facebook.com/FiestaMima/photos/a.668971426457233/3704690479551964/?type=3&theater"
    },
    {
        "nombre": "product9.jpg",
        "desc": "Pastel Pow Patrol",
        "url":"https://www.facebook.com/FiestaMima/photos/a.668971426457233/3691702040850808/?type=3&theater"
    },
    {
        "nombre": "product10.jpg",
        "desc": "Pastel",
        "url":"https://www.facebook.com/FiestaMima/photos/a.668971426457233/3517380274949653/?type=3&theater"
    },
    {
        "nombre": "product11.jpg",
        "desc": "Pastel Cervesas",
        "url":"https://www.facebook.com/FiestaMima/photos/a.668971426457233/3300537573300592/?type=3&theater"
    },
    {
        "nombre": "product12.jpg",
        "desc": "Pastel Graduacion",
        "url":"https://www.facebook.com/FiestaMima/photos/a.668971426457233/3212796225408061/?type=3&theater"
    }];


  constructor() { }

  ngOnInit(): void {
  }

}
