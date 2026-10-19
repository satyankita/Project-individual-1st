import React, { useEffect, useState } from "react";

import {
  Heart,
  ShoppingBag,
  Star,
  Eye
} from "lucide-react";

import "../styles/MensAccessories.css";

function MensAccessories({ search }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch("https://dummyjson.com/products/category/mens-watches")
      .then((res) => res.json())
      .then((data) => {

        setProducts(data.products);

      });

  }, []);

  const filteredProducts = products.filter((item) =>
  item.title.toLowerCase().includes(search.toLowerCase())
);

  return (

<div className="products-grid">

  {filteredProducts.length > 0 ? (

    filteredProducts.map((item) => (

      <div className="product-card" key={item.id}>

        {/* IMAGE */}

        <div className="image-section">

          <img
            src={item.thumbnail}
            alt={item.title}
          />

          <div className="wishlist-icon">
            <Heart size={20} />
          </div>

        </div>

        {/* CARD CONTENT */}

        <div className="card-content">

          <p className="category">
            {item.category}
          </p>

          <h3>
            {item.title}
          </h3>

          {/* RATING */}

          <div className="rating">

            <Star
              size={18}
              fill="gold"
              color="gold"
            />

            <span>
              {item.rating}
            </span>

          </div>

          {/* PRICE */}

          <div className="price-section">

            <p className="price">
              ₹ {item.price}
            </p>

            <p className="old-price">
              ₹ {item.price + 2000}
            </p>

          </div>

          {/* BUTTONS */}

          <div className="buttons">

            <button className="cart-btn">

              <ShoppingBag size={18} />

              Add to Cart

            </button>

            <button className="view-btn">

              <Eye size={18} />

            </button>

          </div>

        </div>

      </div>

    ))

  ) : (

    search && (

      <h2 className="not-found">
        Product Not Available
      </h2>

    )

  )}

</div>

  );
}

export default MensAccessories;