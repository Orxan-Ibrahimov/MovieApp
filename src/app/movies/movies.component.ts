import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // movies = ["movie-1", "movie-2", "movie-3", ""];
  movies:Movie[] = [
    {
      id: 1,
      name: 'Avatar 2',
      description: `Avatar: The Way of Water, uzun süredir beklenen devam filmi olan James
      Cameron'ın yönettiği bir bilim kurgu macera filmidir.Film, mavi tenli
      Na'vi halkının gezegen Pandora'da geçmektedir.`,
      image: 'Avatar.jpg',
    },
    {
      id: 2,
      name: 'Ghosted',
      description: `Ghosted, duygusal bir dram ve romantik bir komedinin birleştiği
      etkileyici bir film.Hikaye, genç ve idealist bir kadın olan Maya'nın,
      hayatta hiçbir şeyden korkmayan ve sıradışı bir erkek olan Ben ile
      beklenmedik bir şekilde karşılaşmasıyla başlar.`,
      image: 'Ghosted.jpg',
    },
    {
      id: 3,
      name: 'Gifted',
      description: `Gifted, yetenekli bir çocuğun hikayesini ele alan duygusal bir dram
      filmidir.Frank Adler, genç yeğeni Mary ile tek başına yaşayan bir
      adamdır.`,
      image: 'gifted.jpg',
    },
    {
      id: 4,
      name: 'Captain America: Ciwil War',
      description: `Captain America: Civil War Marvel Sinematik Evreni'nin bir parçası olan bir
       süper kahraman filmidir.Film, dostluk, sadakat ve sorumluluk kavramlarını ele alırken,
        süper kahramanların arasındaki çatışmaları ve ayrışmayı konu alır.`,
      image: 'Captain-America-Ciwil-War.jpg',
    },
    {
      id: 5,
      name: 'She Is The Man',
      description: `She's the Man, genç bir kadın olan Viola Hastings'in hikayesini anlatır.
      Viola, futbol oynamaya olan tutkusunu takip ederek erkekler takımına katılmaya
       karar verir.`,
      image: 'she-is-the-man.jpg',
    },
    {
      id: 6,
      name: 'Flash',
      description: `The Flash aynı isme sahip çizgi romandan uyarlamadır.
      Barry Allen suçluların bıraktıkları delilleri toplayan sıradan bir adli tıp laboratuvar 
      asistanıdır. Geçmişte büyük bir trazedi yaşayan Barry STAR laboratuvarında hata sonucu
      gerçekleşen patlama sonrası hava durumu değişir ve çarpan şimşek ile Flash kimliğine 
      bürünür. Kötü adamları adalete teslim etme vazifesini üstlenen The Flash oldukça hızlıdır.`,
      image: 'Flash.jpg',
    },
  ];
}
