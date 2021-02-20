import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
      return (
        <div className="home">
          <div className="home__container">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
              alt=""
              className="home__image"
            />
            <div className="home__row">
              <Product
                id="07973"
                title="The lean Startup: How Constant Innovation Creates Radically Successful Businesses"
                price={329.99}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                rating={4}
              />
              <Product
                id="59547"
                title="OnePlus 7T (Glacier Blue, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 3800mAH Battery)"
                price={37999}
                image="https://images-na.ssl-images-amazon.com/images/I/71ncRs6HzyL._SL1500_.jpg"
                rating={5}
              />
            </div>

            <div className="home__row">
              <Product
                id="47727"
                title="Callas Metal Mesh Desk Organizer, Black LD 708-05"
                price={497}
                image="https://images-na.ssl-images-amazon.com/images/I/81f5kIpOFkL._SL1500_.jpg"
                rating={2}
              />
              <Product
                id="53808"
                title="Apple MacBook Air (13-inch, 8GB RAM, 128GB Storage, 1.8GHz Intel Core i5) - Silver"
                price={75000}
                image="https://images-na.ssl-images-amazon.com/images/I/71Ae0NSObSL._SL1500_.jpg"
                rating={3}
              />
              <Product
                id="38220"
                title="
All-new Echo Dot (4th Gen) | Next generation smart speaker with powerful bass and Alexa (Black)"
                price={4499}
                image="https://images-na.ssl-images-amazon.com/images/I/61KIy6gX-CL._SL1000_.jpg"
                rating={5}
              />
            </div>

            <div className="home__row">
              <Product
                id="15377"
                title="Fossil Sport Unisex Smartwatch 43mm Smokey Blue - FTW4021"
                price={9955}
                image="https://images-na.ssl-images-amazon.com/images/I/71H6DjbKjHL._UL1500_.jpg"
                rating={4}
              />
            </div>
          </div>
        </div>
      );
}

export default Home
