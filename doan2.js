var i=1;
var n=6;

function next(){
    if(i<n) i+=1;
    else i=1;
    document.getElementById("slider").setAttribute("src","Image/iphone-13-pro-max-" +i+"-2.jpg")
}

function prev(){
    if(i>2) i-=1;
    else i=n;
    document.getElementById("slider").setAttribute("src", "Image/iphone-13-pro-max-" +i+"-2.jpg")
}

function autoPlay(){
    setInterval(next, 5000)
}