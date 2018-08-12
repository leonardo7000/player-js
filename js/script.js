var songs = ["song1.mp3","song2.mp3","song3.mp3","song4.mp3","song5.mp3",];
var poster = ["poster1.jpg","poster2.jpg","poster3.jpg","poster4.jpg","poster5.jpg"];

var songTitle = document.getElementById("SongTitle");
var fillBar = document.getElementById("fill");

var song = new Audio();
var currentSong = 0; //it point to the current song

window.onload = playSong; // it will call the func, when window is load

fuction playSong(){
	
	song.src = songs[currentSong]; //set the srcof 0 song

	songTitle.textContent = songs[currentSongs]; //set the title

	song.play(); //play the song
}

