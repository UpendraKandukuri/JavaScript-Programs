
const links = document.querySelectorAll('a');
console.log(links);

links.forEach( (a) => {
    let str = a.href;
    if(str.startsWith('https')){
        a.setAttribute('class' , 'external-link');
    }
})


const items = document.querySelectorAll('.external-link');
      
items.forEach((item) => {
    item.style.background = 'red';
    item.style.text = 'solid black 20px';
    item.style.border = 'solid black 2px';
    item.style.borderRadius = '5px';
  });
  
    

