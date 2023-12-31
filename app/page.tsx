"use client";

import Image from 'next/image'
import Navbar from '@/components/nav'
import Products from '@/components/product';
import Cart from '@/components/cart';
import React, { useState } from 'react';
import Modal from '@/components/modal';
import Footer from '@/components/footer'
import Hero from '@/components/hero';
import { Product, Quantity } from '@/components/utils/types'
import "../styles/page.css"


export default function Home() {

  // States of the app
  const [productlist, setProductlist] = useState<Product[]>([{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},{"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,"description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.","category":"men clothing","image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},{"id":3,"title":"Mens Cotton Jacket","price":55.99,"description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.","category":"men clothing","image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"},{"id":4,"title":"Mens Casual Slim Fit","price":15.99,"description":"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.","category":"men clothing","image":"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"},{"id":5,"title":"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet","price":695,"description":"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.","category":"jewelery","image":"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"},{"id":6,"title":"Solid Gold Petite Micropave ","price":168,"description":"Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.","category":"jewelery","image":"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"},{"id":7,"title":"White Gold Plated Princess","price":9.99,"description":"Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...","category":"jewelery","image":"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"},{"id":8,"title":"Pierced Owl Rose Gold Plated Stainless Steel Double","price":10.99,"description":"Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel","category":"jewelery","image":"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"},{"id":9,"title":"WD 2TB Elements Portable External Hard Drive - USB 3.0 ","price":64,"description":"USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system","category":"electronics","image":"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"},{"id":10,"title":"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s","price":109,"description":"Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)","category":"electronics","image":"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"},{"id":11,"title":"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5","price":109,"description":"3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.","category":"electronics","image":"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"},{"id":12,"title":"WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive","price":114,"description":"Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty","category":"electronics","image":"https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"},{"id":13,"title":"Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin","price":599,"description":"21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz","category":"electronics","image":"https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"},{"id":14,"title":"Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ","price":999.99,"description":"49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag","category":"electronics","image":"https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"},{"id":15,"title":"BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats","price":56.99,"description":"Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates","category":"women clothing","image":"https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"},{"id":16,"title":"Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket","price":29.95,"description":"100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON","category":"women clothing","image":"https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"},{"id":17,"title":"Rain Jacket Women Windbreaker Striped Climbing Raincoats","price":39.99,"description":"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.","category":"women clothing","image":"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"},{"id":18,"title":"MBJ Women's Solid Short Sleeve Boat Neck V ","price":9.85,"description":"95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem","category":"women clothing","image":"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"},{"id":19,"title":"Opna Women's Short Sleeve Moisture","price":7.95,"description":"100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort","category":"women clothing","image":"https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"},{"id":20,"title":"DANVOUY Womens T Shirt Casual Cotton Short","price":12.99,"description":"95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.","category":"women clothing","image":"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"}])
  const [category, setCategory] = useState<Product[]>([])
  const [cartItem, setCartItem] = useState<Product[]>([])
  const [sideBar, setSideBar] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [filter, setFilter] = useState([
    {id: 1, category: "all", status: true},
    {id: 2, category: "jewelery", status: false},
    {id: 3, category: "men clothing", status: false},
    {id: 4, category: "women clothing", status: false},
    {id: 5, category: "electronics", status: false}
  ])
  const [quantity, setQuantity] = useState<Quantity[]>([
    {id: 1, value: 1},
    {id: 2, value: 1},
    {id: 3, value: 1},
    {id: 4, value: 1},
    {id: 5, value: 1},
    {id: 6, value: 1},
    {id: 7, value: 1},
    {id: 8, value: 1},
    {id: 9, value: 1},
    {id: 10, value: 1},
    {id: 11, value: 1},
    {id: 12, value: 1},
    {id: 13, value: 1},
    {id: 14, value: 1},
    {id: 15, value: 1},
    {id: 16, value: 1},
    {id: 17, value: 1},
    {id: 18, value: 1},
    {id: 19, value: 1},
    {id: 20, value: 1}
  ])


  const handleAddToCart = (product: Product): void => {
      
    //const cartItem = [...this.state.cartItem];
    const products  = category
    const index = products.indexOf(product);
    const item = products[index]
    if (cartItem.includes(item)) {
      cartItem.find(element => {
        if(element.id === item.id){
          const repeatedItem = element;
          quantity.find(qty => {
            if(repeatedItem.id === qty.id){
              const quantityState = quantity
              // console.log(qState)
              const qtyIndex = quantityState.indexOf(qty)
              console.log(quantityState[qtyIndex].value)
              quantityState[qtyIndex].value++
              setQuantity(quantityState)
            }
            return;
          })
        }
        return;
      })
      return;
    }
    setCartItem([...cartItem])
    Pop()
  }

    
  const handleRemove =  (item: Product, itemQuantity: Quantity): void => {
    console.log('check')
    const productQty  = quantity;
    console.log(itemQuantity)
    const index = productQty.indexOf(itemQuantity);
    console.log(index)
    productQty[index].value = 1
    setQuantity(productQty);
    const cartItems = cartItem.filter(c => c !== item);
    setCartItem(cartItems);
    console.log('Remove was called ' + item.id);
  }

  const handleClearCart =(): void => {
    setCartItem([])
    console.log(cartItem)
    console.log('clear cart was called');
    const defaultQty: Quantity[] = quantity.map(c => {
      c.value = 1;
      return {id: c.id, value: c.value}
    }); //bug
    setQuantity(defaultQty)
  }

  const showSideBar = (): void => {
    setSideBar(true);
    console.log('sidebar was called ' + sideBar)
  }

  const closeSideBar = (): void => {
    setSideBar(false);
    console.log('sidebar was called ' + sideBar);
  }

  const Pop = (): void => {
    setIsOpen(true);
    setTimeout(() => setIsOpen(false), 2500);
  }

  // const handleQuantityUpdate = (item: Quantity, value: number) => {
  //   const quanty = quantity;
  //   const index = quanty.indexOf(item); //bug
  //   quanty[index].value = value; 
  //   setQuantity(quanty)
  // }

  const handleQuantityIncrement = (itemQuantity: Quantity): void => {
    const newQuantity = quantity;
    const index = newQuantity.indexOf(itemQuantity); 
    newQuantity[index].value++;
    setQuantity(newQuantity)
  }

  const handleQuantityDecrement = (itemQuantity: Quantity) => {
    const newQuantity = quantity;
    const index = newQuantity.indexOf(itemQuantity);
    if (newQuantity[index].value === 1) {
      return;
    }
    newQuantity[index].value--;
    setQuantity(newQuantity);
  }

  const handleFilter = (eventResult: String): void => {
    if (eventResult !== 'All Categories' && eventResult) {
      const defaultStatus = filter.map(s => {
        s.status = false;
        return s;
      });
      setFilter(defaultStatus);
      const updateFilter = filter.map(filterItem => {
        const fCap = filterItem.category.toUpperCase();
        const eCap = eventResult.toUpperCase();
        console.log(eCap);
        if (fCap === eCap) {
          filterItem.status = true;
          return filterItem;
          //setFilter([...filter, filterItem]); // potential bug, maybe an endless loop (possibly fixed)
        }
        return filterItem
      })
      setFilter(updateFilter);
      filter.forEach(filterItem => {
        if (filterItem.status) {
          // converting to lowercase for reasons I can't remember
          const categoryLowerCase = filterItem.category.toLowerCase();
          const items = productlist.filter(product => product.category === categoryLowerCase);
          console.log(items);
          // setting category with filtered products based on the category wanted
          setCategory(items);
          console.log(category)
        }
      })
    } else {
      // setting category with all products
      setCategory(productlist);
    }
  }
  // Not used, I can't remember why it was created
  // const handleStatusAll = () => {
  //   const data = filter;
  //   const index = data.findIndex('jewelery')
  //   console.log(index)
  // }

  const getSum = (total: number, num: number): number => {
    return total + num;
  }

  const totalAmount = (): number => {
    const allProductCost = cartItem.map(product => {
      const allProductQuantity = quantity
      for (let eachProductQuantity of allProductQuantity) {
        for (let key in eachProductQuantity) {
          if (key === 'id' && eachProductQuantity[key] === product.id) {
            const productCost = product.price * eachProductQuantity.value
            return productCost
          }
        }
      }
      return 0
    })
    let totalCost = allProductCost.reduce(getSum, 0);
    // toFixed returns a string so the + is to convert to number
    totalCost = +(totalCost.toFixed(2));  
    return totalCost
  }

  return (
    <React.Fragment>
      <Navbar onShowSideBar={showSideBar} filter={handleFilter} />
      <Modal open={isOpen}>
        This Item has been added to your Cart, Check the top left corner
      </Modal>
      <Cart items={cartItem} 
            sideBar={sideBar} 
            onCloseSideBar={closeSideBar} 
            onRemove={handleRemove} 
            onClearCart={handleClearCart} 
            totalPrice={totalAmount()} 
            onCartQtyIncrement={handleQuantityIncrement} 
            onCartQtyDecrement={handleQuantityDecrement} 
            quantityState={quantity}
      />
      <Hero filter={handleFilter} />
      <Products product={category.length > 0 ? category : productlist}
                onAddToCart={handleAddToCart}
                allQuantity={quantity}
                onQtyIncrement={handleQuantityIncrement}
                onQtyDecrement={handleQuantityDecrement}
      />
      <Footer />
    </React.Fragment>
  )
}
