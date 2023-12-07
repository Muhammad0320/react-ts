import { addItems, removeItems, type CartItems } from "../../store/cartSlice";
import { useCartDispatch, useCartSelector } from "../../store/hooks";

export default function CartItems() {
  const cartItems = useCartSelector((state) => state.cart.items);

  const dispatch = useCartDispatch();

  const formattedTotalPrice = cartItems
    .reduce((acc, sum) => acc + sum.price * sum.quantity, 0)
    ?.toFixed(2);

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeItems(id));
  };

  const handleAddToCart = (items: CartItems) => {
    dispatch(addItems(items));
  };

  return (
    <div id="cart">
      <p>No items in cart!</p>

      <ul id="cart-items">
        {cartItems.map((item) => {
          const formattedPrice = `$${item.price.toFixed(2)}`;

          return (
            <li key={item.id}>
              <div>
                <span>{item.title}</span>
                <span> ({formattedPrice})</span>
              </div>
              <div className="cart-item-actions">
                <button onClick={() => handleRemoveFromCart(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleAddToCart(item)}>+</button>
              </div>
            </li>
          );
        })}
      </ul>

      <p id="cart-total-price">
        Cart Total: <strong>${formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
