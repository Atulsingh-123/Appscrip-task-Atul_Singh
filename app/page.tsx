"use client";

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import { SidebarProvider } from "./context/Context";
import ProductData from "./components/ProductsData";

export default function Home() {

  return (
      <SidebarProvider>
        <Navbar />
        <HomePage />
        <Filter />
        <ProductData />
        <Footer />
      </SidebarProvider>
  );
}
