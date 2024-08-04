import React from 'react';


interface DiscoverProductsProps { }

const HomePage: React.FC<DiscoverProductsProps> = () => {
    return (
        <div className="home-page">
            <div className="content-container">
                <div className="breadcrumb">
                    <span className="breadcrumb-item">HOME</span> | <span className="breadcrumb-item-1">SHOP</span>
                </div>
                <h1 className="heading">
                    DISCOVER OUR PRODUCTS
                </h1>
                <p className="description">
                    Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque.
                    Dolor integer scelerisque nibh amet mi ut elementum.
                </p>
            </div>
        </div>
    );
};

export default HomePage;
