import React from "react";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      available: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
