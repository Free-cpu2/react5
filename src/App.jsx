import "./App.css";

// Rasmlarni import qilish
import logo from "./assets/logo.svg";
import actor from "./assets/actor.png";
import gamburger from "./assets/gamburger.png";
import sandwich from "./assets/sandwich.png";
import iceCream from "./assets/ice-cream.png";
import juice from "./assets/juice.png";
import vegen from "./assets/vegen.png";
import egg from "./assets/egg.png";
import cooker from "./assets/cooker.png";
import client1 from "./assets/client1.png";
import client2 from "./assets/client2.png";
import client3 from "./assets/client3.png";
import salat from "./assets/salat.png";
import saladLogo from "./assets/salad-logo.png";

function App() {
  return (
    <>
      <header>
        <nav>
          <div className="container">
            <div className="nav">
              <div>
                <img src={logo} alt="Logo" />
              </div>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Menu</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Offers</a>
                </li>
              </ul>
              <div>
                <i className="fa-solid fa-magnifying-glass"></i>
                <button className="btn1" type="button">
                  <i className="fa-solid fa-phone-volume"></i> Contact
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section>
          <div className="container">
            <div className="div2">
              <div className="sect1">
                <div className="section-text">
                  <p>
                    Dive into Delights Of Delectable <span>Food</span>
                  </p>
                </div>
                <div className="div-p">
                  <p>
                    Where Each Plate Weaves a Story of Culinary Mastery and
                    Passionate Craftsmanship
                  </p>
                </div>
                <div className="div-p1">
                  <button className="btn2">Order Now</button>
                  <p>Watch Video</p>
                </div>
              </div>
              <div className="img-div">
                <img src={actor} alt="Actor" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="customer-div">
              <p>Customer Favorites</p>
              <h2>Popular Categories</h2>
            </div>
            <div className="main-order">
              <div className="card">
                <div className="circle">
                  <img src={gamburger} alt="Gamburger" />
                </div>
                <div className="order">
                  <h2>Main Dish</h2>
                  <p>(86 dishes)</p>
                </div>
              </div>
              <div className="card">
                <div className="circle">
                  <img src={sandwich} alt="Sandwich" />
                </div>
                <div className="order">
                  <h2>Break Fast</h2>
                  <p>(12 break fast)</p>
                </div>
              </div>
              <div className="card">
                <div className="circle">
                  <img src={iceCream} alt="Ice Cream" />
                </div>
                <div className="order">
                  <h2>Dessert</h2>
                  <p>(48 dessert)</p>
                </div>
              </div>
              <div className="card">
                <div className="circle">
                  <img src={juice} alt="Juice" />
                </div>
                <div className="order">
                  <h2>Browse All</h2>
                  <p>(255 Items)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="special-dish">
              <p>Special Dishes</p>
            </div>
            <div className="dish">
              <p>Standout Dishes From Our Menu</p>
            </div>
            <div className="dishes-flex">
              <div className="card1">
                <div className="img-div1">
                  <img src={salat} alt="Fattoush Salad" />
                </div>
                <div className="menu">
                  <h2>Fattoush salad</h2>
                  <p>Description of the item</p>
                  <div className="div3">
                    <h5>
                      <span>$</span>24.00
                    </h5>
                    <p>⭐4.9</p>
                  </div>
                </div>
              </div>
              <div className="card1">
                <div className="img-div1">
                  <img src={vegen} alt="Vegetable Salad" />
                </div>
                <div className="menu">
                  <h2>Vegetable salad</h2>
                  <p>Description of the item</p>
                  <div className="div3">
                    <h5>
                      <span>$</span>26.00
                    </h5>
                    <p>⭐4.9</p>
                  </div>
                </div>
              </div>
              <div className="card1">
                <div className="img-div1">
                  <img src={egg} alt="Egg Vegi Salad" />
                </div>
                <div className="menu">
                  <h2>Egg vegi salad</h2>
                  <p>Description of the item</p>
                  <div className="div3">
                    <h5>
                      <span>$</span>28.00
                    </h5>
                    <p>⭐4.9</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sct1">
          <div className="container">
            <div className="cooker-main-div">
              <div className="cooker-img">
                <img src={cooker} alt="Cooker" />
              </div>
              <div className="cooker-div">
                <h4>Testimonials</h4>
                <h2>What Our Customers Say About Us</h2>
                <p>
                  “I had the pleasure of dining at Foodi last night, and I'm
                  still raving about the experience! The attention to detail in
                  presentation and service was impeccable”
                </p>
                <div className="client-feed">
                  <div className="clients-div">
                    <img src={client1} alt="Client 1" />
                    <img src={client2} alt="Client 2" />
                    <img src={client3} alt="Client 3" />
                  </div>
                  <div>
                    <h5>Customer Feedback</h5>
                    <p>⭐ 4.9 (18.6k Reviews)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sct2">
          <div className="container">
            <div className="main-service">
              <div className="service">
                <h5>Our Story & Services</h5>
                <h6>Our Culinary Journey And Services</h6>
                <p>
                  Rooted in passion, we curate unforgettable dining experiences
                  and offer exceptional services, blending culinary artistry
                  with warm hospitality.
                </p>
                <button className="btn3">Explore</button>
              </div>
              <div className="cards">
                <img className="recept" src={saladLogo} alt="Catering" />
                <h4>Catering</h4>
                <p>Delight your guests with our flavors and presentation</p>
              </div>
              <div className="cards">
                <img className="recept" src={saladLogo} alt="Catering" />
                <h4>Catering</h4>
                <p>Delight your guests with our flavors and presentation</p>
              </div>
            </div>
          </div>
        </section>
      </main>
       <footer className="footer">
      <div className="container footer-content">
        <div className="footer-column">
          <h3 className="logo">
            <span className="logo-icon">F</span>OODI
          </h3>
          <p className="tagline">Savor the artistry where every dish is a culinary masterpiece</p>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>

        <div className="footer-column">
          <h4>Useful links</h4>
          <ul>
            <li>About us</li>
            <li>Events</li>
            <li>Blogs</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Main Menu</h4>
          <ul>
            <li>Home</li>
            <li>Offers</li>
            <li>Menus</li>
            <li>Reservation</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Us</h4>
          <ul>
            <li>example@email.com</li>
            <li>+64 958 248 966</li>
            <li>Social media</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2023 Dscode | All rights reserved</p>
      </div>
    </footer>
    </>
  );
}

export default App;
