// TraditionalCollection.jsx

import { ChevronDown } from "lucide-react";

import "../styles/TraditionalCollection.css";

const traditionalData = [

  {
    id: 1,
    title: "Women Sarees",
    price: "Starting ₹999",
    video: "saree.mp4",
  },

  {
    id: 2,
    title: "Men Kurta Sets",
    price: "Starting ₹1299",
    video: "menwear.mp4",
  },

  {
    id: 3,
    title: "Kids Ethnic Wear",
    price: "Starting ₹799",
    video: "KidsEthnic.mp4",
  },

  {
    id: 4,
    title: "Wedding Collection",
    price: "Luxury Styles",
    video: "Wedding.mp4",
  },

  {
    id: 5,
    title: "Punjabi Dresses",
    price: "Flat 50% OFF",
    video: "PunjabiDresses.mp4",
  },

  {
    id: 6,
    title: "Traditional Sherwani",
    price: "Premium Styles",
    video: "Sherwani.mp4",
  },

];

function TraditionalCollection({ search }) {

  const filteredProducts = traditionalData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="traditional-section">

   

      <div className="scroll-indicator">

        <ChevronDown size={34} />

        <p>SCROLL</p>

      </div>

  

      <div className="traditional-top">

        <p className="small-text">
          CULTURAL COLLECTION
        </p>

        <h1>
          SHOP TRADITIONAL WEAR
        </h1>

        <p className="description">

          Explore traditional fashion for women,
          men, children and elders with elegant
          cultural styles from every category.

        </p>

      </div>


      <div className="traditional-slider">

        {filteredProducts.length > 0 ? (

          filteredProducts.map((item) => (

            <div
              className="traditional-card"
              key={item.id}
            >

              <div className="traditional-image">

                <video
                  className="traditional-video"
                  src={item.video}
                  muted
                  loop
                  playsInline

                  onMouseEnter={(e) => {
                    e.target.play();
                  }}

                  onMouseLeave={(e) => {
                    e.target.pause();
                    e.target.currentTime = 0;
                  }}
                />

              </div>

              <div className="traditional-content">

                <h2>
                  {item.title}
                </h2>

                <p>
                  {item.price}
                </p>

                <button>
                  Explore
                </button>

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

export default TraditionalCollection;