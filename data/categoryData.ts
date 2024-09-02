export type Categories = {
  id: number;
  name: string;
  slug: string;
  description?: string;
  cakes?: Cakes[];
  image: string;
  price: number;
  metadescription: string;
};

export type Cakes = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export const categories: Categories[] = [
  {
    id: 1,
    name: "Black Forest",
    slug: "black-forest",
    image: "/category/blackForest/black_forest.jpg",
    price: 550,
    metadescription:
      "Indulge in our luxurious Black Forest cake rich chocolate, whipped cream, and cherries in every decadent bite. Perfect for celebrations!",
    description:
      "Elevate your celebrations with our irresistible Black Forest cake, a masterpiece of flavor and elegance. This iconic dessert is crafted with layers of rich, velvety chocolate sponge, lavishly filled with fluffy whipped cream and succulent cherries, then crowned with a generous sprinkling of chocolate shavings and vibrant cherries. Each slice is a perfect harmony of deep chocolate richness and fruity sweetness, creating an unforgettable taste experience. Whether it’s a birthday, anniversary, or just because, our Black Forest cake adds a touch of luxury to any moment, making it truly unforgettable.",
    cakes: [
      {
        id: 1,
        name: "Black Forest",
        price: 550,
        image: "/category/blackForest/black_forest.jpg",
      },
      {
        id: 2,
        name: "Black Forest",
        price: 550,
        image: "/category/Premium Cakes/9.jpg",
      },
      {
        id: 3,
        name: "Black Forest",
        price: 550,
        image: "/category/Premium Cakes/10.jpg",
      },
      {
        id: 4,
        name: "Black Forest",
        price: 550,
        image: "/category/blackForest/bf1.png",
      },
      {
        id: 5,
        name: "Black Forest",
        price: 550,
        image: "/category/blackForest/bf2.png",
      },
      {
        id: 6,
        name: "Black Forest",
        price: 550,
        image: "/category/blackForest/bf3.png",
      },
      {
        id: 7,
        name: "Black Forest",
        price: 550,
        image: "/category/blackForest/bf4.png",
      },
      {
        id: 8,
        name: "Black Forest",
        price: 550,
        image: "/category/blackForest/bf5.png",
      },
      {
        id: 9,
        name: "Black Forest",
        price: 550,
        image: "/category/blackForest/bf6.png",
      },
      {
        id: 10,
        name: "Black Forest",
        price: 550,
        image: "/category/blackForest/bf7.png",
      },
      {
        id: 11,
        name: "Black Forest",
        price: 550,
        image: "/category/blackForest/bf8.png",
      },
      {
        id: 12,
        name: "Black Forest",
        price: 550,
        image: "/category/blackForest/bf9.png",
      },
      {
        id: 13,
        name: "Black Forest",
        price: 550,
        image: "/category/blackForest/bf10.png",
      },
    ],
  },
  {
    id: 2,
    name: "Chocolate",
    slug: "chocolate",
    image: "/category/chocolate/1.jpeg",
    price: 800,
    metadescription:
      "Indulge in our rich Chocolate cake decadent layers of moist chocolate sponge and velvety ganache. Perfect for chocolate lovers!",
    description:
      "Treat yourself to our luxurious Chocolate cake, a decadent delight that's perfect for any occasion. Crafted with layers of moist, rich chocolate sponge and generously coated with smooth, velvety chocolate ganache, this cake is a dream come true for chocolate enthusiasts. Each bite offers a melt-in-your-mouth experience, with deep, intense chocolate flavor that's both indulgent and satisfying. Whether it’s a birthday, celebration, or simply a craving for something sweet, our Chocolate cake is the ultimate treat, bringing joy and a touch of elegance to any moment.",
    cakes: [
      {
        id: 1,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/1.jpeg",
      },
      {
        id: 2,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/2.jpeg",
      },
      {
        id: 3,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/3.jpg",
      },
      {
        id: 4,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/4.jpg",
      },
      {
        id: 5,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/5.png",
      },
      {
        id: 6,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/6.jpg",
      },
      {
        id: 7,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/7.jpg",
      },
      {
        id: 8,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/8.jpg",
      },
      {
        id: 9,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/9.jpg",
      },
      {
        id: 10,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/10.jpg",
      },
      {
        id: 11,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/11.jpg",
      },
      {
        id: 12,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/12.jpg",
      },
      {
        id: 13,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/13.jpg",
      },
      {
        id: 14,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/14.jpeg",
      },
      {
        id: 15,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/15.jpeg",
      },
      {
        id: 16,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/16.jpeg",
      },
      {
        id: 17,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/17.jpeg",
      },
      {
        id: 18,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/18.jpeg",
      },
      {
        id: 19,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/19.jpeg",
      },
      {
        id: 20,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/20.jpeg",
      },
      {
        id: 21,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/21.jpg",
      },
      {
        id: 22,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/22.jpg",
      },
      {
        id: 23,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/23.jpg",
      },
      {
        id: 24,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/24.jpg",
      },
      {
        id: 25,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/25.jpg",
      },
      {
        id: 26,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/26.jpg",
      },
      {
        id: 27,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/27.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Cup Cakes",
    slug: "cup-cakes",
    image: "/category/Cup Cakes/cup_cakes.jpg",
    price: 30,
    metadescription:
      "Enjoy our irresistible cupcakes moist, flavorful, and topped with rich, creamy frosting. The perfect treat for any occasion!",
    description:
      "Brighten your day with our irresistible cupcakes, each one a little bite of happiness. Baked to perfection, our cupcakes are moist, fluffy, and come in a variety of delicious flavors, all topped with rich, creamy frosting. Whether you’re celebrating a special event or simply treating yourself, our cupcakes add a touch of sweetness and fun to any occasion. From classic vanilla to rich chocolate and beyond, each cupcake is crafted with love and attention to detail, ensuring a delightful taste experience with every bite. Perfect for parties, gifts, or just because—our cupcakes are a must-have for any dessert lover.",
    cakes: [
      {
        id: 1,
        name: "Cup Cake",
        price: 30,
        image: "/category/Cup Cakes/cup_cakes_1.jpg",
      },
      {
        id: 2,
        name: "Cup Cake",
        price: 50,
        image: "/category/Cup Cakes/cup_cakes.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "Doll Cake",
    slug: "doll-cake",
    image: "/category/doll_cake/doraemon.png",
    price: 2000,
    metadescription:
      "Delight in our enchanting Doll Cake moist cake layers beneath a beautifully decorated doll dress. A magical centerpiece for any celebration!",
    description:
      "Celebrate in style with our charming Doll Cake, designed to captivate and delight. This whimsical creation features layers of moist, flavorful cake hidden beneath a stunningly decorated doll dress. Each cake is meticulously crafted to ensure a visually stunning centerpiece that’s as delicious as it is beautiful. Ideal for birthdays and special occasions, our Doll Cake adds a touch of magic and fun to any event, making it a memorable treat for both kids and adults alike. With intricate details and a perfect balance of taste and presentation, it’s sure to make your celebration unforgettable.",
    cakes: [
      {
        id: 1,
        name: "Doll Cake",
        price: 2000,
        image: "/category/doll_cake/doraemon.png",
      },
      {
        id: 2,
        name: "Doll Cake",
        price: 2000,
        image: "/category/doll_cake/doll_cake_price.jpg",
      },
    ],
  },
  {
    id: 5,
    name: "Fruit Cake",
    slug: "fruit-cake",
    image: "/category/Fruit Cake/1.jpg",
    price: 950,
    metadescription:
      "Enjoy our delightful Fruit Cake: moist, fruity, and topped with a touch of elegance. A perfect choice for festive celebrations!",
    description:
      "Elevate your gatherings with our exquisite Fruit Cake, a delightful blend of moist cake and a medley of succulent fruits. Each slice is bursting with vibrant flavors and topped with a touch of elegance, making it an ideal choice for festive occasions. Crafted with care and a blend of premium ingredients, our Fruit Cake offers a harmonious balance of sweetness and fruitiness, perfect for any celebration. Whether for a holiday feast or a special event, this cake adds a sophisticated and joyful touch to your festivities, ensuring a memorable experience for all.",
    cakes: [
      {
        id: 1,
        name: "Fruit Cake",
        price: 950,
        image: "/category/Fruit Cake/1.jpg",
      },
      {
        id: 2,
        name: "Fruit Cake",
        price: 950,
        image: "/category/Fruit Cake/2.jpg",
      },
      {
        id: 3,
        name: "Fruit Cake",
        price: 950,
        image: "/category/Fruit Cake/3.jpg",
      },
      {
        id: 4,
        name: "Fruit Cake",
        price: 950,
        image: "/category/Fruit Cake/4.jpg",
      },
      {
        id: 5,
        name: "Fruit Cake",
        price: 950,
        image: "/category/Fruit Cake/5.jpg",
      },
      {
        id: 6,
        name: "Fruit Cake",
        price: 950,
        image: "/category/Fruit Cake/6.jpg",
      },
      {
        id: 7,
        name: "Fruit Cake",
        price: 950,
        image: "/category/Fruit Cake/7.jpg",
      },
    ],
  },
  {
    id: 6,
    name: "Pastries",
    slug: "pastries",
    image: "/category/pestries/pastries.jpg",
    price: 60,
    metadescription:
      "Discover our delectable Pastry Cake: layers of flaky pastry and creamy filling, creating a perfect balance of flavor and texture.",
    description:
      "Indulge in our delightful Pastry Cake, a masterful blend of flaky pastry layers and rich, creamy filling. Each slice offers a perfect harmony of crispiness and smooth, luscious cream, making it an irresistible treat for any occasion. Crafted with the finest ingredients and meticulous attention to detail, our Pastry Cake adds a touch of sophistication and indulgence to your celebrations. Ideal for gatherings, special events, or as a well-deserved treat, this cake promises a memorable taste experience that’s both elegant and satisfying.",
    cakes: [
      {
        id: 1,
        name: "Chocolate Pastries",
        price: 60,
        image: "/category/pestries/pastries.jpg",
      },
      {
        id: 2,
        name: "White Forest Pastries",
        price: 70,
        image: "/category/pestries/pastries1.png",
      },
      {
        id: 3,
        name: "Black Forest Pastries",
        price: 60,
        image: "/category/pestries/pastries2.png",
      },
      {
        id: 4,
        name: "Vanilla Pastries",
        price: 60,
        image: "/category/pestries/pastries3.png",
      },
    ],
  },
  {
    id: 7,
    name: "White Forest",
    slug: "white-forest",
    image: "/category/whiteForest/white_forest.jpg",
    price: 600,
    metadescription:
      "Delight in our White Forest cake:light vanilla sponge, whipped cream, and juicy cherries. A luxurious treat for any occasion!",
    description:
      "Celebrate in style with our exquisite White Forest cake, a stunning blend of flavors and elegance. This delightful dessert features layers of fluffy vanilla sponge, generously filled with velvety whipped cream and juicy cherries, all topped with delicate white chocolate shavings and more cherries. The combination of light, airy cake and sweet, tangy cherries creates a perfectly balanced taste that's both refreshing and indulgent. Perfect for birthdays, anniversaries, or any special moment, our White Forest cake adds a touch of sophistication and sweetness to your celebrations, making every occasion memorable.",
    cakes: [
      {
        id: 1,
        name: "White Forest",
        price: 600,
        image: "/category/whiteForest/white_forest.jpg",
      },
      {
        id: 2,
        name: "White Forest",
        price: 600,
        image: "/category/whiteForest/white_forest_price.jpg",
      },
      {
        id: 3,
        name: "White Forest",
        price: 600,
        image: "/category/whiteForest/wf1.png",
      },
      {
        id: 4,
        name: "White Forest",
        price: 600,
        image: "/category/whiteForest/wf2.png",
      },
      {
        id: 5,
        name: "White Forest",
        price: 600,
        image: "/category/whiteForest/wf3.png",
      },
      {
        id: 6,
        name: "White Forest",
        price: 600,
        image: "/category/whiteForest/wf4.png",
      },
    ],
  },
  {
    id: 8,
    name: "Premium Cakes",
    slug: "premium-cakes",
    image: "/category/Premium Cakes/1.jpeg",
    price: 1000,
    metadescription:
      "Savor our Premium Cake:luxuriously layered with exquisite flavors and a rich, decadent finish. A sophisticated choice for any special occasion!",
    description:
      "Experience the height of indulgence with our Premium Cake, designed to impress and delight. This elegant creation features layers of the finest ingredients, masterfully combined to offer a rich, decadent flavor and a smooth, velvety texture. Perfect for celebrating milestones or adding a touch of luxury to any event, our Premium Cake stands out with its sophisticated taste and beautiful presentation. Crafted with precision and care, it ensures a memorable and sumptuous experience, making every occasion truly special.",
    cakes: [
      {
        id: 1,
        name: "Premium Cakes",
        price: 1200,
        image: "/category/Premium Cakes/1.jpeg",
      },
      {
        id: 2,
        name: "Premium Cakes",
        price: 1200,
        image: "/category/Premium Cakes/2.jpg",
      },
      {
        id: 3,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/3.jpg",
      },
      {
        id: 4,
        name: "Premium Cakes",
        price: 1200,
        image: "/category/Premium Cakes/4.jpg",
      },
      {
        id: 5,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/5.jpg",
      },
      {
        id: 6,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/6.jpg",
      },
      {
        id: 7,
        name: "Premium Cakes",
        price: 1200,
        image: "/category/Premium Cakes/7.jpg",
      },
      {
        id: 8,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/8.jpg",
      },

      {
        id: 11,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/11.jpg",
      },
      {
        id: 12,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/12.jpg",
      },
      {
        id: 13,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/13.jpg",
      },
      {
        id: 14,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/14.jpg",
      },
      {
        id: 15,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/15.jpg",
      },
      {
        id: 16,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/16.jpg",
      },
      {
        id: 17,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/17.jpg",
      },
      {
        id: 18,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/18.jpg",
      },
      {
        id: 19,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/19.jpg",
      },
      {
        id: 20,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/20.jpg",
      },
      {
        id: 21,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/21.jpg",
      },
      {
        id: 22,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/22.jpg",
      },
      {
        id: 23,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/23.jpg",
      },
      {
        id: 24,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/24.jpg",
      },
      {
        id: 25,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/25.jpg",
      },
      {
        id: 26,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/26.jpg",
      },
      {
        id: 27,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/27.jpg",
      },
      {
        id: 28,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/28.jpg",
      },
      {
        id: 29,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/29.jpg",
      },
      {
        id: 30,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/30.jpg",
      },
      {
        id: 31,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/31.jpg",
      },
      {
        id: 32,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/32.jpg",
      },
      {
        id: 33,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/33.jpeg",
      },
      {
        id: 34,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/34.jpeg",
      },
      {
        id: 35,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/35.jpeg",
      },
      {
        id: 36,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/36.jpeg",
      },
      {
        id: 37,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/37.jpeg",
      },
      {
        id: 38,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/38.jpeg",
      },
      {
        id: 39,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/39.jpeg",
      },
      {
        id: 40,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/40.jpeg",
      },
      {
        id: 41,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/41.jpeg",
      },
      {
        id: 42,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/42.jpeg",
      },
      {
        id: 43,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/43.jpeg",
      },
      {
        id: 44,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/44.jpeg",
      },
      {
        id: 45,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/45.jpeg",
      },
      {
        id: 46,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/46.jpeg",
      },
      {
        id: 47,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/47.jpeg",
      },
      {
        id: 48,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/48.jpg",
      },
      {
        id: 49,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/49.jpg",
      },
      {
        id: 50,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/50.jpeg",
      },
      {
        id: 51,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/51.jpg",
      },
      {
        id: 52,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/52.jpg",
      },
      {
        id: 53,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/53.jpg",
      },
      {
        id: 54,
        name: "Premium Cakes",
        price: 1000,
        image: "/category/Premium Cakes/54.jpeg",
      },
    ],
  },
  {
    id: 9,
    name: "Red Velvet",
    slug: "red-velvet",
    image: "/category/red valvet/3.jpeg",
    price: 900,
    metadescription:
      "Delight in our Red Velvet Cake: velvety layers of rich, red sponge and creamy frosting. A stunning treat for any celebration!",
    description:
      "Immerse yourself in the elegance of our Red Velvet Cake, a showstopper that combines rich, velvety red sponge with a smooth, creamy frosting. Each layer is baked to perfection, offering a luxurious texture and a subtly tangy flavor that’s simply irresistible. Perfect for birthdays, anniversaries, or any special occasion, this cake not only looks stunning but tastes divine. With its striking color and indulgent taste, our Red Velvet Cake adds a touch of sophistication and joy to every celebration.",
    cakes: [
      {
        id: 1,
        name: "Red Velvet",
        price: 900,
        image: "/category/red valvet/2.jpg",
      },
      {
        id: 2,
        name: "Red Velvet",
        price: 900,
        image: "/category/red valvet/3.jpeg",
      },
    ],
  },
  {
    id: 10,
    name: "Vanilla",
    slug: "vanilla",
    image: "/category/venilla/5.jpeg",
    price: 500,
    metadescription:
      "Relish our Vanilla Cake—light, fluffy layers with a hint of vanilla and smooth, creamy frosting. A timeless classic for any occasion!",
    description:
      "Indulge in our Vanilla Cake, a classic favorite that combines light, airy layers with the perfect touch of vanilla. Each slice offers a tender crumb and a delightful flavor, complemented by smooth, creamy frosting. Ideal for any celebration, this cake provides a timeless and elegant choice, whether you're marking a special occasion or simply enjoying a sweet treat. With its understated beauty and delicious taste, our Vanilla Cake brings a touch of sophistication and joy to every event.",
    cakes: [
      {
        id: 1,
        name: "Vanilla",
        price: 500,
        image: "/category/venilla/5.jpeg",
      },
      {
        id: 2,
        name: "Vanilla",
        price: 500,
        image: "/category/venilla/6.jpeg",
      },
      {
        id: 3,
        name: "Vanilla",
        price: 500,
        image: "/category/venilla/7.jpg",
      },
      {
        id: 4,
        name: "Vanilla",
        price: 500,
        image: "/category/venilla/8.jpg",
      },
      {
        id: 5,
        name: "Vanilla",
        price: 500,
        image: "/category/venilla/9.jpeg",
      },
      {
        id: 6,
        name: "Vanilla",
        price: 500,
        image: "/category/venilla/10.jpeg",
      },
      {
        id: 7,
        name: "Vanilla",
        price: 500,
        image: "/category/venilla/11.jpeg",
      },
      {
        id: 8,
        name: "Vanilla",
        price: 500,
        image: "/category/venilla/12.jpeg",
      },
      {
        id: 9,
        name: "Vanilla",
        price: 500,
        image: "/category/venilla/13.jpg",
      },
      {
        id: 10,
        name: "Vanilla",
        price: 500,
        image: "/category/venilla/14.jpeg",
      },
    ],
  },
];
