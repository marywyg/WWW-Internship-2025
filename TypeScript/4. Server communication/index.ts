// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
/* 
  Please check https://dummyjson.com/products

Create type Product based on data returned in /products endpoint.
Create all necessary interfaces and enums for Product.
For example, category should be an enum.

*/
interface Product {
  id: number,
  title: string,
  description: string,
  category: Category,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  tags: Tag[],
  brand: string,
  sku: string,
  weight: number,
  dimensions: Dimensions,
  warrantyInformation: string,
  shippingInformation: string,
  availabilityStatus: string,
  reviews: Review[],
  returnPolicy: string,
  minimumOrderQuantity: number,
  meta: Meta,
  images: string[],
  thumbnail: string
}
enum Category {
  FRAGRANCES = "fragrances",
  BEAUTY = "beauty",
  GROCERIES = "groceries",
  FURNITURE = "furniture",
  SMARTPHONES = "smartphones",
  LAPTOPS = "laptops",
  TABLETS = "tablets"
}
interface Dimensions{
  width: number, 
  height: number, 
  depth: number
}
interface Review{
  rating: number, 
  comment: string, 
  date: string, 
  reviewerName: string, 
  reviewerEmail: string
}
interface Meta{
  createdAt: string, 
  updatedAt:string, 
  barcode: string, 
  qrCode: string
}
enum Tag{
  BEAUTY = "beauty",
  MASCARA = "mascara",
  EYESHADOW = "eyeshadow",
  FACE_POWDER = "face powder",
  LIPSTICK = "lipstick",
  NAIL_POLISH = "nail polish",
  PERFUMES = "perfumes",
  FRAGRANCES = "fragrances",
  FURNITURE = "furniture",
  BEDS = "beds",
  SOFAS = "sofas",
  BEDSIDE_TABLES = "bedside tables",
  OFFICE_CHAIRS = "office chairs",
  BATHROOM = "bathroom",
  FRUITS = "fruits",
  MEAT = "meat",
  PET_SUPPLIES = "pet supplies",
  CAT_FOOD = "cat food",
  COOKING_ESSENTIALS = "cooking essentials",
  VEGETABLES = "vegetables",
  DOG_FOOD = "dog food",
  DIARY = "diary",
  CONDIMENTS = "condiments",
  DESSERTS = "desserts",
  BEVERAGES = "beverages",
  LAMPS = "lamps"
}
var url = "https://dummyjson.com/products?limit=194";
/*
1. Use fetch (GET) for getting array of products.
- Create array of products with brand being Apple or Huawei x
- Get amount of products with price bigger than 1000 x
- Get average rating of Samsung laptops x
- Get array of products from category fragrances where every product is represented as a string formatted like that "Name, description" x
- Find all products containing at least 1 WEBP image x
*/
async function getData() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    const products: Product[] = json.products;
    console.log("Products:", products);
    //array of products with brand being Apple or Huawei
    const appleOrHuawei = products.filter((p) => p.brand === "Apple" || p.brand === "Huawei");
    console.log("Apple or Huawei:", appleOrHuawei);
    //amount of products with price bigger than 1000
    const expensiveCount = products.filter((p) => p.price > 1000).length;
    console.log("Products with price>1000:", expensiveCount);
    //average rating of Samsung laptops 
    const samsungLaptops = products.filter((p) => p.brand === "Samsung" && p.category === Category.LAPTOPS);
    const samsungLaptopsRating = samsungLaptops.reduce((acc, p) => acc + p.rating, 0) / samsungLaptops.length;
    console.log("Samsung laptops rating:", samsungLaptopsRating);
    //products from category fragrances where every product is represented as a string formatted like that "Name, description"
    const fragrancesList = products.filter((p) => p.category === Category.FRAGRANCES).map((p) => `${p.title}, ${p.description}`);
    console.log("Fragrances:", fragrancesList);
    //all products containing at least 1 WEBP image
    const webpProducts = products.filter((p) => p.images.some((img) => img.endsWith(".webp")));
    console.log("Products with WEBP images:", webpProducts);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
getData();
/*
2. Use fetch (POST) to add new product. Create what you want ;)
3. Use fetch (PATCH) to edit created product. Change current rating of this product.
Let's say you give it rating 5. The new rating should be a new average with precondition
that previously it was rated by 20 users.

(one function for convenience)
*/
url = "https://dummyjson.com/products/add";
async function postAndPatchData() {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: "Monkey lamp",
        description: "Amazing lamp with monkey design, perfect for your living room",
        category: Category.FURNITURE,
        price: 100000,
        discountPercentage: 10,
        rating: 2.4,
        stock: 1,
        tags: [Tag.LAMPS, Tag.FURNITURE],
        brand: "9design",
        sku: "123456",
        weight: 100,
        dimensions: { width: 50, height: 50, depth: 50 },
        warrantyInformation: "0 year warranty",
        shippingInformation: "Free shipping",
        availabilityStatus: "Available",
        reviews: [],
        returnPolicy: "3 days return policy",
        minimumOrderQuantity: 1,
        meta: { createdAt: "2024-05-23T08:56:21.626Z", updatedAt: "2024-05-23T08:56:21.626Z", barcode: "123456", qrCode: "123456" },
        images: ["https://9design.pl/eng_pl_Seletti-The-Monkey-Lamp-Standing-black-23046_4.jpg"],
        thumbnail: "https://9design.pl/eng_pl_Seletti-The-Monkey-Lamp-Standing-black-23046_4.jpg"
      })
    });
    const productJson = await response.json();
    console.log("New product:", productJson);
    const productId = productJson.id;
    const newAverage = (productJson.rating*20 + 5) / 21;
    console.log("New average rating:", newAverage);
    
    

    const patchUrl = `https://dummyjson.com/products/${productId}`;
    const patchResponse = await fetch(patchUrl, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rating: newAverage })
    });

    const patched = await patchResponse.json();
    console.log("Updated product:", patched);
  } catch (error) {
    console.error("Error posting data:", error);
  }
}
postAndPatchData();
