import { useParams } from 'react-router-dom';
import { productSectionOne, productSectionSecond } from "../Components/Product"
const AboutTech = () => {
 const { id } = useParams();
 const product = findProductById(parseInt(id));
 function findProductById(id) {
  const product = productSectionOne.find(p => p.id === id) ||
   productSectionSecond.find(p => p.id === id);
  return product;
 }

 return (
  <>
   <h1 className="product_title">{product.productName}</h1>
   <p className="product_model">{product.productModel}</p>
   <div className="rating">
    <img  src={product.rating}  alt="stars"/>
  <span className="product_rating">
    4.5 / 5</span>
   </div>
 
   <p className="product_price">$ {product.price}</p>
   <p className="product_description">{product.description}</p>
   {product.storageCapacity || product.condition || product.series ? (
    <div className="details">
     {product.storageCapacity && <h2>Storage: {product.storageCapacity}</h2>}
     {product.condition && <h2 className="condition_margin">Condition: {product.condition}</h2>}
     {product.series && <h2>Series: {product.series}</h2>}
    </div>
   ) : null}

  </>
 )
}

export default AboutTech

 