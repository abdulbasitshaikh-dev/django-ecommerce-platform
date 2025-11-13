import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price?: number;
};

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // set API base if you use REACT_APP_API_URL, otherwise default to local backend
  const API = (import.meta as any).env?.VITE_API_URL ?? "http://127.0.0.1:8000";

  useEffect(() => {
    fetch(`${API}/store/products/`)
       .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => setProducts(Array.isArray(data) ? data : data.results ?? []))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [API]);

  if (loading) return <div>Loading…</div>;
  if (error) return <div style={{ color: "red" }}>Error: {error}</div>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Products</h1>
      {products.length === 0 ? (
        <p>No products.</p>
      ) : (
        <ul>
          {products.map((p) => (
            <li key={p.id}>
              <strong>{p.title}</strong>
              {p.price !== undefined ? ` — $${p.price}` : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}