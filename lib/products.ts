// Add a product by adding an object to this array. The cards update automatically.
export type Product = {
  slug: string;
  name: string;
  image: string; // file in /public/images – replace with your real photo
  imageAlt: string;
  description: string;
  uses: string[];
  buyers: string;
};

export const products: Product[] = [
  {
    slug: "corn-grits",
    name: "Corn Grits",
    image: "/images/corn-grits.jpg",
    imageAlt: "Woman lifting freshly milled yellow maize meal from a large basin",
    description:
      "Milled from selected maize and screened for consistent grain size and low impurities.",
    uses: ["Breakfast cereals and snacks", "Brewing", "Flour and porridge blends"],
    buyers: "Food manufacturers, brewers, wholesalers",
  },
  {
    slug: "maize-bran",
    name: "Maize Bran",
    image: "/images/maize-bran.jpg",
    imageAlt: "Workers processing a large pile of grain beside stacked sacks",
    description:
      "A by-product of our maize processing, dry and clean, suitable as a feed ingredient.",
    uses: ["Poultry and livestock feed", "Fish feed", "Feed mill blending"],
    buyers: "Feed mills, poultry and livestock farms",
  },
  {
    slug: "fresh-white-yam",
    name: "Fresh White Yam",
    image: "/images/white-yam.jpg",
    imageAlt: "Yam tubers in a wheelbarrow at an outdoor market",
    description:
      "Export-grade Nigerian white yam, sourced from farms, hand-graded, cured and packed in ventilated cartons.",
    uses: ["Retail and grocery supply", "Restaurants and catering", "Ethnic food markets"],
    buyers: "International importers, grocers, distributors",
  },
];
