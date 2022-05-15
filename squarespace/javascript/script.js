var myButton = document.getElementById("button");
var square = document.getElementById("box");
var count = 0;

myButton.addEventListener('click', function () {

    count++;
    if (count%2===0) {
        square.style.background = 'green';
        myButton.innerText = 'Make Red';

    } else {
        square.style.background = 'red';
        myButton.innerText = 'Make Green';
    }
    //else {
       // square.style.background = 'blue';
       // myButton.innerText = 'Make Yellow';

    //}else {
    /*square.style.background = 'yellow';
        myButton.innerText = 'Make Black';

    }else square.style.background = 'black'){
        myButton.innerText = 'Make Brown';

    }else if (square.style.background = 'brown'){
        myButton.innerText = 'Make White';

    }else if (square.style.background = 'white'){
        myButton.innerText = 'Make Purple';

    }else if (square.style.background = 'purple'){
        myButton.innerText = 'Make Navy';

    }else if (square.style.background = 'navy'){
        myButton.innerText = 'Make Violet';

    }
    else {
        square.style.background = 'grey';
        //myButton.innerText = 'Make Yellow';
    }*/
    
});
