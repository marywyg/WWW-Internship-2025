"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var Category;
(function (Category) {
    Category["FRAGRANCES"] = "fragrances";
    Category["BEAUTY"] = "beauty";
    Category["GROCERIES"] = "groceries";
    Category["FURNITURE"] = "furniture";
    Category["SMARTPHONES"] = "smartphones";
    Category["LAPTOPS"] = "laptops";
    Category["TABLETS"] = "tablets";
})(Category || (Category = {}));
var Tag;
(function (Tag) {
    Tag["BEAUTY"] = "beauty";
    Tag["MASCARA"] = "mascara";
    Tag["EYESHADOW"] = "eyeshadow";
    Tag["FACE_POWDER"] = "face powder";
    Tag["LIPSTICK"] = "lipstick";
    Tag["NAIL_POLISH"] = "nail polish";
    Tag["PERFUMES"] = "perfumes";
    Tag["FRAGRANCES"] = "fragrances";
    Tag["FURNITURE"] = "furniture";
    Tag["BEDS"] = "beds";
    Tag["SOFAS"] = "sofas";
    Tag["BEDSIDE_TABLES"] = "bedside tables";
    Tag["OFFICE_CHAIRS"] = "office chairs";
    Tag["BATHROOM"] = "bathroom";
    Tag["FRUITS"] = "fruits";
    Tag["MEAT"] = "meat";
    Tag["PET_SUPPLIES"] = "pet supplies";
    Tag["CAT_FOOD"] = "cat food";
    Tag["COOKING_ESSENTIALS"] = "cooking essentials";
    Tag["VEGETABLES"] = "vegetables";
    Tag["DOG_FOOD"] = "dog food";
    Tag["DIARY"] = "diary";
    Tag["CONDIMENTS"] = "condiments";
    Tag["DESSERTS"] = "desserts";
    Tag["BEVERAGES"] = "beverages";
    Tag["LAMPS"] = "lamps";
})(Tag || (Tag = {}));
var url = "https://dummyjson.com/products?limit=194";
/*
1. Use fetch (GET) for getting array of products.
- Create array of products with brand being Apple or Huawei x
- Get amount of products with price bigger than 1000 x
- Get average rating of Samsung laptops x
- Get array of products from category fragrances where every product is represented as a string formatted like that "Name, description" x
- Find all products containing at least 1 WEBP image x
*/
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url);
            const json = yield response.json();
            const products = json.products;
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
        }
        catch (error) {
            console.error("Error fetching data:", error);
        }
    });
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
function postAndPatchData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
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
            const productJson = yield response.json();
            console.log("New product:", productJson);
            const productId = productJson.id;
            const newAverage = (productJson.rating * 20 + 5) / 21;
            console.log("New average rating:", newAverage);
            console.log("Updated product:", productJson);
            const patchUrl = `https://dummyjson.com/products/${productId}`;
            const patchResponse = yield fetch(patchUrl, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ rating: newAverage })
            });
            const patched = yield patchResponse.json();
        }
        catch (error) {
            console.error("Error posting data:", error);
        }
    });
}
postAndPatchData();
