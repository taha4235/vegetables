var vegetables = document.getElementById("vegetables");
var add = document.getElementById("add");
var check = document.getElementById("check");
var check1 = document.getElementById("check1");
var check2 = document.getElementById("check2");
var check3 = document.getElementById("check3");
var check4 = document.getElementById("check4");
var name = document.getElementById("name");
check1.addEventListener("click",function eve(){
    window.prompt("do you want to buy this product");
    if(window.prompt.value='no'){
        alert("write yes if you want to buy this product")
    }
    else{
        alert("the price of this product is "+10+"$")
    }

})
check2.addEventListener("click",function eve(){
    window.prompt("do you want to buy this product");
    if(window.prompt.value='no'){
        alert("write yes if you want to buy this product")
    }
    else{
        alert("the price of this product is "+11+"$")
    }
    
})
check3.addEventListener("click",function eve(){
    window.prompt("do you want to buy this product");
    if(window.prompt.value='no'){
        alert("write yes if you want to buy this product")
    }
    else{
        alert("the price of this product is "+14+"$")
    }
    
})
check4.addEventListener("click",function eve(){
    window.prompt("do you want to buy this product");
    if(window.prompt.value='no'){
        alert("write yes if you want to buy this product")
    }
    else{
        alert("the price of this product is "+15+"$")
    }
})
//function to change the value of the button
check.onclick=function changing(){
   check.innerHTML="buy";
   window.alert("scroll down "+`${name}`)
}
check.ondblclick=function remake(){
    check.innerHTML="check out";
}
vegetables.onkeyup=function(){
    const taha = vegetables.value;
    taha = vegetables*5;
    window.alert("the total price of you vegetables is:"+taha+"$")
}
//delete the value in the input field using this function below
add.onclick=function rem(){
    //in this function we check the value of the id vegetables(input) if it negative or positive
  if(vegetables.value>0){
    vegetables.value="";
  }
  else if(vegetables.value<0){
    alert("wrong!")
  }
}
$(document).ready(function(){
  $(".activeimages1").click(function(){
     $(".right-nav1").slideToggle();
  })
  $(".activeimages2").click(function(){
    $(".right-nav2").slideToggle();
 })
 $(".activeimages3").click(function(){
    $(".right-nav3").slideToggle();
 })
 $(".activeimages4").click(function(){
    $(".right-nav4").slideToggle();
 })
 $(".activeimages5").click(function(){
    $(".right-nav5").slideToggle();
 })
 $(".ac").click(function(){
    $(".right-nav6").slideToggle()
 })
 $(".activeimages7").click(function(){
    $(".right-nav7").slideToggle();
 })
 $(".activeimages8").click(function(){
    $(".right-nav8").slideToggle();
 })
 $(".activeimages9").click(function(){
    $(".right-nav9").slideToggle()
 })
})
// Get the end of the year
let endOfYear = new Date(new Date().getFullYear(), 11, 31, 23, 59, 59);

// Get the current time
let currentTime = new Date();

// Calculate the difference in milliseconds
let timeDifference = endOfYear - currentTime;

// Calculate the number of months, days, minutes, and seconds remaining
let months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)) % 30;
let minutes = Math.floor(timeDifference / (1000 * 60)) % 60;
let seconds = Math.floor(timeDifference / 1000) % 60;

// Update the countdown timer every second
setInterval(function() {
  timeDifference = endOfYear - new Date();
  months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
  days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)) % 30;
  minutes = Math.floor(timeDifference / (1000 * 60)) % 60;
  seconds = Math.floor(timeDifference / 1000) % 60;
  
  document.getElementById("months").innerHTML = months;
  document.getElementById("days").innerHTML = days;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);
//fill the table using this funtion
var name = document.getElementById("name");
var email = document.getElementById("email");
var number = document.getElementById("number");
var subject = document.getElementById("subject");
var message = document.getElementById("message");
var send = document.getElementById("send");
var tbody = document.getElementById("tbody");
data=[
    name=name.value,
    email=email.value,
    number=number.value,
    subject=subject.value,
    message=message.value,
]
for(i=0;i<data.length;i++){
    send.onclick=function(){
        tbody.innerHTML=`
        <tr>
        <td>${name.value}</td>
        <td>${email.value}</td>
        <td>${number.value}</td>
        <td>${subject.value}</td>
        <td>${message.value}</td>
        `
   }
}
//function delete data

