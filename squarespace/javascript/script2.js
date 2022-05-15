var myButton = document.getElementById("button");
var square = document.getElementById("box");
var count = 0;

myButton.addEventListener('click', function () {

    count+=2;
    switch (count) {

        case 1:

        square.style.background = 'green';
        myButton.innerText = 'Make Red';

        break;
        case 2:

        square.style.background = 'red';
        myButton.innerText = 'Make Yellow';

        
        break;
        case 3:

        square.style.background = 'yellow';
        myButton.innerText = 'Make Blue';

        break;
        case 4:

        square.style.background = 'blue';
        myButton.innerText = 'Make Red';

        break;

        case 1:

        square.style.background = 'green';
        myButton.innerText = 'Make Red';

        break;

        case 1:

        square.style.background = 'green';
        myButton.innerText = 'Make Red';

        break;

        case 1:

        square.style.background = 'green';
        myButton.innerText = 'Make Red';

        break;

        case 1:

        square.style.background = 'green';
        myButton.innerText = 'Make Red';

        break;

        case 1:

        square.style.background = 'green';
        myButton.innerText = 'Make Red';

        break;
        count=2;


    };
});