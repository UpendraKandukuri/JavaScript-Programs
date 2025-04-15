const products = [
    { id: 1, name: 'Laptop', price: 800, category: 'Electronics' },
    { id: 2, name: 'Shoes', price: 120, category: 'Footwear' },
    { id: 3, name: 'Phone', price: 500, category: 'Electronics' },
    { id: 4, name: 'T-Shirt', price: 25, category: 'Clothing' },
    { id: 5, name: 'Watch', price: 150, category: 'Accessories' }
];

function totalPrice(products) {
    
    let sum = products.reduce((acc, products)=> {
                                  return acc+products.price
                                  },0);

    console.log(`Total sum of all products price: ${sum}`);
}

function filterByCategory(products){
    let category = products.filter(p => p.category === 'Electronics');
    console.log('Filtered by category')
    console.log(category);
}

function productsName(products) {
    let names = products.map(p=>p.name)

    console.log(`The names of all products: ${names}`);
}

totalPrice(products);
filterByCategory(products);
productsName(products);
  