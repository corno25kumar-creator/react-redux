import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToProduct, increment } from "./redux/action/productAction";

function App() {
  const dispatch = useDispatch();
  const { products, count } = useSelector((state) => state);

  const handleDispatch = () => {
    dispatch(
      addToProduct({
        id: "1",
        name: "chandan",
        country: "india",
      })
    );
  };

  const handleIncrement = () => {
    dispatch(increment());
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-6 w-100 space-y-4">

        <h1 className="text-xl font-bold text-gray-800 text-center">
          Product Dashboard
        </h1>

        <div className="bg-gray-50 p-3 rounded-lg text-sm">
          <p className="font-semibold">Products:</p>
          <pre className="text-xs mt-1">
            {JSON.stringify(products, null, 2)}
          </pre>
        </div>

        <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
          <span className="font-medium">Total Count:</span>
          <span className="text-lg font-bold">{count}</span>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleDispatch}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
          >
            Add Product
          </button>

          <button
            onClick={handleIncrement}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition"
          >
            Increment
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;
