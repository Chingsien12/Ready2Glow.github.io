//function that make the time countdown

function startTimer(duration, display) 
{
    var timer = duration, minutes, seconds;
    setInterval(function () 
    {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) 
        {
            timer = duration;
        }
        if (timer==0) 
        {
        	window.location.href="index.html";
        }
    }, 1000);
}
function onint () {
    var Thirtyminute = 60 * 30,
        display = document.querySelector('#time');
    startTimer(Thirtyminute, display);
};
addEventListener("load",onint);


//create the slide
var i=0;//start point 
var images=[];//array of an images
var time=3000; //3000 milisec


//image list 
images[0]="images/free-we-re-hiring-background-vector.jpg";
images[1]="images/ITmanager.png";
images[2]="images/painter.png";

function changeimages()
{
    document.slide.src=images[i];//have to put slide as a id of div in html files
    if (i<images.length-1) //0<2->1<1
    {
        i++;
    }
    else
    {
        i=0;
    }
    //using the recursive function
    setTimeout("changeimages()",time);
}
addEventListener("load",changeimages);// it occur when the page load the same as window.onload but it doesn't overwrite the element