const mongoose = require('mongoose');
const Dessert = require('../schemas/dessertSchema');

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log('Connected ok');
  })
  .catch((e) => {
    console.log(e);
    console.log('Connection error');
  });

const desserts = [
  {
    id: 0,
    name: 'Frozen yoghurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    image:
      'https://www.slimmingeats.com/blog/wp-content/uploads/2021/09/frozen-yoghurt-with-raspberries-and-white-chocolate-1-720x720.jpg',
    details:
      'Whip up a homemade frozen yogurt as a lighter alternative to ice cream. These no-churn desserts include delicious flavours such as strawberry and tropical fruit.',
  },
  {
    id: 1,
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IceCreamSandwich.jpg/1200px-IceCreamSandwich.jpg',
    details:
      'An ice cream sandwich is a frozen dessert consisting of ice cream between two biscuits, skins, wafers, or cookies. The ingredients are different around the world, with Ireland and Israel using wafers, and North America using chocolate cookies.',
  },
  {
    id: 2,
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 24,
    protein: 6.0,
    image:
      'https://vandemoortele.com/sites/default/files/styles/square_product/public/2a6971399eb368122ddfac3f4b5dce3482533bb3.jpg?itok=T-RBrUSc',
    details:
      'Deliciously crisp, puffy and perfect chocolate eclairs filled with chocolate or vanilla pastry cream.',
  },
  {
    id: 3,
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    image: 'https://leitesculinaria.com/wp-content/uploads/2021/10/classic-vanilla-cupcakes-1.jpg',
    details:
      'Before the invention of the muffin tin, small cakes were baked in individual ramekins, hence the name cupcake.',
  },
  {
    id: 4,
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    image:
      'https://3f4c2184e060ce99111b-f8c0985c8cb63a71df5cb7fd729edcab.ssl.cf2.rackcdn.com/media/19214/gingerbreadcutouts.jpg',
    details:
      'Gingerbread refers to a broad category of baked goods, typically flavored with ginger, cloves, nutmeg, and cinnamon and sweetened with honey, sugar, or molasses. Gingerbread foods vary, ranging from a soft, moist loaf cake to forms nearly as crisp as a ginger snap.',
  },
];

const seedDatabase = async () => {
  await Dessert.deleteMany({});

  desserts.forEach(async (dessert) => {
    const d = new Dessert(dessert);
    await d.save();
  });
};

seedDatabase();
