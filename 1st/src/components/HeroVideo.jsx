import "../styles/HeroVedio.css";

function HeroVideo() {
  return (
  <div className="video-section">

     
      <div className="overlay-text">
        <h2>FASHION THAT MOVES WITH YOU</h2>
        <p>Discover streetwear, performance wear & lifestyle essentials</p>
      </div>

     
      <div className="video-row">

        <div className="video-box">
          <video autoPlay loop muted playsInline>
            <source src="/video1.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="video-box">
          <video autoPlay loop muted playsInline>
            <source src="/video2.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="video-box">
          <video autoPlay loop muted playsInline>
            <source src="/video3.mp4" type="video/mp4" />
          </video>
        </div>

      </div>

    </div>
  );
}

export default HeroVideo;