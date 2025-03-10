var secondes = ["10","9","8","7","6","5","4","3","2","1","0"];
let i = 0;

var button = document.getElementById("buttontimer");

function doTimer(){
    i = 0;
    function timer() {
        if (i<=10){
            console.log(secondes[i]);
            i++;
            button.disabled = true;
        } else {
            button.disabled = false;
            clearInterval(timer);
            return;
        }

    }
    setInterval(timer,1000);
}
