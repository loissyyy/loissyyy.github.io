import React, { Component } from "react";

class Stuff extends Component {
  render() {
    return (
      <div>
        <h2>Our Collections</h2>
        <p>Explore our diverse range of perfumes, each one designed to cater to your unique tastes and preferences:</p>
        <ol>
          <li><strong>Exotic Woods:</strong> A rich blend of sandalwood and cedar, perfect for a bold, sophisticated presence.</li>
          <li><strong>Floral Symphony:</strong> A bouquet of jasmine, rose, and lily, capturing the essence of romance and elegance.</li>
          <li><strong>Fresh Citrus:</strong> A vibrant mix of lemon, bergamot, and grapefruit, offering a refreshing burst of energy.</li>
          <li><strong>Oriental Spice:</strong> A warm and spicy blend of vanilla, cinnamon, and amber, ideal for an alluring aura.</li>
          <li><strong>Aqua Marine:</strong> A cool, aquatic fragrance that evokes the serenity of the ocean.</li>
        </ol>
        <img src="images/img1.jpg" alt="Perfume Bottles" />
      </div>
    );
  }
}

export default Stuff;
