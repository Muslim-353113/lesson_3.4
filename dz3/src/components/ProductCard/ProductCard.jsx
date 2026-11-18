import './ProductCard.css'

export const ProductCard = ({ product, onAdd }) => {
  return (
    <article className="product-card">
      <div className="product-card__image">
        <img src={product.image} alt={product.title} loading="lazy" />
      </div>

      <div className="product-card__body">
        <h3 className="product-card__title">{product.title}</h3>
        <p className="product-card__desc">{product.description}</p>
        <p className="product-card__price">{product.price} ₽</p>

        <button
          className="product-card__btn"
          onClick={() => onAdd(product)}
        >
          Добавить в корзину
        </button>
      </div>
    </article>
  )
}