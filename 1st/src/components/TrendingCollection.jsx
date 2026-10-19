import "../styles/TrendingCollection.css";

const products = [

  { id: 1, name: "Urban Jacket", price: "₹2,499", tag: "New", img: "/One1.jpg" },
  { id: 2, name: "Street Hoodie", price: "₹1,999", tag: "Trending", img: "/two.jpg" },
  { id: 3, name: "Oversized Tee", price: "₹999", tag: "Hot", img: "/three.jpg" },
  { id: 4, name: "Cargo Pants", price: "₹2,299", tag: "Sale", img: "/four.jpg" },
  { id: 5, name: "Denim Jacket", price: "₹2,799", tag: "New", img: "/img5.jpg" },
  { id: 6, name: "Summer Shirt", price: "₹1,299", tag: "Hot", img: "/img6.jpg" },
  { id: 7, name: "Jogger Pants", price: "₹1,499", tag: "Trending", img: "/img7.jpg" },
  { id: 8, name: "Bomber Jacket", price: "₹3,199", tag: "New", img: "/img8.jpg" },
  { id: 9, name: "Casual Tee", price: "₹799", tag: "Sale", img: "/imp9.jpg" },
  { id: 10, name: "Street Jeans", price: "₹2,199", tag: "Hot", img: "/imp10.jpg" },
  { id: 11, name: "Hooded Sweatshirt", price: "₹1,899", tag: "Trending", img: "/imp11.jpg" },
  { id: 12, name: "Athletic Shorts", price: "₹999", tag: "New", img: "/img12.jpg" },
  { id: 13, name: "Winter Coat", price: "₹4,999", tag: "Premium", img: "/img13.jpg" },
  { id: 14, name: "Graphic Tee", price: "₹899", tag: "Hot", img: "/img14.jpg" },
  { id: 15, name: "Relaxed Fit Pants", price: "₹1,599", tag: "Trending", img: "/one.jpg" },
  { id: 16, name: "Leather Jacket", price: "₹5,499", tag: "New", img: "/img16.jpg" },
  { id: 17, name: "Basic Hoodie", price: "₹1,299", tag: "Sale", img: "/img17.jpg" },
  { id: 18, name: "Slim Fit Jeans", price: "₹2,399", tag: "Hot", img: "/img18.jpg" },
  { id: 19, name: "Sport Tee", price: "₹999", tag: "Trending", img: "/img19.jpg" },
  { id: 20, name: "Streetwear Set", price: "₹3,999", tag: "Premium", img: "/img20.jpg" },

];

function TrendingCollection({ search }) {

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="trending-section">

     

      <div className="top-content">

        <h2 className="heading">
          TRENDING FASHION COLLECTION
        </h2>

        <p className="sub-heading">

          Discover the latest streetwear,
          premium essentials and fashion trends.

        </p>

      </div>

   

      <div className="scroll-container">

        {filteredProducts.length > 0 ? (

          filteredProducts.map((item) => (

            <div className="card" key={item.id}>

              <div className="image-container">

                <span className="tag">
                  {item.tag}
                </span>

                <img
                  src={item.img}
                  alt={item.name}
                />

              </div>

              <div className="card-content">

                <h3>
                  {item.name}
                </h3>

                <p className="price">
                  {item.price}
                </p>

                <div className="buttons">

                  <button className="cart-btn">
                    Add to Cart
                  </button>

                  <button className="wish-btn">
                    ♡
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

    </div>

  );
}

export default TrendingCollection;