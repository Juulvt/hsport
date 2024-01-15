const ProductList = ({ results }) => {
    return (
      <div>
        <div className="flex flex-row flex-wrap gap-5 justify-center items-center">
          {results ? results.foods.map((product) => (
            <a href={product.fdcId} className="flex justify-center items-center h-32 w-32 bg-slate-300 p-2 text-xs" key={product.fdcId}><span>{product.description}</span></a>
          )): ""}
        </div>
      </div>
    );
  };
  
  export default ProductList;