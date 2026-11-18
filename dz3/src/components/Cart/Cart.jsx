import './Cart.css'

export const Cart = ({ items, onRemove, onClear }) => {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <section className="cart">
      <div className="cart__header">
        <h2>
          🛒 Корзина {items.length > 0 && `(${items.length})`}
        </h2>

        {items.length > 0 && (
          <button className="cart__clear" onClick={onClear}>
            Очистить всё
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <p className="cart__empty">
          Пока пусто. Добавьте что-нибудь вкусное 😋
        </p>
      ) : (
        <>
          <ul className="cart__list">
            {items.map((item) => (
              <li key={item.id} className="cart__item">
                <img
                  className="cart__image"
                  src={item.image}
                  alt={item.title}
                />

                <div className="cart__info">
                  <p className="cart__title">{item.title}</p>
                  <p className="cart__price">
                    {item.price} ₽ × {item.quantity} ={' '}
                    <b>{item.price * item.quantity} ₽</b>
                  </p>
                </div>

                <button
                  className="cart__remove"
                  onClick={() => onRemove(item.id)}
                  aria-label="Удалить"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>

          <div className="cart__total">
            <span>Итого:</span>
            <span>{total} ₽</span>
          </div>
        </>
      )}
    </section>
  )
}