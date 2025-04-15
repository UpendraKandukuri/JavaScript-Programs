
const title = document.getElementById('main-title');
console.log(title);
title.innerText = 'Welcome to DOM';
title.style.backgroundColor = 'pink';
title.style.border = 'orange solid 2px';
title.style.borderRadius='10px';

 const container = document.getElementsByClassName('container');
console.log(container[0].children);

const container1 = document.querySelector('.container')
console.log(container1.children);


const items = document.getElementsByTagName('li');
console.log(items); // HTMLCollection
items[0].style.color = 'red';
items[1].style.color = 'green';
items[2].style.color = 'blue';

const items1 = document.querySelectorAll('.item');
console.log(items1); // NodeList


const btn = document.querySelector('#action-btn');
console.log(btn.parentElement);
console.log(btn.nextElementSibling);
console.log(btn.previousElementSibling);

console.log(document.body);
console.log(document.forms[0]);
console.log(document.forms['sampleForm']);