let numbers = document.querySelectorAll('h5');
let screen = document.getElementById("screenvalue");
let screenVal = "";
let ButtonTxt = "";
for (item of numbers) {
    item.addEventListener('click', function(e) {
        ButtonTxt = e.target.innerText;
        console.log(ButtonTxt);
        if (ButtonTxt == 'X') {
            ButtonTxt = '*';
            screenVal += ButtonTxt;
            screen.value = screenVal;

        } else if (ButtonTxt == '%') {
            ButtonTxt = '/';
            screenVal += ButtonTxt;
            screen.value = screenVal;

        } else if (ButtonTxt == 'AC') {

            screenVal = "";
            screen.value = screenVal;

        } else if (ButtonTxt == '=') {

            screen.value = eval(screenVal);

        } else {
            screenVal += ButtonTxt;
            screen.value = screenVal;
        }
    })
};