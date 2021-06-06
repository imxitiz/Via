function ttt(given_seconds) {
dateObj = new Date(given_seconds * 1000);
hours = dateObj.getUTCHours();
minutes = dateObj.getUTCMinutes();
seconds = dateObj.getSeconds();
timeString =hours.toString().padStart(2, '0')+ ':' + minutes.toString().padStart(2, '0')+ ':' +seconds.toString().padStart(2, '0');
return timeString;}

var div = document.createElement('script'); div.src ="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"; document.body.appendChild(div);

window.onload=function (){
var video=document.querySelector(".html5-video-player video");
$.ajax({
    url: "https://apidataweb.herokuapp.com/id/"+window.location.href.toString().split("?v=")[1].substr(0, 11),
    type: "GET",
    dataType: 'json',    
})
.done(function(response) { 
    // alert(JSON.stringify(response));

var para = document.createElement("P");
for (let y in response){
  para.innerHTML+=response[y][2]+" : "+ttt(response[y][0])+" "+ttt(response[y][1])+"<br>";
}
  para.style.position="absolute";
  para.style.top="41%";
  para.style.width="100%";
  para.style.left="1%";
  para.style.background="black";
  document.body.appendChild(para);

video.ontimeupdate=function(){
    for (let x in response) {
    if (video.currentTime.toFixed(0)>= response[x][0] && video.currentTime.toFixed(0)<response[x][1]){ video.currentTime=response[x][1]; }
    }
}
})
.fail (function(err,t,q) { 
    alert("Error"+JSON.stringify(err)+"other"+t+q); 
})
};
