var randomname,randomlocation,randomemail,randompassword,randomdob,randomphone;
var image=document.getElementById('user-image');
var iconregular=document.querySelectorAll('.fa-regular');
var iconsolid=document.querySelectorAll('.fa-solid');
var username=document.getElementById('user-name');
var userdesc=document.getElementById('user-desc');

document.addEventListener("DOMContentLoaded", generateUser);
function generateUser(){
    fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((data)=>{
        const user =data.results[0];
        image.src=`${user.picture.large}`;
        randomname=`${user.name.first} ${user.name.last}`;
        randomemail=user.email;
        randomdob=user.dob.date;
        randomphone=user.phone;
        randomlocation=`${user.location.street.number} ${user.location.street.name}`;
        randompassword=user.login.password;
        username.innerText="Hi, My name is";
        userdesc.innerText=randomname;
        iconregular[0].style.color="green"
    })
    .catch((error)=>{
        console.error("Error fetching user:",error);
    });
    }

    //Hover section

    iconregular[0].addEventListener('mouseover',generatename)
    function generatename(){
        username.innerText="Hi, My name is";
        userdesc.innerText=randomname;
        iconregular[0].style.color="green"
        iconregular[1].style.color="gray"
        iconregular[2].style.color="gray"
    }
    iconregular[1].addEventListener('mouseover',generatemail)
    function generatemail(){
        username.innerText="My email address is";
        userdesc.innerText=randomemail;
        iconregular[1].style.color="green"
        iconregular[0].style.color="gray"
        iconregular[2].style.color="gray"
    }
    iconregular[2].addEventListener('mouseover',generatedob)
    function generatedob(){
        username.innerText="My birthday is";
        userdesc.innerText=randomdob;
        iconregular[2].style.color="green"
        iconregular[0].style.color="gray"
        iconregular[1].style.color="gray"
        iconsolid[0].style.color="gray"
        iconsolid[1].style.color="gray"
        iconsolid[2].style.color="gray"
    }
    iconregular[2].addEventListener('mouseover',generatedob)
    function generatedob(){
        username.innerText="My birthday is";
        userdesc.innerText=randomdob;
        iconregular[2].style.color="green"
        iconregular[0].style.color="gray"
        iconregular[1].style.color="gray"
        iconsolid[0].style.color="gray"
        iconsolid[1].style.color="gray"
        iconsolid[2].style.color="gray"
    }
    iconsolid[0].addEventListener('mouseover',generatlocation)
    function generatlocation(){
        username.innerText="My address is";
        userdesc.innerText=randomlocation;
        iconregular[0].style.color="gray"
        iconregular[1].style.color="gray"
        iconregular[2].style.color="gray"
        iconsolid[0].style.color="green"
        iconsolid[1].style.color="gray"
        iconsolid[2].style.color="gray"
    }
    iconsolid[1].addEventListener('mouseover',generatephone)
    function generatephone(){
        username.innerText="My phone number is";
        userdesc.innerText=randomphone;
        iconregular[0].style.color="gray"
        iconregular[1].style.color="gray"
        iconregular[2].style.color="gray"
        iconsolid[0].style.color="gray"
        iconsolid[1].style.color="green"
        iconsolid[2].style.color="gray"
    }
    iconsolid[2].addEventListener('mouseover',generatepassword)
    function generatepassword(){
        username.innerText="My password is";
        userdesc.innerText=randompassword;
        iconregular[0].style.color="gray"
        iconregular[1].style.color="gray"
        iconregular[2].style.color="gray"
        iconsolid[0].style.color="gray"
        iconsolid[1].style.color="gray"
        iconsolid[2].style.color="green"
    }
   
