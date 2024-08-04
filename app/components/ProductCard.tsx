import React, { useState } from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import './ProductCard.css';

interface ProductCardProps {
    title: string;
    imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, imageUrl }) => {
    const [liked, setLiked] = useState(false);

    const handleLiked = () => {
        setLiked(!liked);
    };

    return (
        <div className="product-card">
            <div className="product-image">
                <img
                    src={imageUrl}
                    alt={title}
                    className="image"
                />
            </div>
            <h2 className='product-title'>
                {title}
            </h2>
            <div className="product-botton">
                <div className="product-info">
                    <a href="#" className="sign-in">Sign in</a> or <span className="create-account">Create an account to see pricing</span>
                </div>
                <div className="like-button-container">
                    <button
                        onClick={handleLiked}
                        className="like-button"
                    >
                        {liked ? (
                            <FaHeart className="like-icon liked" />
                        ) : (
                            <FaRegHeart className="like-icon not-liked" />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
