import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../../data/OldCars';
import './oldcardetails.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const Details = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const product = products.find((product) => product.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Navbar/>
        <div className='product-detail-container'>
      <div className='product-image'>
        <img src={product.imageUrl} alt={product.name} className='image' />
      </div>
      <div className='product-info'>
        <h1 className='product-name'>{product.name}</h1>
        <p className='product-description'>{product.description}</p>
        <p className='product-price'>Price: ${product.price}</p>
        <table className='product-specs'>
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Fuel Average</th>
              <th>Condition</th>
            </tr>
          </thead>
          <tbody>
            {product.detail_Discription.map((row, index) => (
              <tr key={index}>
                <td>{row.Company_Name}</td>
                <td>{row.Fuel_Average}</td>
                <td>{row.Condition}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className='contact-info'>Wanna buy this car contact the following number</p>
        <p className='phone-number'>{product.Phone_Num}</p>
        {/* Add more detailed information about the product here */}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Details;