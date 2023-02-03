var elem = document.getElementById("click");
console.log(elem);



var eleClass = document.getElementsByClassName("container");

// console.log(eleClass);

// eleClass[0].style.background="yellow";

// eleClass[0].classList.add("text-success");

let tn = document.getElementsByTagName('button')
console.log(tn)

 let tc=document.getElementsByTagName('div');
console.log(tc);
createdElement=document.createElement('p');
createdElement.innerText="This is a para";
tc[0].appendChild(createdElement)