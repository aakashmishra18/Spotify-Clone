console.log("Welcome to spotify");
//Initializes the variables
let songIndex=0;
//Audio Element play();
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let progressbar=document.getElementById('progressbar');
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');

let songitem=Array.from(document.getElementsByClassName('songItem'));
let songs =[
    {Songname:"Industry Baby",filePath:"songs/6.mp3", coverPath:"cover/7.jpg"},
    {Songname:"Billonera",filePath:"songs/2.mp3", coverPath:"cover/2.jpg"},
    {Songname:"Dil Ne Ye Kaha Hn Dil Se",filePath:"songs/3.mp3", coverPath:"cover/3.jpg"},
    {Songname:"Arcade",filePath:"songs/4.mp3", coverPath:"cover/4.jpg"},
    {Songname:"Astronaut In The Ocean",filePath:"songs/5.mp3", coverPath:"cover/5.jpg"},
    {Songname:"Industry Baby",filePath:"songs/6.mp3", coverPath:"cover/6.jpg"},
    {Songname:"Believer",filePath:"songs/7.mp3", coverPath:"cover/7.jpg"},
    {Songname:"Let Me Love You",filePath:"songs/8.mp3", coverPath:"cover/8.jpg"},
    {Songname:"Mann Mera",filePath:"songs/9.mp3", coverPath:"cover/9.jpg"},
]

songitem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("Songname")[0].innerText=songs[i].Songname;

})
//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity=1;
    }
  else{
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
    gif.style.opacity=0;

  }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
   

    //update seek bar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    progressbar.value=progress;

})   

progressbar.addEventListener('change',()=>{
    audioElement.currentTime=progressbar.value*audioElement.duration/100;
})
    const makeAllPlays=()=>{
        
        Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
        })
    }
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
     element.addEventListener('click',(e)=>{
        // console.log(e.target);
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        mastersongname.innerText=songs[songIndex].Songname;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

     })
         
     
})


document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=8)
    {
        songIndex=0;
    }
    else{
    songIndex+=1;
    }
        audioElement.src=`songs/${songIndex+1}.mp3`;
        mastersongname.innerText=songs[songIndex].Songname;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex>0)
    {
        songIndex=0;
    }
    else{
    songIndex-=1;
    }
        audioElement.src=`songs/${songIndex+1}.mp3`;
        mastersongname.innerText=songs[songIndex].Songname;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})



