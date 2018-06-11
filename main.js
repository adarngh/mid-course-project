var images =new Array(3);
var x = -1;
images[2] ="./images/250X110571325734.jpg";
images[1] =  "./images/paz_250x110103131473.jpg"
images[0] =  "./images/250X110668568400.jpg"
var h2Text=new Array(3)
h2Text[2]="yellow click&pick;";
h2Text[1]="שטחי מסחר פז סנטר";
h2Text[0]="טיפז";
function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("textToChange").textContent =h2Text[x];
    document.getElementById("imageToChange").src =  images[x];
}
function startTimer() {
    setInterval(displayNextImage, 3000);
}

