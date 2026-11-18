import { ProductCard } from '../ProductCard/ProductCard.jsx'
import './ProductList.css'

export const ProductList = ({ products, onAdd }) => {
  return (
    <section className="product-list">
      <div className="product-list__header">
        <h1>Наше меню</h1>
        <p>Свежесваренный кофе с доставкой за 15 минут</p>
      </div>

      <div className="product-list__grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={onAdd}
          />
        ))}
      </div>
    </section>
  )
}