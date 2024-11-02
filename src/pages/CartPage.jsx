import React from 'react';
import '../styles/cart.css';

function CartPage({ cartItems, removeFromCart }) {
    return (
        <div className="cart-page">
            <h1 className="empty">yo cart</h1>
            {cartItems.length === 0 ? (
                <p className="empty">she`s empty =(</p>
            ) : (
                <ul className="empty">
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.name} (Розмір: {item.size}) - {item.price} грн
                            <button style={styles.addButton} onClick={() => removeFromCart(index)}>Видалити</button>
                        </li>
                    ))}
                </ul>
            )}

            <div style={{
                backgroundColor: 'rgba(255, 0, 0, 0.7)',
                padding: '165px',
                opacity: 0
            }}>
                <h2>This box combines both opacity and transparent background</h2>
                <p>This text has a red background with 70% transparency and the entire box is 80% opaque.</p>
            </div>
        </div>

    );
}

const styles = {
    addButton: {
        marginTop: '20px',
        padding: '7px 10px',
        backgroundColor: '#000',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
    }
};
export default CartPage;
