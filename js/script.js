$(document).ready(function () {

});
    var songs = ["song1.mp3", "song2.mp3", "song3.mp3", "song4.mp3", "song5.mp3",];
    var poster = ["poster1.jpg", "poster2.jpg", "poster3.jpg", "poster4.jpg", "poster5.jpg"];

    var songTitle = document.getElementById("songTitle");
    var fillBar = document.getElementById("fill");

    var song = new Audio();
    var currentSong = 0; //it point to the current song

    //window.onload = playSong; // it will call the func, when window is load

    song.addEventListener('timeupdate', function () {
        var position = song.currentTime / song.duration;
        fillBar.style.width = position * 100 + '%';
    });

    song.addEventListener("timeupdate",function(){
        var position = getSliderCurrentPosition(song.currentTime, song.duration);
        console.log(position);
    });



function playSong() {

    song.src = songs[currentSong]; //set the src of 0 song

    songTitle.textContent = songs[currentSong]; //set the title

    song.play(); //play the song
}

function playOrPauseSong(el) {

    if (song.paused) {
        playSong();
        //song.play();
        $("#play img").attr("src", "img/pause.png");
    }
    else {
        song.pause();
        $("#play img").attr("src", "img/play.png")
    }
}

function playSongFromList(el){
    console.log(currentSong);

    if (el !== null && el !== 'undefined'){
        var id = $(el).attr('data-id');
        currentSong = id;
        playSong();
        $("#play img").attr("src", "img/pause.png");

        $("#image img").attr("src", poster[currentSong]);
        $("#bg img").attr("src", poster[currentSong]);
    }
    showPlayer();
}

function getSliderCurrentPosition(songCurrentTime, songDuration) {
    var pos = songCurrentTime / songDuration * 100;
    return pos.toFixed(3);
}

function next() {

    currentSong++;
    if (currentSong > 4) {
        currentSong = 0;
    }
    playSong();
    $("#play img").attr("src", "img/pause.png");
    $("#image img").attr("src", poster[currentSong]);
    $("#bg img").attr("src", poster[currentSong]);
}

function pre() {

    currentSong--;
    if (currentSong < 0) {
        currentSong = 4;
    }
    playSong();
    $("#play img").attr("src", "img/pause.png");
    $("#image img").attr("src", poster[currentSong]);
    $("#bg img").attr("src", poster[currentSong]);
}

function showTracklist() {
    renderSongsList();

    $('#main').fadeOut(300);
    $('#tracklist').fadeIn(700);
}

function showPlayer() {
    $('#tracklist').fadeOut(300);
    $('#main').fadeIn(700);
}

function renderSongsList() {
    var htmlSongs = '';
    for (var song in songs) {
        htmlSongs += '<div class="btnListItem" data-id="' + song + '" onclick="playSongFromList(this)">' +
            '<div class="songTitleList" >Song' + ++song + '</div>' +
            '<button class="linkList"><img src="img/link2.png"></button>' +
            '<button class="likeList"><img src="img/like2.png"></button>' +
            '</div>';
    }
    $('#songs').html($(htmlSongs));
}









