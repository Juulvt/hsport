import React, { useEffect, useState } from "react";

// Define the base URL and API key
const baseURL = "https://api.nal.usda.gov/fdc/v1";
const apiKey = "gMX6PV4l8gVDJR5p5XQZv5zbx6gW9xKkKYTvuKU3";

// Function to get food by ID
async function getFoodById(id) {
  const response = await fetch(`${baseURL}/food/${id}?api_key=${apiKey}`);

  const data = await response.json();
  return data;
}

function Product() {
  const [foodData, setFoodData] = useState(null);

  useEffect(() => {
    getFoodById(534358).then((data) => setFoodData(data));
  }, []);
  if (!foodData) {
    return <div>loading....</div>;
  }
  return (
    <div>
      {foodData.description}
      {foodData.labelNutients}

      {foodData.foodNutrients.map((results, index) => (
        <div>
          {" "}
          <p>Vitaminen:</p>
          <div key={index}>
            {results.nutrient.name}
            {results.amount}
            {}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
