"use client"
import ProductList from "@/components/ProductList";
import SearchBar from "@/components/SearchBar";
import React, { useEffect, useState } from "react";
// Define the base URL and API key
const baseURL = "https://api.nal.usda.gov/fdc/v1";
const apiKey = "gMX6PV4l8gVDJR5p5XQZv5zbx6gW9xKkKYTvuKU3";
const pageSize = 20;
async function getFoodsBySearch(searchParam) {
  const response = await fetch(
    `${baseURL}/foods/search?api_key=${apiKey}&query=${searchParam}`
  );
  const data = await response.json();
  return data;
}
function Home() {
  const [foodData, setFoodData] = useState(null);
  async function handleSearch(searchParam) {
    getFoodsBySearch(searchParam).then((data) => setFoodData(data));
  }
  return (
    <div className="p-5 flex flex-col gap-8 items-center">
      <SearchBar onSearch={handleSearch}/>
      <ProductList results={foodData} />
    </div>
  );
}
export default Home;