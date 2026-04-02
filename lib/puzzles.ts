export interface CartItem {
  emoji: string;
  name: string;
  store: string;
  category: "food" | "grocery" | "convenience" | "pet" | "flowers" | "alcohol" | "pharmacy" | "retail";
  price: string;
}

export interface MoviePuzzle {
  id: number;
  movie: string;
  year: number;
  items: CartItem[];
  hint: string;
}

export const puzzles: MoviePuzzle[] = [
  {
    id: 1,
    movie: "Forrest Gump",
    year: 1994,
    items: [
      { emoji: "🍫", name: "Assorted Box of Chocolates", store: "See's Candies", category: "retail", price: "24.99" },
      { emoji: "🦐", name: "Jumbo Shrimp Platter", store: "Red Lobster", category: "food", price: "18.99" },
      { emoji: "🏃", name: "Running Shoes (Size 10)", store: "Dick's Sporting Goods", category: "retail", price: "89.99" },
      { emoji: "🍑", name: "Fresh Georgia Peaches (6ct)", store: "Safeway", category: "grocery", price: "5.99" },
      { emoji: "🏓", name: "Ping Pong Paddle Set", store: "Target", category: "retail", price: "19.99" },
    ],
    hint: "Life is like a box of...",
  },
  {
    id: 2,
    movie: "Home Alone",
    year: 1990,
    items: [
      { emoji: "🧀", name: "Plain Cheese Pizza (Large)", store: "Little Caesars", category: "food", price: "8.99" },
      { emoji: "🪤", name: "Mouse Traps (12-Pack)", store: "Walgreens", category: "convenience", price: "7.49" },
      { emoji: "🎄", name: "Mini Christmas Tree", store: "Target", category: "retail", price: "29.99" },
      { emoji: "🪣", name: "Paint Cans (Red & Green)", store: "Home Depot", category: "retail", price: "15.99" },
      { emoji: "🧴", name: "Aftershave Lotion", store: "CVS", category: "pharmacy", price: "9.99" },
    ],
    hint: "Keep the change, ya filthy animal",
  },
  {
    id: 3,
    movie: "The Wizard of Oz",
    year: 1939,
    items: [
      { emoji: "👠", name: "Ruby Red Slippers (Women's 7)", store: "DSW", category: "retail", price: "49.99" },
      { emoji: "🌻", name: "Sunflower Bouquet", store: "FTD Flowers", category: "flowers", price: "34.99" },
      { emoji: "🧠", name: "Brain Teaser Puzzle Set", store: "Barnes & Noble", category: "retail", price: "12.99" },
      { emoji: "❤️", name: "Heart-Shaped Locket", store: "Claire's", category: "retail", price: "14.99" },
      { emoji: "🐶", name: "Small Dog Treats - Toto's Faves", store: "PetSmart", category: "pet", price: "8.49" },
    ],
    hint: "There's no place like...",
  },
  {
    id: 4,
    movie: "Jurassic Park",
    year: 1993,
    items: [
      { emoji: "🦕", name: "Dinosaur Figurine Set", store: "Target", category: "retail", price: "22.99" },
      { emoji: "🧬", name: "DNA Testing Kit", store: "CVS", category: "pharmacy", price: "79.99" },
      { emoji: "🥚", name: "Organic Eggs (1 Dozen)", store: "Whole Foods", category: "grocery", price: "6.99" },
      { emoji: "🌴", name: "Tropical Plant - Fern", store: "Home Depot", category: "retail", price: "18.99" },
      { emoji: "🥩", name: "Raw Goat Meat (5 lbs)", store: "Costco", category: "grocery", price: "24.99" },
    ],
    hint: "Life, uh, finds a way",
  },
  {
    id: 5,
    movie: "Ratatouille",
    year: 2007,
    items: [
      { emoji: "🐀", name: "Humane Mouse Trap", store: "Walgreens", category: "convenience", price: "6.99" },
      { emoji: "👨‍🍳", name: "Chef's Hat & Apron Set", store: "Williams Sonoma", category: "retail", price: "34.99" },
      { emoji: "🍅", name: "Heirloom Tomatoes (4ct)", store: "Trader Joe's", category: "grocery", price: "4.99" },
      { emoji: "🧅", name: "French Onion Soup", store: "Panera Bread", category: "food", price: "7.49" },
      { emoji: "🍷", name: "French Red Wine - Bordeaux", store: "Total Wine", category: "alcohol", price: "18.99" },
    ],
    hint: "Anyone can cook",
  },
  {
    id: 6,
    movie: "The Godfather",
    year: 1972,
    items: [
      { emoji: "🍊", name: "Navel Oranges (Bag of 8)", store: "Kroger", category: "grocery", price: "5.99" },
      { emoji: "🐴", name: "Horse Grooming Kit", store: "Tractor Supply", category: "pet", price: "29.99" },
      { emoji: "🌹", name: "Single Red Rose", store: "1-800-Flowers", category: "flowers", price: "9.99" },
      { emoji: "🍝", name: "Cannoli (6-Pack)", store: "Italian Bakery", category: "food", price: "15.99" },
      { emoji: "🤵", name: "Black Suit - Formal", store: "Men's Wearhouse", category: "retail", price: "199.99" },
    ],
    hint: "An offer you can't refuse",
  },
  {
    id: 7,
    movie: "Finding Nemo",
    year: 2003,
    items: [
      { emoji: "🐠", name: "Clownfish (Live)", store: "Petco", category: "pet", price: "24.99" },
      { emoji: "🤿", name: "Snorkel & Mask Set", store: "Target", category: "retail", price: "29.99" },
      { emoji: "🦈", name: "Shark Gummy Candy", store: "7-Eleven", category: "convenience", price: "3.99" },
      { emoji: "🐢", name: "Sea Turtle Plush Toy", store: "Build-A-Bear", category: "retail", price: "22.99" },
      { emoji: "🪸", name: "Aquarium Coral Decor", store: "PetSmart", category: "pet", price: "14.99" },
    ],
    hint: "Just keep swimming",
  },
  {
    id: 8,
    movie: "Harry Potter",
    year: 2001,
    items: [
      { emoji: "🦉", name: "Owl Figurine - Snowy White", store: "Barnes & Noble", category: "retail", price: "19.99" },
      { emoji: "🧹", name: "Broomstick - Wooden Handle", store: "Home Depot", category: "retail", price: "12.99" },
      { emoji: "🍺", name: "Butterscotch Root Beer (6-Pack)", store: "Whole Foods", category: "grocery", price: "8.99" },
      { emoji: "📜", name: "Parchment Paper Roll", store: "Staples", category: "retail", price: "6.99" },
      { emoji: "🕯️", name: "Floating Candles (Set of 12)", store: "Yankee Candle", category: "retail", price: "24.99" },
    ],
    hint: "You're a wizard...",
  },
  {
    id: 9,
    movie: "Titanic",
    year: 1997,
    items: [
      { emoji: "💎", name: "Blue Sapphire Pendant Necklace", store: "Zales", category: "retail", price: "149.99" },
      { emoji: "🚢", name: "Model Ship Kit", store: "Hobby Lobby", category: "retail", price: "34.99" },
      { emoji: "🎨", name: "Charcoal Drawing Set", store: "Michael's", category: "retail", price: "15.99" },
      { emoji: "🧊", name: "Party Ice (20 lb Bag)", store: "7-Eleven", category: "convenience", price: "4.99" },
      { emoji: "🌹", name: "Dozen Red Roses", store: "FTD Flowers", category: "flowers", price: "49.99" },
    ],
    hint: "I'm the king of the world",
  },
  {
    id: 10,
    movie: "The Lion King",
    year: 1994,
    items: [
      { emoji: "🦁", name: "Lion Cub Plush Toy", store: "Disney Store", category: "retail", price: "24.99" },
      { emoji: "🐗", name: "Wild Boar Jerky", store: "Trader Joe's", category: "grocery", price: "7.99" },
      { emoji: "🐛", name: "Gummy Worms & Bugs Mix", store: "7-Eleven", category: "convenience", price: "3.49" },
      { emoji: "👑", name: "Gold Party Crown", store: "Party City", category: "retail", price: "5.99" },
      { emoji: "🌅", name: "Sunrise Alarm Clock", store: "Best Buy", category: "retail", price: "39.99" },
    ],
    hint: "Hakuna Matata",
  },
  {
    id: 11,
    movie: "Ghostbusters",
    year: 1984,
    items: [
      { emoji: "👻", name: "Ghost Pepper Hot Sauce", store: "Whole Foods", category: "grocery", price: "8.99" },
      { emoji: "🎒", name: "Proton Pack Backpack", store: "Spirit Halloween", category: "retail", price: "39.99" },
      { emoji: "🧲", name: "Industrial Magnets (4-Pack)", store: "Home Depot", category: "retail", price: "11.99" },
      { emoji: "🍕", name: "New York Style Pizza (XL)", store: "Domino's", category: "food", price: "16.99" },
      { emoji: "🚫", name: "No Smoking Signs (Pack of 3)", store: "Staples", category: "retail", price: "9.99" },
    ],
    hint: "Who ya gonna call?",
  },
  {
    id: 12,
    movie: "The Matrix",
    year: 1999,
    items: [
      { emoji: "💊", name: "Vitamin Capsules - Red & Blue", store: "CVS", category: "pharmacy", price: "12.99" },
      { emoji: "🕶️", name: "Black Wraparound Sunglasses", store: "Sunglass Hut", category: "retail", price: "29.99" },
      { emoji: "🥩", name: "Wagyu Steak (Ignorance is Bliss)", store: "Whole Foods", category: "grocery", price: "49.99" },
      { emoji: "📱", name: "Nokia Flip Phone (Vintage)", store: "eBay Marketplace", category: "retail", price: "24.99" },
      { emoji: "🥋", name: "Black Trench Coat", store: "Nordstrom", category: "retail", price: "89.99" },
    ],
    hint: "There is no spoon",
  },
  {
    id: 13,
    movie: "Up",
    year: 2009,
    items: [
      { emoji: "🎈", name: "Helium Balloons (100-Pack)", store: "Party City", category: "retail", price: "49.99" },
      { emoji: "🏠", name: "Miniature House Model Kit", store: "Hobby Lobby", category: "retail", price: "19.99" },
      { emoji: "🐕", name: "Golden Retriever Dog Food", store: "PetSmart", category: "pet", price: "34.99" },
      { emoji: "🧭", name: "Hiking Compass", store: "REI", category: "retail", price: "15.99" },
      { emoji: "🍇", name: "Grape Soda (12-Pack)", store: "Kroger", category: "grocery", price: "5.99" },
    ],
    hint: "Adventure is out there!",
  },
  {
    id: 14,
    movie: "Jaws",
    year: 1975,
    items: [
      { emoji: "🦈", name: "Great White Shark Poster", store: "Amazon", category: "retail", price: "12.99" },
      { emoji: "🏖️", name: "Beach Umbrella - Striped", store: "Target", category: "retail", price: "29.99" },
      { emoji: "🎣", name: "Deep Sea Fishing Rod", store: "Bass Pro Shops", category: "retail", price: "59.99" },
      { emoji: "🩸", name: "Fake Blood - Theater Grade", store: "Spirit Halloween", category: "retail", price: "6.99" },
      { emoji: "🍺", name: "IPA Beer (6-Pack)", store: "Total Wine", category: "alcohol", price: "11.99" },
    ],
    hint: "You're gonna need a bigger boat",
  },
  {
    id: 15,
    movie: "Willy Wonka",
    year: 1971,
    items: [
      { emoji: "🍫", name: "Golden Ticket Chocolate Bar", store: "See's Candies", category: "retail", price: "4.99" },
      { emoji: "🎩", name: "Purple Top Hat", store: "Party City", category: "retail", price: "14.99" },
      { emoji: "🫐", name: "Fresh Blueberries (Giant Size)", store: "Whole Foods", category: "grocery", price: "6.99" },
      { emoji: "🍬", name: "Everlasting Gobstoppers", store: "7-Eleven", category: "convenience", price: "2.99" },
      { emoji: "🥤", name: "Fizzy Lifting Drink (Sparkling)", store: "Trader Joe's", category: "grocery", price: "3.99" },
    ],
    hint: "We are the music makers",
  },
  {
    id: 16,
    movie: "Cast Away",
    year: 2000,
    items: [
      { emoji: "🏐", name: "Wilson Volleyball", store: "Dick's Sporting Goods", category: "retail", price: "19.99" },
      { emoji: "🥥", name: "Fresh Coconuts (3-Pack)", store: "Whole Foods", category: "grocery", price: "8.99" },
      { emoji: "📦", name: "FedEx Shipping Boxes (10ct)", store: "FedEx Office", category: "retail", price: "12.99" },
      { emoji: "🔥", name: "Waterproof Matches", store: "REI", category: "retail", price: "5.99" },
      { emoji: "⛵", name: "Inflatable Raft", store: "Bass Pro Shops", category: "retail", price: "89.99" },
    ],
    hint: "WILSON! I'm sorry!",
  },
  {
    id: 17,
    movie: "Toy Story",
    year: 1995,
    items: [
      { emoji: "🤠", name: "Cowboy Hat - Kids", store: "Party City", category: "retail", price: "9.99" },
      { emoji: "🚀", name: "Toy Rocket Ship", store: "Target", category: "retail", price: "14.99" },
      { emoji: "🪖", name: "Green Army Men (100-Pack)", store: "Dollar Tree", category: "retail", price: "5.99" },
      { emoji: "🐶", name: "Slinky Dog Toy", store: "Amazon", category: "retail", price: "11.99" },
      { emoji: "🥔", name: "Mr. Potato Head Kit", store: "Walmart", category: "retail", price: "12.99" },
    ],
    hint: "To infinity and beyond!",
  },
  {
    id: 18,
    movie: "E.T.",
    year: 1982,
    items: [
      { emoji: "🚲", name: "Kids BMX Bicycle", store: "Walmart", category: "retail", price: "99.99" },
      { emoji: "🍬", name: "Reese's Pieces (Family Size)", store: "7-Eleven", category: "convenience", price: "4.99" },
      { emoji: "📡", name: "Walkie Talkie Set", store: "Best Buy", category: "retail", price: "24.99" },
      { emoji: "🌙", name: "Glow-in-the-Dark Stars", store: "Target", category: "retail", price: "7.99" },
      { emoji: "🫙", name: "Flower Pot - Terracotta", store: "Home Depot", category: "retail", price: "6.99" },
    ],
    hint: "Phone home...",
  },
  {
    id: 19,
    movie: "The Breakfast Club",
    year: 1985,
    items: [
      { emoji: "🥪", name: "Club Sandwich Platter", store: "Subway", category: "food", price: "11.99" },
      { emoji: "📝", name: "Detention Notebook & Pencils", store: "Staples", category: "retail", price: "4.99" },
      { emoji: "💃", name: "Leg Warmers - Pink", store: "Hot Topic", category: "retail", price: "12.99" },
      { emoji: "🕶️", name: "Ray-Ban Wayfarers", store: "Sunglass Hut", category: "retail", price: "154.99" },
      { emoji: "🥣", name: "Assorted Breakfast Cereals (6ct)", store: "Kroger", category: "grocery", price: "18.99" },
    ],
    hint: "Don't you forget about me",
  },
  {
    id: 20,
    movie: "Shrek",
    year: 2001,
    items: [
      { emoji: "🧅", name: "Yellow Onions (5 lb Bag)", store: "Kroger", category: "grocery", price: "3.99" },
      { emoji: "🫏", name: "Donkey Plush Toy", store: "Build-A-Bear", category: "retail", price: "22.99" },
      { emoji: "🏰", name: "Medieval Castle LEGO Set", store: "Target", category: "retail", price: "49.99" },
      { emoji: "🍪", name: "Gingerbread Man Cookies (12ct)", store: "Panera Bread", category: "food", price: "14.99" },
      { emoji: "🪞", name: "Magic Mirror - Wall Mount", store: "IKEA", category: "retail", price: "29.99" },
    ],
    hint: "Get out of my swamp!",
  },
];

export function getRandomPuzzles(count: number): MoviePuzzle[] {
  const shuffled = [...puzzles].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
