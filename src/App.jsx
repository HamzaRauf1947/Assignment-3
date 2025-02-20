import { useState, useEffect } from 'react';

function App() {
  const [pName, setPName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [stock, setStock] = useState('');
  const [products, setProducts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      pName,
      description,
      quantity,
      stock,
    };

    // Use functional update to ensure you're working with the latest state
    setProducts((prevProducts) => [...prevProducts, newProduct]);

    // Clear input fields
    setPName('');
    setDescription('');
    setQuantity('');
    setStock('');
  };

  // Log products after the state has been updated
  useEffect(() => {
    console.log(products);
  }, [products]); // This will run whenever `products` changes

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Add Product
        </h2>

        <div className="mb-4">
          <label htmlFor="pName" className="block text-sm font-medium text-gray-700">
            Product Name:
          </label>
          <input
            onChange={(e) => setPName(e.target.value)}
            type="text"
            id="pName"
            name="pName"
            value={pName}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Product Description:
          </label>
          <input
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            id="description"
            name="description"
            value={description}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product description"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
            Product Quantity:
          </label>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            type="text"
            id="quantity"
            name="quantity"
            value={quantity}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product quantity"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
            Product Stock:
          </label>
          <input
            onChange={(e) => setStock(e.target.value)}
            type="text"
            id="stock"
            name="stock"
            value={stock}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product stock"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;