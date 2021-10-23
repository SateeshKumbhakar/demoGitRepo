/*
let test= document.getElementById('headingId');
console.log(test);
test.addEventListener('click',function (e){
  
    console.log('this is event lister inside ');
});

localStorage.setItem("name","sateesh");
let nam= localStorage.getItem('name');
console.log(nam);;;
localStorage.clear();
let nam= localStorage.getItem('name');*/

//let div1 = document.getElementsByClassName("container");
let div1 = document.getElementById("item1");
console.log(div1);
div1.addEventListener("click",function(e){
div1.contentEditable="true";
localStorage.setItem("myStorage",e.target.innerText);

});
