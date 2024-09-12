var heading = document.querySelector("#heading");

function increment () {
    heading.innerHTML++;
}

function decrement () {
    if(heading.innerHTML>0){
        heading.innerHTML--;
    }
    else{
        heading.innerHTML;
    }
}