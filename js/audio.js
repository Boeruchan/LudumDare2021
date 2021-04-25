function playSound(sound) {
    const mybgmusic = document.getElementById("sound");
    mybgmusic.volume = .25; // setting the volume to 25% because the sound is loud
    if (mybgmusic.paused) {  // if song1 is paused
      mybgmusic.play();
    } else {
      mybgmusic.pause();
    }
  }

  window.onload=function(){
    document.getElementById("sound").play();
  }



