import {
  BarChart3,
  Boxes,
  FolderTree,
  Package,
  Percent,
  ReceiptText,
  Star,
  Tags,
  Truck,
  UsersRound
} from "lucide-react";
import { adminSections, formatPrice, products } from "@/lib/data";

const icons = [
  Package,
  FolderTree,
  Boxes,
  ReceiptText,
  UsersRound,
  Percent,
  Star,
  Tags,
  Truck,
  BarChart3
];

export default function AdminPage() {
  const inventoryValue = products.reduce(
    (total, product) => total + product.stock * (product.salePrice ?? product.price),
    0
  );

  return (
    <section className="section dashboard-page">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Admin Dashboard</span>
          <h1>Manage the store</h1>
        </div>
      </div>

      <div className="metric-grid">
        <article>
          <span>Products</span>
          <strong>{products.length}</strong>
        </article>
        <article>
          <span>Stock Units</span>
          <strong>{products.reduce((total, product) => total + product.stock, 0)}</strong>
        </article>
        <article>
          <span>Inventory Value</span>
          <strong>{formatPrice(inventoryValue)}</strong>
        </article>
        <article>
          <span>Open Orders</span>
          <strong>0</strong>
        </article>
      </div>

      <div className="dashboard-grid">
        {adminSections.map((section, index) => {
          const Icon = icons[index];
          return (
            <button className="dashboard-tile" type="button" key={section}>
              <Icon aria-hidden="true" size={23} />
              <span>{section}</span>
            </button>
          );
        })}
      </div>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <caption>Inventory overview</caption>
          <thead>
            <tr>
              <th>Product</th>
              <th>SKU</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.slice(0, 8).map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.sku}</td>
                <td>{product.category}</td>
                <td>{product.stock}</td>
                <td>{formatPrice(product.salePrice ?? product.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
