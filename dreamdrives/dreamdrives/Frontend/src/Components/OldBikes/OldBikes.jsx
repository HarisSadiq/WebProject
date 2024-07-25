import React from 'react';
import products from '../../data/OldBikes';
import './OldBikes.css';
import { useNavigate } from 'react-router-dom';

const OldBikes = () => {
  const navigate = useNavigate();

  const handledetailsClick = (id) => {
    navigate(`/oldbikedetails/${id}`);}
  return (
    <div className='oldbikes'>
      <h1 style={{textAlign:'center'}}>Old Bikes</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name}  className='image'/>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            

            <button onClick={()=>handledetailsClick(product.id)}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OldBikes;