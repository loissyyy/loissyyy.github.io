import React, { Component } from "react";

class Stuff extends Component {
  render() {
    return (
      <div>
        <h2>Our Collections</h2>
        <p>Discover the epitome of luxury with our curated selection of iconic perfumes, designed to enhance your presence and leave a lasting impression:</p>
        <div className="perfume-collection">
          <div className="perfume-item">
            <div className="perfume-description">
              <h2>Dior Homme.</h2>
              <p><strong>Type:</strong> Homme</p>
              <p>A sophisticated, masculine fragrance with notes of iris, vetiver, and leather. Perfect for the modern gentleman.</p>
            </div>
            <img src="/images/dior_homme1.jpg" alt="Dior Homme" />
            
          </div>
          
          <div className="perfume-item">
            <div className="perfume-description">
              <h2>Chanel No. 5</h2>
              <p><strong>Type:</strong> Femme</p>
              <p>An iconic, timeless fragrance featuring a blend of florals and aldehydes, epitomizing elegance and femininity.</p>
            </div>
            <img src="/images/chanel.jpg" alt="Chanel No. 5" />
            
          </div>
          
          <div className="perfume-item">
            <div className="perfume-description">
              <h2>Gucci Guilty</h2>
              <p><strong>Type:</strong> Homme</p>
              <p>A bold, provocative scent with notes of lemon, lavender, and patchouli. Ideal for the daring and confident man.</p>
            </div>
            <img src="/images/gucci.jpg" alt="Gucci Guilty" />
          </div>
          
          <div className="perfume-item">
            <div className="perfume-description">
              <h2>Lancôme La Vie Est Belle</h2>
              <p><strong>Type:</strong> Femme</p>
              <p>A luminous fragrance that blends sweet iris, praline, and vanilla, representing the beauty of life and happiness.</p>
            </div>
            <img src="/images/la_vie.jpg" alt="Lancôme La Vie Est Belle" />
          </div>
          
          <div className="perfume-item">
            <div className="perfume-description">
              <h2>YSL Black Opium</h2>
              <p><strong>Type:</strong> Femme</p>
              <p>A captivating and mysterious fragrance with notes of coffee, vanilla, and white flowers, perfect for the modern, empowered woman.</p>
            </div>
            <img src="/images/black_opium.jpg" alt="YSL Black Opium" />
          </div>
        </div>
      </div>
    );
  }
}

export default Stuff;
