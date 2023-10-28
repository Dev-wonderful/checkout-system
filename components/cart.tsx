import React, { FunctionComponent } from 'react';
// import { AiOutlineClose } from "react-icons/ai"
import CartItem from '@/components/cart-item';
import { Product, statelessFunction, CartItemPropType, Quantity } from '@/components/utils/types'
// import { Link } from 'react-router-dom';
import '../styles/sidebar.css'


interface CartPropType extends Partial<CartItemPropType> {
  readonly items: Product[];
  readonly totalPrice: number;
  onClearCart: statelessFunction;
  onCloseSideBar: statelessFunction;
  sideBar: boolean;
  quantityState: Quantity[]
}

const Cart: FunctionComponent<CartPropType> = ({ items, onRemove, onClearCart, totalPrice, sideBar, onCloseSideBar, onCartQtyIncrement, onCartQtyDecrement, quantityState }) => {

  const cartQuantity = (def: number) => {
    const list = quantityState.map(element => element.id)
    const found = list.find(element => element === def)
    const main = quantityState.map(element => {
      if(element.id === found){
          return element
      }
      return null
    })
    const foundMain = main.find(element => element)
    return foundMain
  }

  const handleEmptyCart = () => {
    // const newItems: Product[] = items.map((item: Product) => item)
    if (items.length === 0){
      return (
        <React.Fragment>
          <p className='empty'>I Am Empty, Please Fill Me Up</p>
        </React.Fragment>
      )
    }
  }

  return ( 
    <div className={sideBar ? 'cart active w-screen sm:w-3/5 md:w-3/5 lg:w-2/5'  : 'cart w-0'}>
      <div className='flexx'>
        <button className='clear-btn' onClick={() => onClearCart()}>Clear Cart</button>
        {/* <Link to="#" className='bg-red-600'>
            <AiOutlineClose onClick={onCloseSideBar}/>
        </Link> */}
      </div>
      {handleEmptyCart()}
      {/* I Added "!" as a non-nullish assertion operator, to fix errors from using Partial<CartItemPropType> */}
      {items.map(item => <CartItem key={item.id} 
                                  item={item} 
                                  onRemove={onRemove!} 
                                  onCartQtyIncrement={onCartQtyIncrement!} 
                                  onCartQtyDecrement={onCartQtyDecrement!} 
                                  itemQuantity={cartQuantity(item.id)!} />
      )}
      <div className='total-price'>Total price: ${totalPrice}</div>
    </div>
  );
}
 
export default Cart;