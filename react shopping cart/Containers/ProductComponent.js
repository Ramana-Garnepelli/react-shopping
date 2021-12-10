import Title from "antd/lib/skeleton/Title";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Row, Col, Card } from "antd";

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    const { Meta } = Card;
    return (
      <Col xs={24} sm={24} md={12} lg={6} xl={6}>
        <div key={id}>
        <Link to ={`/product/${id}`}>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={<img alt={title} src={image} />}
          >
            <Meta title={title} description={price} />
          </Card>
      
          </Link>
        </div>
      </Col>
    );
  });
  return <> {renderList}</>;
}

export default ProductComponent;
