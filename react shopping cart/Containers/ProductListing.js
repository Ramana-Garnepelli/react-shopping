import React,{useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import ProductComponent from './ProductComponent'
import axios from 'axios'
import {setProducts} from '../redux/actions/productActions'

import { Row, Col } from 'antd';


function ProductListing() {
    const products = useSelector(state => state.allProducts.products)
    const dispatch = useDispatch();

    const fetchProducts=async ()=>{
        const response=await axios
        .get("https://fakestoreapi.com/products")
        .catch((err)=>{
            console.log("Err",err);
        });
     dispatch(setProducts(response.data));
        
    };
    useEffect(() => {
        fetchProducts();
        console.log("products:", products);
       
    }, [])
    console.log(products);

    return (
        
        <div>
     <Row gutter xs={24} sm={24} md={16} lg={12} xl={12}>

      <ProductComponent />
      
    </Row>
        </div>
    );
}

export default ProductListing
