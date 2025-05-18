let arr= [123,"123", true, false, 56];
console.log(`the length of the array is: ${arr.length}`);

console.log(arr[0]);
console.log(arr[4]);
console.log(arr[2]);
console.log(arr[2]+ ' - '+ arr[3])

for(let i=1; i<= 100;i++)
{
    console.log(i);
}

for(let i=0;i<= arr.length-1; i++)
{
    console.log(arr[i]);
}

console.log('break');

for(let i=0; i< arr.length; i++)
{
    console.log(arr[i]);
}

//function

function add(a,b)  //parameters
{
    let sum = a+b;
    console.log(`the sum of ${a} and ${b} is ${sum}`);
}

add(3,4); //arguments
add(67,38); //arguments
add(45,67);  //arguments

arr.map((el,i)=>{
    console.log(el);
});

// let num = Number(prompt("Enter the number of which you want to have multiplication table : "));
// for(let i=1;i<=50;i++)
// {
//     document.write(`<h3>${num} × ${i} = ${num*i} <br></h3>`);
// }


let arr2= [23,24,67,45,34];
arr2.map((el, index)=>{
    console.log(el+ ' index: '+ index);
});

function multiply(a,b)
{
    let multiply=a*b;
    console.log(multiply);
}
multiply(30,9);
multiply(20,8);

function addition2(a,b,c)
{
    let sum = a+b+c;
    console.log(sum);
}

let num = [6,7,2];
addition2(...num);

function test(...num)
{
    console.log(num);
}

test(3,4,5,'Jackson');

function test2(...num)
{
    const sum =  num.reduce((acc, el)=> acc+el, 0);
    console.log("Sum:",sum);
}
test2(3,4,5);

function sum(...num)
{
    let c = num.reduce((a,b)=> a+b,0);
    console.log(c);
}

sum(3,4,5,6,7);


//multiplication table using function

// let number = Number(prompt("Which number will you choose for multiplication table: "));

// function m_table(num)
// {
    

//     for(let i=1;i<=20;i++)
//     {
//         console.log(`${num}* ${i} = ${num*i}`);
//     }
// }

// m_table(number);

let on = document.querySelector('.on');
let off = document.querySelector('.off');
let image = document.querySelector('.image') 
on.addEventListener('click', function(){
    image.src='	https://www.w3schools.com/js/pic_bulbon.gif';
});

off.addEventListener('click',function()
{
    image.src='	https://www.w3schools.com/js/pic_bulboff.gif';
});

// off.addEventListener('click', ()=>
// {

// });

let gen_clr = document.querySelector(`.generate_clr`);
let color_box = document.querySelector('.color_box');
let color = document.querySelector('.color');

gen_clr.addEventListener('click',()=>
{
    // console.log(Math.round(Math.random()*255));
    let red = Math.round(Math.random()*255); 
    let green = Math.round(Math.random()*255);
    let blue = Math.round(Math.random()*255);

    color.textContent = `RGB: ( ${red}, ${green}, ${blue} ) `
    color_box.style.background = `rgb(${red}, ${green}, ${blue})`;

});
