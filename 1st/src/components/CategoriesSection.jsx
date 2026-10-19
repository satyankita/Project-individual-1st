// CategoriesSection.jsx

import "../styles/CategoriesSection.css";

const categories = [

  {
    id: 1,
    title: "Streetwear",
    offer: "40-80% OFF",
    button: "Explore Now",
    img: "/streetwear.jpg",
    link: "http://wtflex.in/collections/all-products"
  },

  {
    id: 2,
    title: "Sneakers",
    offer: "30-70% OFF",
    button: "Shop Now",
    img: "/sneakers.jpg",
    link: "https://www.puma.com/in/en"
  },

  {
    id: 3,
    title: "Watches",
    offer: "50-60% OFF",
    button: "Buy Now",
    img: "/watch.jpg",
    link: "https://www.nykaafashion.com/all-watches/c/7609"
  },

  {
    id: 4,
    title: "Hoodies",
    offer: "20-50% OFF",
    button: "Grab Deal",
    img: "/hoodie.jpg",
    link: "https://www.bonkerscorner.com/collections/hoodies-for-men"
  },

  {
    id: 5,
    title: "Women Fashion",
    offer: "40-75% OFF",
    button: "Shop Now",
    img: "/women.jpg",
    link: "https://www.limeroad.com/"
  },

  {
    id: 6,
    title: "Beauty",
    offer: "30-70% OFF",
    button: "Explore",
    img: "/beauty.jpg",
    link: "https://www.nykaa.com/"
  },

  {
    id: 7,
    title: "Perfumes",
    offer: "25-60% OFF",
    button: "Buy Now",
    img: "/perfume.jpg",
    link: "https://www.sephora.in/"
  },

  {
    id: 8,
    title: "Gym Wear",
    offer: "40-80% OFF",
    button: "Shop Now",
    img: "/gym.jpg",
    link: "https://coitonic.com/"
  },

  {
    id: 9,
    title: "Bags",
    offer: "35-65% OFF",
    button: "Explore",
    img: "/bags.jpg",
    link: "https://baggit.com/"
  },

  {
    id: 10,
    title: "Accessories",
    offer: "50-70% OFF",
    button: "View More",
    img: "/accessories.jpg",
    link: "https://salty.co.in/"
  },

  {
    id: 11,
    title: "Ethnic Wear",
    offer: "40-85% OFF",
    button: "Shop Now",
    img: "/ethnic.jpg",
    link: "https://www.aachho.com/"
  },

  {
    id: 12,
    title: "Sunglasses",
    offer: "30-55% OFF",
    button: "Buy Now",
    img: "/glasses.jpg",
    link: "https://www.lenskart.com/sunglasses.html"
  },

];

function CategoriesSection({ search }) {

  const filteredProducts = categories.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="categories-section">

      <div className="category-top">

        <p className="mini-title">
          TRENDING COLLECTIONS
        </p>

        <h1>
          SHOP BY CATEGORY
        </h1>

        <p className="category-description">
          Explore premium fashion, sneakers,
          beauty products and modern essentials.
        </p>

      </div>

      <div className="categories-grid">

        {filteredProducts.length > 0 ? (

          filteredProducts.map((item) => (

            <div
              className="category-card"
              key={item.id}
            >

              <div className="category-image">

                <img
                  src={item.img}
                  alt={item.title}
                />

                <div className="overlay"></div>

              </div>

              <div className="category-content">

                <h2>
                  {item.title}
                </h2>

                <h3>
                  {item.offer}
                </h3>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >

                  <button>
                    {item.button}
                  </button>

                </a>

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

export default CategoriesSection;