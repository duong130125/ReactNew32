import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../store/reducers/cartReducer";
import { ProductsCart } from "../interface";

export default function ShoppingCart() {
  const getData: any = useSelector((state: any) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div className="app">
      <div className="product-list">
        <h2>List Product</h2>
        {getData.map((product: ProductsCart) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.Content}</p>
              <p>Total: {product.stock}</p>
            </div>
            <div className="product-action">
              <input type="number" value={product.quantity} min={1}></input>
              <p>Price: ${product.price}</p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
      <div className="shopping-cart">
        <h2>Shopping cart</h2>
        {getData.map((item: ProductsCart) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
              <div className="quantity-control">
                <input type="number" value={item.quantity} />
                <span>Quantity: {item.quantity}</span>
                <button className="update-btn">Update</button>
              </div>
              <button className="remove-btn">Remove</button>
            </div>
          </div>
        ))}
        <div className="subtotal">
          <p>Subtotal: $</p>
        </div>
        <div className="update-message">Update product successfully</div>
      </div>
    </div>
  );
}
