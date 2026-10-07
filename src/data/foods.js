const u = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=70`;

export const categories = ["All", "Breakfast", "Main Dishes", "Burgers", "Pizza", "Drinks", "Desserts"];

export const foods = [
  { id: 1, name: "Classic Cheeseburger", category: "Burgers", price: 12.5, rating: 4.8, image: u("photo-1568901346375-23c9450c58cd"), description: "Flame-grilled beef, aged cheddar, pickles and house sauce on a brioche bun." },
  { id: 2, name: "Smoky BBQ Burger", category: "Burgers", price: 14, rating: 4.7, image: u("photo-1550547660-d9450f859349"), description: "Double patty, crispy onions, smoked bacon and sticky barbecue glaze." },
  { id: 3, name: "Grilled Chicken", category: "Main Dishes", price: 15, rating: 4.6, image: u("photo-1598515214211-89d3c73ae83b"), description: "Herb-marinated chicken breast with charred vegetables and lemon butter." },
  { id: 4, name: "Jollof Rice & Chicken", category: "Main Dishes", price: 13.5, rating: 4.9, image: u("photo-1604329760661-e71dc83f8f26"), description: "Smoky party-style jollof with fried plantain and peppered chicken." },
  { id: 5, name: "Creamy Pasta", category: "Main Dishes", price: 13, rating: 4.5, image: u("photo-1621996346565-e3dbc646d9a9"), description: "Fettuccine in a garlic parmesan cream sauce with roasted mushrooms." },
  { id: 6, name: "Beef Steak", category: "Main Dishes", price: 24, rating: 4.9, image: u("photo-1600891964092-4316c288032e"), description: "Chargrilled ribeye with peppercorn sauce and rosemary potatoes." },
  { id: 7, name: "Fried Rice", category: "Main Dishes", price: 11, rating: 4.4, image: u("photo-1603133872878-684f208fb84b"), description: "Wok-tossed rice with egg, spring onion, carrots and sweet corn." },
  { id: 8, name: "Chicken Wings", category: "Main Dishes", price: 10.5, rating: 4.7, image: u("photo-1567620832903-9fc6debc209f"), description: "Crispy wings tossed in spicy honey glaze, served with ranch." },
  { id: 9, name: "Margherita Pizza", category: "Pizza", price: 12, rating: 4.8, image: u("photo-1574071318508-1cdbab80d002"), description: "Stone-baked with San Marzano tomato, fresh mozzarella and basil." },
  { id: 10, name: "Pepperoni Pizza", category: "Pizza", price: 14, rating: 4.7, image: u("photo-1628840042765-356cda07504e"), description: "Crisp-edged pepperoni, mozzarella and a drizzle of hot honey." },
  { id: 11, name: "Fluffy Pancakes", category: "Breakfast", price: 9, rating: 4.8, image: u("photo-1567620905732-2d1ec7ab7445"), description: "Buttermilk stack with maple syrup, berries and whipped butter." },
  { id: 12, name: "Avocado Toast & Eggs", category: "Breakfast", price: 9.5, rating: 4.6, image: u("photo-1525351484163-7529414344d8"), description: "Sourdough, smashed avocado, poached eggs and chilli flakes." },
  { id: 13, name: "Fresh Lemonade", category: "Drinks", price: 4.5, rating: 4.5, image: u("photo-1621263764928-df1444c5e859"), description: "Hand-squeezed lemons, mint and a touch of cane sugar." },
  { id: 14, name: "Strawberry Smoothie", category: "Drinks", price: 6, rating: 4.7, image: u("photo-1553530666-ba11a7da3888"), description: "Ripe strawberries blended with yoghurt and a hint of vanilla." },
  { id: 15, name: "Chocolate Cake", category: "Desserts", price: 7.5, rating: 4.9, image: u("photo-1578985545062-69928b1d9587"), description: "Three layers of dark chocolate sponge with silky ganache." },
  { id: 16, name: "Vanilla Cheesecake", category: "Desserts", price: 7, rating: 4.6, image: u("photo-1533134242443-d4fd215305ad"), description: "Baked New York style on a buttery biscuit base with berry compote." },
];
