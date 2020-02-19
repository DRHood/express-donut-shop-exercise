//= =====================
// REQUIREMENTS
//= =====================
// Make sure that when you run the seeds file, all of the
// fields are saved to the database.

let Coffee = require('../models/Coffee.js')

let newCoffees = [
  {
    name: 'Sprinkles',
    description: 'A lotta sprinkles, a lotta yum.',
    img: 'http://cdn.phillymag.com/wp-content/uploads/2013/09/coffee.png',
    price: 5,
    cups: 99
  },
  {
    name: 'Plain Ole Coffee',
    description: 'Plain coffee for plain people.',
    img: 'https://grandmastersensei.files.wordpress.com/2009/06/coffee.jpg',
    price: 25,
    cups: 15
  },
  {
    name: 'Chocolate',
    description: 'Chocolate Coffee nom nom nom',
    img:
      'https://deerfieldsbakery.com/images/items/Other/Pastries-Coffees-Chocolate-Iced-Glazed_MD.jpg',
    price: 7000,
    cups: 1
  },
  {
    name: 'Coffee Holes',
    description: 'For the snackers.',
    img:
      'http://sweets.seriouseats.com/images/20110313-142295-Dough-DonutHoles.jpg',
    price: 10,
    cups: 23
  }
]

Coffee.deleteMany().then (() => {
  Coffee.create(newCoffees).then(coffees => {
  console.log('Saved Coffees', coffees)
  });
});
