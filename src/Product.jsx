import { useState, useEffect } from "react";
import Card from "./Card";

function Products({ search = "" }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);

      try {
        const res = await fetch(
          "https://fakestoreapi.com/products"
        );

        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    }

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold">
          Loading...
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-5xl font-bold text-center mb-10">
        Our Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <Card
              key={p.id}
              image={p.image}
              title={p.title}
              price={p.price}
              Category={p.category}
            />
          ))
        ) : (
          <h2 className="text-center text-2xl col-span-4">
            No Products Found
          </h2>
        )}

      </div>
    </div>
  );
}

export default Products;