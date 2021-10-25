import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/p2heaser/1500x280_desk_store_header_P2_EN.jpg" alt="" />

                <div className="home_row">
                    <Product title="Samsung-M30s" rating={4} image="https://m.media-amazon.com/images/I/41lVDJm6sIL.jpg" price='20.20'/>
                    <Product title="Water-Heater" rating={3} image="https://m.media-amazon.com/images/I/31na34LxwmL._AC_SY200_.jpg" price='36'/>
                    
                    
                </div>
                <div className="home_row">
                <Product title="Bengali-Saree" rating={5} image="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSaheli/events/jup21/clothing-pc-1_1x._SY304_CB640672814_.jpg" price='75.3'/>
                <Product title="Flower Pots" rating={3} image="https://m.media-amazon.com/images/I/81VoZc0QZvL._AC_SY200_.jpg " price='198'/>
                <Product title="Handprinted Furnishings" rating={2} image="https://m.media-amazon.com/images/I/91iqDURqAlL._AC_SY200_.jpg" price='326'/>
                    
                </div>
                <div className="home_row">
                <Product title="Sony" rating={4} image="https://images-eu.ssl-images-amazon.com/images/G/31/amazon_global_services_ags/sshabari/jupiterphase1ooc/phase2GW/DC32X._SY116_CB639836463_.jpg" price='520'/>
                    
                </div>
            </div>
        </div>
    )
}

export default Home;
