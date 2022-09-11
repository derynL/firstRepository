'use strict';

class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(checkoutStatus) {
    this._isCheckedOut = checkoutStatus;
  }

  toggleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut;
  }
  getAverageRating() {
    if (this.ratings.length === 0) {
      return 'No ratings yet';
    }
    for (let i = 0; i < this.ratings.length; i++) {
      if (this.ratings[i] >= 1 && this.ratings[i] <= 5) {
        let ratingSum = this.ratings.reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          0
        );
        let aveRating = (ratingSum / this._ratings.length).toFixed(1);
        return aveRating;
      }
    }
  }
  addRating(rating) {
    if (rating < 1 || rating > 5) {
      alert('Please enter a rating from 1 to 5');
    } else {
      this.ratings.push(rating);
    }
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime, featuredCast, movieGenre) {
    super(title);
    this._director = director;
    this._runTime = runTime;
    this._featuredCast = featuredCast;
    this._movieGenre = movieGenre;
  }

  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
  get featuredCast() {
    return this._featuredCast;
  }
  get movieGenre() {
    return this._movieGenre;
  }
}

class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
}

const historyOfEverything = new Book(
  'A Short History of Nearly Everything',
  'Bill Bryson',
  544
);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie(
  'Speed',
  'Jan de Bont',
  116,
  ['Keanu Reeves', 'Sandra Bullock'],
  'Action'
);

speed.isCheckedOut = speed.toggleCheckOutStatus();
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

const pushTheSky = new CD('Push the Sky Away', 'Nick Cave and the Bad Seeds', [
  'We No Who U R',
  'Wide Lovely Eyes',
  "Water's Edge",
  'Jubilee Street',
  'Mermaids',
  'We Real Cool',
  'Finishing Jubilee Street',
  'Higgs Boson Blues',
  'Push the Sky Away',
]);

pushTheSky.addRating(4);
pushTheSky.addRating(3);
pushTheSky.addRating(5);
pushTheSky.addRating(2);
pushTheSky.addRating(5);
pushTheSky.addRating(5);
pushTheSky.addRating(5);
pushTheSky.addRating(1);
pushTheSky.addRating(5);
pushTheSky.addRating(5);
console.log(pushTheSky.getAverageRating());
pushTheSky.toggleCheckOutStatus();
const pushInfo = `${pushTheSky.title} is an album by ${pushTheSky.artist}. 

  Number of tracks: ${pushTheSky.songs.length} 
  Checked out:${pushTheSky.isCheckedOut === true ? ' Yes' : ' No'}
  Average rating: ${pushTheSky.getAverageRating()}`;
console.log(pushInfo);
