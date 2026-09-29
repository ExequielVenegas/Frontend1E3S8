import { formatPrice } from '../data/products'

function ProductCard({ product, quantity, onAddToCart }) {
  const discount = Math.round((1 - product.offerPrice / product.normalPrice) * 100)

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img className="product-image" src={product.image} alt={`Portada de ${product.name}`} />
        <span className="discount-badge">-{discount}%</span>
      </div>
      <div className="product-info">
        <div className="product-meta">
          <span>{product.category}</span>
          <span>{product.platform}</span>
        </div>
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <div className="price-block">
            <span className="normal-price">{formatPrice(product.normalPrice)}</span>
            <span className="offer-price">{formatPrice(product.offerPrice)}</span>
          </div>
          <button
            className={quantity > 0 ? 'add-button in-cart' : 'add-button'}
            type="button"
            aria-label={quantity > 0
              ? `Agregar otra unidad de ${product.name}. Hay ${quantity} en el carrito`
              : `Agregar ${product.name} al carrito`}
            onClick={() => onAddToCart(product)}
          >
            {/* Cambio el texto cuando el juego ya está en el carrito. */}
            {quantity > 0 ? `En el carrito (${quantity}) +` : 'Agregar +'}
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
