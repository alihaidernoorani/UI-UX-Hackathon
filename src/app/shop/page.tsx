'use client';

import React, { useState, useEffect } from 'react';
import ProductListing from '../components/shop/ProductListing';
import Subscribe from '../components/shop/Subscribe';
import SearchFilter from '../components/shop/SearchFilter';
import Pagination from '../components/shop/Pagination';
import { client } from '@/sanity/lib/client';

const Shop = () => {

  const [products, setProducts] = useState<ProductType[]>([]);
  const [instagramProducts, setInstagramProducts] = useState<ProductType[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query1 = `*[_type == "products"]{
          "id":_id, 
          "name": title,
          price,
          "onSale": badge == "Sales",
          "isNew": badge == "New",
          "image": image.asset->url
        }`;

        const query2 = `*[_type == "products" && "instagram" in tags][0...6]{
          "id":_id,
          "image": image.asset->url
        }`;

        const fetchedProducts = await client.fetch(query1);
        const fetchedInstagramProducts = await client.fetch(query2);

        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts);
        setInstagramProducts(fetchedInstagramProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      let updatedProducts = products;

      if (searchQuery) {
        updatedProducts = updatedProducts.filter(product =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      if (filter === 'sale') {
        updatedProducts = updatedProducts.filter(product => product.onSale);
      } else if (filter === 'new') {
        updatedProducts = updatedProducts.filter(product => product.isNew);
      }

      setFilteredProducts(updatedProducts);
      setCurrentPage(1); // Reset to first page on filter change
    };

    applyFilters();
  }, [searchQuery, filter, products]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  interface PageChangeHandler {
    (pageNumber: number): void;
  }

  const handlePageChange: PageChangeHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <SearchFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filter={filter}
        setFilter={setFilter}
      />
      <ProductListing products={currentProducts} />
      <Pagination
        currentPage={currentPage}
        totalProducts={filteredProducts.length}
        productsPerPage={productsPerPage}
        onPageChange={handlePageChange}
      />
      <Subscribe instagramProducts={instagramProducts} />
    </div>
  );
};

export default Shop;
