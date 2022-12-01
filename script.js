/*----------SCROLL UP BUTTON----------*/
let mybutton = document.getElementById("scroll-up-button");

window.onscroll = function(){
    scrollFunction();
}

function scrollFunction(){
    if(document.body.scroll > 20  || document.documentElement.scrollTop > 20){
        mybutton.style.display = "block";

    } 
    else{
        mybutton.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}