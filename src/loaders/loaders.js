import { getStoredCart } from "../utilities/fakeDB";

export const productAndCartData = async () => {
  const productData = await fetch("/data/jobs.json");
  const products = await productData.json();
  const savedCart = getStoredCart();
  let cartArray = [];
  for (let id in savedCart) {
    const foundProduct = products?.find(
      (product) => product.id === parseInt(id)
    );
    if (foundProduct) {
      // const quantity = savedCart[id];
      // foundProduct.quantity = quantity;
      cartArray.push(foundProduct);
    }
  }
  return { cartArray, products };
};
