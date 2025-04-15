const parent = document.querySelector('.parent');
// console.log(parent);

//  console.log(parent.children);
// console.log(parent.children[0].nodeName);

parent.children[1].innerText = 'Child Two';

parent.firstElementChild.innerText = 'Chile One';

parent.lastElementChild.innerText = 'Chile Three';


const child = document.querySelector('.child');

// console.log(child.parentElement.innerHTML);

const secondelement = document.querySelector('.child:nth-child(2)')

console.log(secondelement.nextElementSibling);

console.log(secondelement.previousElementSibling);