import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PageProductDetails(){
   const [product, setProduct] = useState();
   const {id} = useParams();

   useEffect(() => {
      console.log('match:', id)
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => {
          return res.json();
        })
        .then((product) => {
          if (product) {
            setProduct(product);
          }
        });
    }, [id]);
   return (
      <>
         <h2>Details Product</h2>
         <h2>Name Product: <span>{product?.title}</span></h2>
      </>
   )
}