import React, { useState } from 'react';
import './styles/product.css';

const Products = ({ product, onAddToCart, quant, onQtyUpdate, filter}) => {


    const loop = (def) => {
        const list = quant.map(element => element.id)
        const found = list.find(elementId => elementId === def)
        const main = quant.map(element => {
            if(element.id === found){
                return element 
            }
            return null
        })
        const foundMain = main.find(element => element)

        return foundMain

        
    }
    

        const Displayproducts = ({item, qty, onAddToCart}) => {

            const [modal, setModal] = useState();
            const [quantity, setQuantity] = useState();

            const modalTrue = () => {
                setModal(true);
                setQuantity(qty.value)
                console.log(modal + 'here')
            }

            const modalFalse = () => {
               setModal(false);
               console.log(modal)
            }

            

            // let quantity 
            // console.log(quantity)

            // quantity = qty.value

            // const Value = (x) => {

            //     const [quantity, setQuantity] = useState();
            //     console.log(`value ${quantity}`)
            //     setQuantity(x)

            //     return quantity
            // }
            const increment = () => {
                const amount = quantity + 1
                setQuantity(amount)
                // console.log(amount)
                
                // Value(quantity)
                // return quantity
                // return <Value x={quantity}/>
            }
            const decrement = () => {
                const amount = quantity - 1
                setQuantity(amount)
                // console.log(amount)
                // Value(quantity)

                // return <Value x={quantity}/>
            }

            // console.log(quantity)
            
            return(
                <>
                    
                    <div className='products' >

                        <div className='p-image-container' onClick={() => modalTrue()}>


                            <img className='p-image' src={item.image} alt={item.title}/>

                            

                        </div>

                        <div className='p-item-container'>
                            
                            <div className='p-title '><p>{item.title}</p></div>
                           
                            <div className='p-price'>
                                <p>${item.price}</p>

                                
                            </div>
                            
                            

                        </div>



                        {/* product modal */}

                        

                            <div className={modal ? 'prod-modal-container-open': 'prod-modal-container'}>

                                <div className="prod-modal">
                                    
                                    <div className='modal-image-container'>
                                        <img className='modal-image' src={item.image} alt={item.title}/>
                                        <div className='modal-title '><p>{item.title}</p></div>

                                    </div>

                                    <div className='modal-item-container'>

                                        <div className="prod-description">{item.description}</div>
                                    
                                        <div className='modal-price'>
                                            <p>${item.price}</p>

                                            <div className='modal-qty '>
                                                <button className='modal-decrement' onClick={decrement}>-</button>
                                                <span className='modal-qty-display'>{quantity}</span>
                                                <button className='modal-increment' onClick={increment}>+</button>
                                            </div>

                                        </div>
                                        
                                        <div className='modal-btn-div'>
                                            <button className='modal-btn ' onClick={() => {
                                                onAddToCart(item, qty);
                                                onQtyUpdate(qty, quantity)
                                            } }>Add To Cart</button>
                                            <button className='modal-close-btn ' onClick={() => modalFalse()}>Close</button>
                                        </div>

                                    </div> 

                                </div>

                            

                        </div>


                    </div>


                    

                    {/* <Description /> */}
                    
                </>
            );
        };

        
         


        return(
            <div className='p-container p-container-flex '>

                

                {product.map((items) => <Displayproducts key={items.id} item={items} onAddToCart={onAddToCart} qty={loop(items.id)}/>
                    
                )}
                    
                
            </div>
        )




}


export default Products














