export const categoryGroups = [
  {
    label: "🏠 Apartment",
    options: [
      "🛋️ Furniture",
      "🧊 Home Appliances",
      "🍽️ Kitchenware",
      "📦 Storage & Organization",
      "💡 Lighting & Decor",
      "🪴 Garden & Outdoor",
      "🚿 Bathroom Items",
      "🧼 Cleaning Supplies",
      "🛠️ Tools & Repairs",
    ],
  },
  {
    label: "🎓 Studies",
    options: [
      "💻 Laptop & Tech",
      "📱 Tablet & Accessories",
      "🎒 Backpacks",
      "📚 Study Materials",
      "📖 Academic Books",
      "🖨️ Printer & Ink",
      "🎧 Headphones",
    ],
  },
  {
    label: "🙋 For Yourself",
    options: [
      "👔 Men's Clothing",
      "👗 Women's Clothing",
      "👟 Shoes",
      "🧢 Accessories",
      "🧳 Travel Bags",
      "🧴 Personal Care",
    ],
  },
  {
    label: "🎮 Fun & Free Time",
    options: [
      "📚 Books",
      "🎲 Board Games",
      "🎮 Gaming",
      "🎸 Musical Instruments",
      "🎨 DIY & Hobbies",
      "📺 TV & Media Devices",
      "📱 Phones & Gadgets",
      "🏀 Sports Gear",
      "🏕️ Camping & Travel",
      "🐾 Pet Supplies",
    ],
  },
];

export const categoryOptions = categoryGroups.flatMap(group => group.options);


