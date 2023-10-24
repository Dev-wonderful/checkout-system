import { FunctionComponent } from 'react';
import { CartItemPropType } from '@/components/utils/types'
import './styles/sidebar.css'




const CartItem: FunctionComponent<CartItemPropType> = (props) => {

  const item = props.item;
  return (
    <div className='cart-container'>
      <div className='cart-image-container'>
        <img id='cart-image' src={item.image} alt={item.title}/>
      </div>
      <div className='other-container'>
        <div className='category-div'><p>Category: {item.category}</p></div>
        <div className='bottom-container'>
          <p className='cart-price'>${item.price}</p>
          <button className='remove-btn' onClick={() => props.onRemove(item, props.itemQuantity)}>Remove</button>
          <div className='qty'>
            <button className='decrement' onClick={() => props.onCartQtyDecrement(props.itemQuantity)}>-</button>
            <span className='qty-display'>{props.itemQuantity.value}</span>
            <button className='increment' onClick={() => props.onCartQtyIncrement(props.itemQuantity)}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default CartItem;