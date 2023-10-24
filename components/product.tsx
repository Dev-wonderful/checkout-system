import React, { useState } from 'react';
import { Product, Quantity } from '@/components/utils/types'
import './styles/product.css';

type quantityFunc = (itemQuantity: Quantity) => void;
type addProductCartFunc = (product: Product) => void;
interface ProductPropType {
  product: Product[];
  onAddToCart: addProductCartFunc;
  allQuantity: Quantity[];
  onQtyIncrement: quantityFunc;
  onQtyDecrement: quantityFunc;
}

const Products: React.FC<ProductPropType> = (prop) => {

  const { product, onAddToCart, allQuantity, onQtyIncrement, onQtyDecrement } = prop

  const loop = (productId: number): Quantity => {
    const listOfId = allQuantity.filter(element => element.id === productId)
    // const foundId = listOfIds.find(elementId => elementId === productId)
    // const main: Quantity[] = allQuantity.map(element => {
    //   if (element.id === foundId) {
    //     return element 
    //   }
    // })
    // const foundMain = main.find(element => element)
    return listOfId[0];
  }

  type display = {
    product: Product,
    productQuantity: Quantity,
    onAddToCart: addProductCartFunc
  }

  const Displayproducts = ({product, productQuantity, onAddToCart}: display) => {

    const [modal, setModal] = useState<boolean>();
    // const [quantity, setQuantity] = useState<Quantity>();

    const modalTrue = () => {
      setModal(true);
      // setQuantity(productQuantity.value)
      console.log(modal + 'here')
    }
    const modalFalse = () => {
      setModal(false);
      console.log(modal)
    }
    const increment = () => {
      onQtyIncrement(productQuantity)
    }
    const decrement = () => {
      onQtyDecrement(productQuantity)
    }
    const { title, price, description, image } = product
    return (
      <React.Fragment>
          <div className='products' >
            <div className='p-image-container' onClick={() => modalTrue()}>
              <img className='p-image' src={image} alt={title}/>
            </div>
            <div className='p-item-container'>
              <div className='p-title '>
                <p>{title}</p>
              </div>
              <div className='p-price'>
                <p>${price}</p>
              </div>
            </div>
            {/* product modal */}
            <div className={modal ? 'prod-modal-container-open': 'prod-modal-container'}>
              <div className="prod-modal">
                <div className='modal-image-container'>
                  <img className='modal-image' src={image} alt={title}/>
                  <div className='modal-title '>
                    <p>{title}</p>
                  </div>
                </div>
                <div className='modal-item-container'>
                  <div className="prod-description">{description}</div>
                  <div className='modal-price'>
                    <p>${price}</p>
                    <div className='modal-qty '>
                      <button className='modal-decrement' onClick={decrement}>-</button>
                      <span className='modal-qty-display'>{productQuantity.value}</span>
                      <button className='modal-increment' onClick={increment}>+</button>
                    </div>
                  </div>
                  <div className='modal-btn-div'>
                    <button className='modal-btn ' onClick={() => {
                      onAddToCart(product);
                    }}>Add To Cart</button>
                    <button className='modal-close-btn ' onClick={() => modalFalse()}>Close</button>
                  </div>
                </div> 
              </div>
            </div>
          </div>
          {/* <Description /> */}
      </React.Fragment>
    );
  };
  return (
    <div className='p-container p-container-flex '>
      {product.map((items) => 
        <Displayproducts  key={items.id} 
                          product={items} 
                          onAddToCart={onAddToCart} 
                          productQuantity={loop(items.id)}
        />
      )}
    </div>
  )
}

export default Products
