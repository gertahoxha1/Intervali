// x= Math.PI;
// console.log(x)

// x=Math.abs(-8);
// console.log (x)

//me log
// x=Math.log(2)
// console.log(x)

//me round up the number
// x=Math.round(8.7)
// console.log(x)

//me rrenje katrore
// x = Math.sqrt(25)
// console.log(x)

//hek nr mas presjes dhjetore
// x = Math.trunc(12.4)
// console.log(x)

//time
// let koha;
// koha = new Date();
// console.log(koha);

//me shtu ni new date
// let koha1;
// koha = new Date (2023, 0, 12 , 8 , 7 , 2) 
// console.log(koha);

//metoda interval

// var intervali = setInterval(test, 6000)

// function test(){
//     alert("Hellooo");
// }


//metoda clearinterval

// var count = 0;
// var detyra = setInterval(test, 1000);

// function test(){
//     console.log(count);
//     count++;
//     if(count == 10){
//         clearInterval(detyra);
//     }
// }

let intervalId;

function startInterval() {
    intervalId = setInterval(displayDate, 1000);
}

function stopInterval() {
    clearInterval(intervalId);
}

function displayDate() {
    const currentDate = new Date();
    const outputElement = document.getElementById("output");
    outputElement.textContent = "Current Date" + currentDate.toLocaleString();
}