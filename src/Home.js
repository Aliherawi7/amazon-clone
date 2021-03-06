import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {

    return (
        <div className="home">
            <div className="home-container">
                <img
                    className="home-image"
                    src="/image/1.jpg"
                    alt=""
                />
                <div className="home-row">
                    <Product
                        id={1}
                        title="Product name"
                        image="/image/product/1.jpg"
                        rating={4}
                        price={28}
                    />
                    <Product
                        id={2}
                        title="Product name"
                        image="/image/product/2.jpg"
                        rating={5}
                        price={50} />
                </div>
                <div className="home-row">

                    <Product
                        id={3}
                        title="Product name"
                        image="/image/product/3.png"
                        rating={2}
                        price={20}
                    />
                    <Product
                        id={4}
                        title="Product name"
                        image="/image/product/4.png"
                        rating={3}
                        price={68}
                    />
                    <Product
                        id={5}
                        title="amazon clone"
                        image="/image/product/5.png"
                        rating={4}
                        price={98}
                    />
                </div>
                <div className="home-row">
                    <Product
                        id={6}
                        title="Product name"
                        image="/image/product/6.png"
                        rating={5}
                        price={20}
                    />
                </div>
            </div>


        </div>
    )
}

export default Home