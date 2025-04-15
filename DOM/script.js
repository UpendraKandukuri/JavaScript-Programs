
/*
console.log(document.body)
console.log(document.head.children)

console.log(document.forms[0])
console.log(document.images[0].src)

*/


// console.log(document.getElementById('item-form'))
// const title = document.getElementById('app-title');
// title.textContext = 'hiii';
// title.innerText='hello';
// title.innerHTML='<h5>jiii</h5>';

// title.style.backgroundColor = 'blue';
// title.style.border = ' black solid 5px'
// title.style.borderRadius = '15px'


// const form = document.querySelector('#app-title')
// console.log(form)

//  console.log(document.querySelector('#app-title'));
// console.log(document.querySelector('#item-list'));
// const secondLi = document.querySelector('li:nth-child(2)');
// secondLi.innerText = 'banana';

// console.log(document.querySelector('ul'));

const lilist = document.querySelectorAll('.item');

lilist.forEach(item => {
    item.style.color = 'green';
})
// console.log(lilist[2].innerText);
console.log(lilist[2].innerHTML);



