import chihuahua from "../images/dogs/chihuahua.jpg"
import goldenRetriever from "../images/dogs/golden-retriever.jpg"
import husky from "../images/dogs/husky.jpg"
import pug from "../images/dogs/pug.jpg"
import dachshund from "../images/dogs/dachshund.jpg"
import bulldog from "../images/dogs/bulldog.jpg"
import germanShepard from "../images/dogs/german-shepard.jpg"
import frenchBulldog from "../images/dogs/french-bulldog.jpg"
import paw from "../images/dogs/paw.png"
import drumstick from "../images/meat/drumstick.jpg"
import steak from "../images/meat/steak.jpg"
import leg from "../images/meat/leg.jpg"
import legNugget from "../images/meat/leg-nugget.jpg"
import salami from "../images/meat/salami.jpg"
import sausage from "../images/meat/sausage.jpg"
import hotdog from "../images/meat/hot-dog.jpg"
import barkon from "../images/meat/barkon.jpg"
import patty from "../images/meat/patty.jpg"
import shortRib from "../images/meat/short-rib.jpg"
import roast from "../images/meat/roast.jpg"

const createProduct = (id, dog, dogImage, meat, meatImage, quantity, label, price) => ({
  id,
  dog,
  dogImage,
  meat,
  meatImage,
  label,
  quantity,
  price
})

export default [
  createProduct(1, "Chihuahua", chihuahua, "Drumstick", drumstick, "x6", "Free-range", 4.62),
  createProduct(2, "Alaskan Golden Retriever", goldenRetriever, "T-bone steak", steak, "x2", "Wild-caught", 24.82),
  createProduct(5, "Dog meat", paw, "Salami", salami, "x1", "Mixed", 7.57),
  createProduct(3, "Husky", husky, "Leg", leg, "x1", "Wild-caught", 61.99),
  createProduct(4, "Pug", pug, "Paw-nugget", legNugget, "x16", "Grass-fed", 10.82),
  createProduct(6, "Sausage-dog", dachshund, "Sausage", sausage, "x6", "The original", 7.92),
  createProduct(7, "Dog meat", paw, "Hot-dog sauage", hotdog, "x10", "Mixed", 3.98),
  createProduct(8, "Bulldog", bulldog, "Barkon", barkon, "x12", "Cage-free", 7.98),
  createProduct(9, "German Shepard", germanShepard, "Short rib", shortRib, "x4", "Wild-caught", 10.15),
  createProduct(10, "French Bulldog", frenchBulldog, "Roast", roast, "x1", "Ethically raised", 14.90),
  createProduct(11, "Ground dog", paw , "Patty", patty, "x4", "Beef-fed", 7.24),
]
