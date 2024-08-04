"use client";

import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useSidebar } from '../context/Context';
import FilterSidebar from './FilterSidebar';
import './ProductData.css';

interface Products {
    id: number;
    title: string;
    image: any;
}

const ProductData: React.FC = () => {
    const { isSidebarOpen } = useSidebar();
    const [productData, setProductData] = useState<Products[]>([]);

    const fetchData = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            console.log("data", data);
            setProductData(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className={`container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
            {isSidebarOpen && (
                <div className="sidebar">
                    <FilterSidebar />
                </div>
            )}
            <div className={`product-grid ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                {productData.map((product) => (
                    <ProductCard
                        key={product.id}
                        title={product.title}
                        imageUrl={product.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductData;
