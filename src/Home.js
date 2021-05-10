import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={499}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater"
            price={5999}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Fitbit Inspire Health and Fitness Tracker (Black)"
            price={20000}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={4999}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={29999}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={79999}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="My Protein Whey Protein - 5kg / 11lbs 200 serving"
            price={4999}
            rating={4}
            image="https://cdn.store-assets.com/s/207908/i/8331065.jpeg"
          />
          <Product
            id="49538094"
            title="Alienware Core i7 10th Gen Gaming Laptop"
            price={199999}
            rating={4}
            image="https://smababa.com/wp-content/uploads/2019/08/dell_alienware_m15_gaming_laptop1_-_tejar.jpg"
          />
          <Product
            id="49538094"
            title="Nike Medium 22 L Laptop Backpack (30L)  (Red, Black)"
            price={1999}
            rating={3}
            image="https://rukminim1.flixcart.com/image/1920/1080/k4a7c7k0/backpack/v/d/k/nk-brsla-xl-bkpk-9-0-30l-ba5959-657-backpack-nike-original-imafn7z5sg6tpmnu.jpeg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
