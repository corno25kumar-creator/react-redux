import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/action/actionProducts";
import { addToFavorites, removeFromFavorites } from "./redux/action/favoritesActions";

function App() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsState);
  const { favorites } = useSelector((state) => state.favoritesState);
  const count = useSelector((state) => state.countState.count);


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Product Dashboard</h1>
      <p className="mb-4 font-medium">Total fetch count: {count}</p>

      <div className="grid grid-cols-2 gap-4">
        {products.map((p) => (
          <div key={p.id} className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold">{p.title}</h2>
            <p>${p.price}</p>
            {favorites.find(f => f.id === p.id) ? (
              <button
                className="mt-2 bg-red-500 text-white py-1 px-2 rounded"
                onClick={() => dispatch(removeFromFavorites(p.id))}
              >
                Remove Favorite
              </button>
            ) : (
              <button
                className="mt-2 bg-blue-500 text-white py-1 px-2 rounded"
                onClick={() => dispatch(addToFavorites(p))}
              >
                Add to Favorites
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
