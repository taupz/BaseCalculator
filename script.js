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

function goToMethodes(){
    document.documentElement.scrollTop = 400;
    console.log("test");
}

function resetInputs(){
    document.getElementById("number-to-convert-input").value = '';
    document.getElementById("initial-base").value = '';
    document.getElementById("final-base").value = '';

    document.getElementById("info-number").innerHTML = '...';
    document.getElementById("info-initial").innerHTML = '...';
    document.getElementById("info-final").innerHTML = '...';

    document.getElementById("result-display").innerHTML = '...';
}

/*---------------Conversion part---------------*/
function conversionProcess(){
    /*get values*/
    var input_value = document.getElementById("number-to-convert-input").value;
    var initial_base = document.getElementById("initial-base").value;
    var final_base = document.getElementById("final-base").value;

    var final_result = '';

    /*manage conversion info*/
    document.getElementById("info-number").innerHTML = input_value;
    document.getElementById("info-initial").innerHTML = initial_base;
    document.getElementById("info-final").innerHTML = final_base;

    /*---------------Calculation part---------------*/

    /*--What conversion are we dealing with ?--*/
    /*2 to 10*/
    if(initial_base === "2" && final_base === "10"){

    }

    /*10 to 2*/
    else if(initial_base === "10" && final_base === "2"){
        number_to_divide = input_value;

        while(number_to_divide != 0){
            final_result = (number_to_divide%2).toString() + final_result;
            console.log((number_to_divide%2).toString());
            number_to_divide = Math.floor(number_to_divide/2);
            console.log("Quotient : "+number_to_divide);
        }
        final_result = (number_to_divide%2).toString() + final_result;
        if(final_result === '0'){

        }
        else{
            if(final_result.charAt(0) === '0'){
                final_result = final_result.substring(1,final_result.length);
            }
        }
    }

    /*display result*/
    if(final_result === ''){
        document.getElementById("result-display").innerHTML = '...';
    }
    else{
        document.getElementById("result-display").innerHTML = final_result;
    }
}
function swapValuesButton(){
    var first_value = document.getElementById("initial-base").value;
    var second_value = document.getElementById("final-base").value;
    document.getElementById("initial-base").value = second_value;
    document.getElementById("final-base").value = first_value;
}