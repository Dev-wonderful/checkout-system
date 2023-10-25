import React from 'react';

interface HeroProps {
  filter: (event: string) => void;
}

const Hero: React.FC<HeroProps> = (props) => {
  const eventHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const element = event.target as HTMLElement
    return element.innerText
  }
  return ( 
    <div className="hero">
      <div className="hero-container">
        <h1>Journey To Commercial Comfort</h1>
        <p>Shop with ease</p>
      </div>

      <div className='action'>
        <button onClick={(e) => props.filter(eventHandler(e))}>All Categories</button>
        <button onClick={(e) => props.filter(eventHandler(e))}>Electronics</button>
        <button onClick={(e) => props.filter(eventHandler(e))}>Jewelery</button>
        <button onClick={(e) => props.filter(eventHandler(e))}>Women Clothing</button>
        <button onClick={(e) => props.filter(eventHandler(e))}>Men Clothing</button>
      </div>
    </div>
  );
}
 
export default Hero;