import React,{useEffect} from 'react'
import axios from 'axios'
import { useSelector,useDispatch } from "react-redux";
import {useParams} from'react-router-dom';
import {selectedproduct} from '../redux/actions/productActions'

import { Row, Col, Card } from "antd";


const ProductDetails=()=> {
    const {productId}=useParams();
    const product = useSelector((state) => state.product)
  

    const dispatch = useDispatch();
    console.log(product);
    const { Meta } = Card;
   


    const fetchProductsDetails=async()=>{
        const response=await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err)=>{
            console.log("Err",err);
        });


    dispatch(selectedproduct(response.data));
};
useEffect(() => {
    if(productId&& product!=="") fetchProductsDetails();

}, [productId])
    return (
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
        <div >
       
          <Card
            hoverable
            style={{ width: 300 }}
            cover={<img alt={product.product.image} src={product.product.image} />}
          >
            <Meta  description={product.product.price} />
          </Card>
      
        
        </div>
      </Col>
    )
}

export default ProductDetails
