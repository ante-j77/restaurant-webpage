const wines = {
  menuTitle: "Wine",
  image: require("../assets/wine.jpg"),
  items: [
    {
      title: "Chapel Hill Shiraz",
      price: "56€",
      tags: "AU | Bottle",
    },
    {
      title: "Catena Malbee",
      price: "59€",
      tags: "AU | Bottle",
    },
    {
      title: "La Vieillw Rose",
      price: "44€",
      tags: "FR | 750 ml",
    },
    {
      title: "Rhino Pale Ale",
      price: "31€",
      tags: "CA | 750 ml",
    },
    {
      title: "La Pieve Vermentino",
      price: "65€",
      tags: "IT | 75 0ml",
    },
    {
      title: "Penfolds Cellar Reserve",
      price: "49€",
      tags: "SA | 750 ml",
    },
  ],
};

const beers = {
  menuTitle: "Beer",
  image: require("../assets/beer03.jpg"),
  items: [
    {
      title: "Irish Guinness",
      price: "$26",
      tags: "IE | 750 ml",
    },
    {
      title: "Paulaner Münchner Hell",
      price: "6€",
      tags: "GE | 500 ml",
    },
    {
      title: "Ayinger Bräu-weisse",
      price: "7€",
      tags: "GE | 500 ml",
    },
    {
      title: "Stiegl Grapefruit Radler",
      price: "5€",
      tags: "AT | 500 ml",
    },
    {
      title: "Smithwick's",
      price: "6€",
      tags: "IE | 330 ml",
    },
  ],
};

const cocktails = {
  menuTitle: "Cocktails",
  image: require("../assets/cocktail09.jpg"),
  items: [
    {
      title: "Aperol Sprtiz",
      price: "$20",
      tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
    },
    {
      title: "Dark 'N' Stormy",
      price: "$16",
      tags: "Dark rum | Ginger beer | Slice of lime",
    },
    {
      title: "Daiquiri",
      price: "$10",
      tags: "Rum | Citrus juice | Sugar",
    },
    {
      title: "Old Fashioned",
      price: "$31",
      tags: "Bourbon | Brown sugar | Angostura Bitters",
    },
    {
      title: "Negroni",
      price: "$26",
      tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
    },
  ],
};

const appetizers = {
  menuTitle: "Appetizer",
  image: require("../assets/gallery03.jpg"),
  items: [
    {
      title: "Caprese Skewers",
      price: "13€",
      tags: "fresh mozzarella, cherry tomatoes, and basil drizzled with balsamic glaze",
    },
    {
      title: "Mini Crab Cakes",
      price: "16€",
      tags: "succulent crab meat combined with herbs and spices, served with a tangy remoulade sauce",
    },
    {
      title: "Vegetable Spring Rolls",
      price: "12€",
      tags: "Crispy rolls filled with a medley of fresh vegetables, accompanied by sweet chili sauce.",
    },
    {
      title: "Bruschetta",
      price: "9€",
      tags: "Toasted baguette slices topped with diced tomatoes, garlic, basil, and a drizzle of extra virgin olive oil",
    },
  ],
};

const mainCourses = {
  menuTitle: "Main Course",
  image: require("../assets/gallery05.jpg"),
  items: [
    {
      title: "Grilled Filet Mignon",
      price: "29€",
      tags: "Tender and juicy filet mignon cooked to your preference, served with a red wine reduction and accompanied by roasted potatoes and seasonal vegetables.",
    },
    {
      title: "Baked Salmon with Dill Sauce",
      price: "24€",
      tags: "Flaky salmon fillets baked with a flavorful dill sauce, served on a bed of wild rice and sautéed asparagus.",
    },
    {
      title: "Stuffed Chicken Breast",
      price: "22€",
      tags: "Succulent chicken breasts filled with spinach and feta cheese, topped with a light lemon butter sauce and served with roasted garlic mashed potatoes and steamed broccoli.",
    },
    {
      title: "Vegetable Paella",
      price: "24€",
      tags: "A vibrant dish of saffron-infused rice cooked with an assortment of seasonal vegetables, garnished with fresh herbs.",
    },
    {
      title: "Eggplant Parmesan",
      price: "27€",
      tags: "Breaded and fried eggplant slices layered with marinara sauce, mozzarella cheese, and Parmesan, baked until golden and served with spaghetti marinara.",
    },
  ],
};

const desserts = {
  menuTitle: "Dessert",
  image: require("../assets/dessert.jpg"),
  items: [
    {
      title: "Decadent Chocolate Cake",
      price: "8€",
      tags: "Rich and moist chocolate cake layered with velvety chocolate ganache and finished with a dusting of powdered sugar.",
    },
    {
      title: "Classic New York Cheesecake",
      price: "10€",
      tags: "Creamy and smooth cheesecake on a graham cracker crust, served with a choice of raspberry or caramel sauce.",
    },
    {
      title: "Mixed Berry Parfait",
      price: "7€",
      tags: "Layers of fresh mixed berries, vanilla yogurt, and granola, topped with a drizzle of honey.",
    },
    {
      title: "Tiramisu",
      price: "7€",
      tags: "Traditional Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream, dusted with cocoa powder.",
    },
    {
      title: "Fruit Platter",
      price: "6€",
      tags: "A colorful assortment of seasonal fruits, including melons, berries, grapes, and pineapple.",
    },
  ],
};

export default { wines, beers, cocktails, appetizers, mainCourses, desserts };
