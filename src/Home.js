import React from 'react';
import "./Home.css";
import Product from './Product';


function Home() {
    return (
        <div className="home">
            <img 
            className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
             alt="image"/>

            
           <div className="home_row">
           <Product
                id="1"
                title="The Lean StartUp:How constant Innovation Creates Business"
                price={548}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
           />

            <Product
                id="2"
                title="
                Echo Dot streams music from Amazon Prime Music and Spotify."
                price={1999}
                rating={4}
                image="https://m.media-amazon.com/images/I/51w2Bo65HkL._AC_UY327_FMwebp_QL65_.jpg"
           />

           
           </div>


            <div className="home_row">

            <Product
                id="3"
                title=" Bluetooth Dongle Android PC "
                price={999}
                rating={3}
                image="https://m.media-amazon.com/images/I/61+pELSFG5L._AC_UY327_FMwebp_QL65_.jpg"
           />

            <Product
                id="4"
                title="EKSA E900 Wired Stereo Gaming Headset"
                price={980}
                rating={5}
                image="https://m.media-amazon.com/images/I/71mmXKj-96L._AC_UY327_FMwebp_QL65_.jpg"
           />

            <Product
                id="5"
                title=" Time-Tested Methods"
                price={250}
                rating={3}
                image="https://m.media-amazon.com/images/I/61O9uqUfQDL._AC_UY327_FMwebp_QL65_.jpg"
           />


            </div>

            <div className="home_row">

            <Product
                id="6"
                title="Samsung 138 cm (55 inches) 4K Ultra HD Smart LED TV 55Q8CN (Black)"
                price={15000}
                rating={4}
                image="data:image/webp;base64,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"
           />

            </div>


            <div className="home_row">
           <Product
                id="7"
                title="Apple iPhone 11 - Black(EarPods, Adapter)"
                price={5480}
                rating={4}
                image="https://m.media-amazon.com/images/I/51kGDXeFZKL._AC_UL480_FMwebp_QL65_.jpg"
           />

            <Product
                id="8"
                title="
                HP Pavilion Gaming Laptop"
                price={19990}
                rating={5}
                image="https://m.media-amazon.com/images/I/81pezrPSgOL._AC_UY327_FMwebp_QL65_.jpg"
           />

           
           </div>


           <div className="home_row">
           <Product
                id="9"
                title="Zebronics ZEB-BT6590RUCF Bluetooth 5.1 Speaker with SD Card and PENDRIVE Slot"
                price={5480}
                rating={3}
                image="https://m.media-amazon.com/images/I/91LphleAcyL._AC_UY327_FMwebp_QL65_.jpg"
           />

           
           </div>
            



           <div className="home_row">
           <Product
                id="10"
                title="Microsoft Xbox One Wireless Controller with Bluetooth"
                price={1300}
                rating={3}
                image="https://m.media-amazon.com/images/I/61cIz9OsQOL._AC_UY327_FMwebp_QL65_.jpg"
           />

            <Product
                id="8"
                title="
                Assassins Creed: Odyssey (Xbox One)"
                price={199}
                rating={5}
                image="https://m.media-amazon.com/images/I/915kmHF1WaL._AC_UL480_FMwebp_QL65_.jpg"
           />

           
           </div>




        </div>
    )
}

export default Home;
