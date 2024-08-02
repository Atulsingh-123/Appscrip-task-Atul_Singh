"use client";

import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useSidebar } from '../context/Context';
import FilterSidebar from './FilterSidebar';

interface Products {
    id: number;
    title: string,
    image: any;
}
const ProductData: React.FC = () => {
    const { isSidebarOpen } = useSidebar();
    const [productData, setProductData] = useState<Products[]>([])

    const fetchData = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            console.log("data", data);
            setProductData(data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className={`w-full flex mx-auto mt-5 ${isSidebarOpen ? 'md:w-[95%] lg:w-[90%]' : 'md:w-[95%] lg:w-[90%]'}`}>
            {isSidebarOpen && (
                <div className="w-1/4">
                    <FilterSidebar />
                </div>
            )}
            
            <div className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-${isSidebarOpen ? '3' : '4'} lg:grid-cols-${isSidebarOpen ? '3' : '4'} gap-4 ${isSidebarOpen ? 'w-3/4' : 'w-full'}`}>
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
