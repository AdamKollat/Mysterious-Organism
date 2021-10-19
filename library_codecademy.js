class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    }
  
    get checkedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    set isCheckedOut(value) {
      this._isCheckedOut = value;
    }
  
    toggleCheckOutStatus() {
      this.isCheckedOut = !this.isCheckedOut;
    }
  
    getAverageRating() {
      let sumOfRatings = this.ratings.reduce((accumulator, rating) => 
        accumulator + rating);
        return sumOfRatings / this.ratings.length;
      }
  
    addRating(newRating) {
      if (newRating > 0 $$ newRating < 6){
       this.ratings.push(newRating);
    } else {
      console.log('Please rate 1 to 5.')
    }
  
  }
  
  
   class Book extends Media {
     
     constructor(author, title, pages) {
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
  
     constructor(director, title, runTime) {
       super(title);
       this._director = director;
       this._runTime = runTime;
     }
  
     get director() {
       return this._director;
     }
  
     get runTime() {
       return this._runTime;
     }
  
   }
  
   const historyOfEverything = new Book('Bill Bryson', 'A Short History Of Nearly Everything', 544);
  
   historyOfEverything.toggleCheckOutStatus();
  
   console.log(historyOfEverything._isCheckedOut);
  
   historyOfEverything.addRating(4);
   historyOfEverything.addRating(5);
   historyOfEverything.addRating(5);
  
   console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie('Jan De Bont', 'Speed', 116);
  
  speed.toggleCheckOutStatus();
  console.log(speed._isCheckedOut);
  
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  
  console.log(speed.getAverageRating());
  
  class CD extends Media {
  
    constructor(artist, title, songs){
      super(title);
      this._artist = artist;
      this._songs = [];
    }
  
    get artist() {
      return this._artist;
    }
  
    get songs() {
      return this._songs;
    }
  
    shuffle(){
      for (let n = 0; n < this._songs.length; n++){
        
      }
    }
  }
  
  const puppets = new CD('Metallica', 'Master Of Puppets');
  puppets.songs.push('Orion', 'Battery', 'Master Of Puppets', 'Disposable Heroes');
  
  console.log(puppets.songs);
  