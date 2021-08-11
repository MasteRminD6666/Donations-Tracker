//global varabiels
let table = document.getElementById("table");
let donationAmount = [100,300,500]
let AllDonaters= [
    
]

// constructor 
function Donater(name , age ,amount){
    this.name = name;
    this.amount =amount;
    this.age = age;
    totalDonators = 0;
    AllDonaters.push(this);
}

// getting the random number 
function getRndNumber(min, max) {
    let rand =  Math.floor(Math.random() * (max - min + 1) ) + min;
    return rand
  } 

let randomNum = getRndNumber(20,60);

// new objects 
let ahmed = new Donater('Ahmed', randomNum,500);
let samer = new Donater('Samer', randomNum,500);
let emad = new Donater('Emad', randomNum,500);
let boshra = new Donater('Boshra', randomNum,500);
let rami = new Donater('Rami', randomNum,500);


// console.log(AllDonaters);

function tableHeader() {
    let header = ['Donator Name','Donator Amount', 'Age']
    let tableRow = document.createElement('tr');
    table.appendChild(tableRow);
    
     for (let i = 0; i < header.length; i++) {
        let tableHeading = document.createElement('th');
        tableRow.appendChild(tableHeading);
        tableHeading.textContent = header[i];
     } 
}

tableHeader()
// stuck on a noob way 
Donater.prototype.render = function() {
    let tableRow = document.createElement('tr');
    for (let i = 0; i < AllDonaters.length; i++) {
        let tableRow = document.createElement('tr');
        let tableData = document.createElement('td');
        tableRow.appendChild(tableData);
        tableData.textContent= AllDonaters[i].name;
        console.log(AllDonaters);
        table.appendChild(tableRow);
    }
  
}
function SubmitHandler(event) {
    event.preventDefault();
    // i dont have time this fucntion cuz of the internet went off this functaon takes from the form and when we click sumbit it should clear the content and re render again

    
}
let form = document.getElementById('form')
form.addEventListener('click',SubmitHandler)

rami.render();

//for the local storage we need to save it 
localStorage.setItem('Donatoin',JSON.stringify(AllDonaters));

let array= localStorage.getItem('Donatoin');
arrayParsed = JSON.parse(array);


