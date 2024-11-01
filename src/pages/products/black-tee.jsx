import image from './photos/blacktee.webp'

import React, { useState } from 'react';

function BlackTee({ addToCart }) {
    const [selectedSize, setSelectedSize] = useState('');
    const sizes = ['S', 'M', 'L', 'XL'];


    const product = {
        name: 'bby$$$ tshirt',
        price: 3800,
        image: image,
    };

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

    const handleAddToCart = () => {
        if (selectedSize) {
            const productWithSize = {
                ...product,
                size: selectedSize
            };
            addToCart(productWithSize);
        } else {
            alert('Please select a size before adding to cart.');
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.imageContainer}>
                <img
                    src={product.image}
                    alt={product.name}
                    style={styles.image}
                />
            </div>
            <div style={styles.detailsContainer}>
                <h1 style={styles.title}>{product.name}</h1>
                <p style={styles.price}>₴{product.price}</p>
                <p style={styles.description}>baby $$$$$$</p>

                <div style={styles.sizeContainer}>
                    <h3>Выберите размер:</h3>
                    <div style={styles.sizes}>
                        {sizes.map((size) => (
                            <button
                                key={size}
                                onClick={() => handleSizeChange(size)}
                                style={{
                                    ...styles.sizeButton,
                                    backgroundColor: selectedSize === size ? '#000' : '#fff',
                                    color: selectedSize === size ? '#fff' : '#000'
                                }}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
                <button style={styles.addButton} onClick={handleAddToCart}>
                    Додати до корзини
                </button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '800px',
        backgroundColor: 'rgba(255,255,255,0.89)',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        margin: '20px',
    },
    imageContainer: {
        flex: 1,
        marginRight: '20px',
    },
    image: {
        width: '100%',
        borderRadius: '8px',
    },
    detailsContainer: {
        flex: 1,
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
    },
    price: {
        fontSize: '20px',
        color: '#e91e63',
        margin: '10px 0',
    },
    description: {
        fontSize: '16px',
        margin: '10px 0',
    },
    sizeContainer: {
        marginTop: '20px',
    },
    sizes: {
        display: 'flex',
        gap: '10px',
        marginTop: '10px',
    },
    sizeButton: {
        padding: '10px 20px',
        border: '1px solid #000',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    addButton: {
        marginTop: '20px',
        padding: '15px 20px',
        backgroundColor: '#000',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
    }
};

export default BlackTee;
