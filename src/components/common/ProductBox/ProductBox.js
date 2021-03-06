import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import ProductRating from '../../features/ProductRating/ProductRatingContainer';
import ProductPopup from '../../features/ProductPopup/ProductPopup';
import { Link } from 'react-router-dom';

const ProductBox = ({
  id,
  name,
  price,
  promo,
  image,
  stars,
  oldPrice,
  category,
  description,
  favourite,
  addToFavourite,
  compare,
  addToCompare,
  isStarred,
  numberOfProductsToCompare,
  addToCart,
  quantity,
}) => {
  const [showPopup, togglePopup] = useState(false);

  const handlePopup = event => {
    event.preventDefault();
    return togglePopup(!showPopup);
  };

  const checkStars = id => {
    const retrievedStorage = JSON.parse(localStorage.getItem('stars'));
    if (retrievedStorage !== null) {
      retrievedStorage.filter(item => {
        if (item.id === id) {
          stars = item.stars;
          return stars;
        }
        return stars;
      });
    }
    return stars;
  };

  const checkStarred = id => {
    const retrievedStorage = JSON.parse(localStorage.getItem('stars'));
    if (retrievedStorage !== null) {
      retrievedStorage.filter(item => {
        if (item.id === id) isStarred = item.isStarred;
        return isStarred;
      });
    }
    return isStarred;
  };

  const checkFavs = id => {
    const retrievedStorage = JSON.parse(localStorage.getItem('favs'));
    if (retrievedStorage !== null) {
      retrievedStorage.filter(item => {
        if (item.id === id) favourite = item.favourite;
        return favourite;
      });
    }
    return favourite;
  };

  const handleAddToCart = (name, price, image, quantity, id) => {
    const cartPayload = {
      name: name,
      price: price,
      image: image,
      quantity: quantity,
      productId: id,
    };
    addToCart(cartPayload);
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <Link to={{ pathname: `/product/${id}`, state: { id } }}>
          <img src={image} alt={name} />
        </Link>
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant={'small'} onClick={event => handlePopup(event)}>
            QUICK VIEW
          </Button>
          <Button
            variant='small'
            onClick={event => {
              event.preventDefault();
              return handleAddToCart(name, price, image, quantity, id);
            }}
          >
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      {showPopup ? (
        <ProductPopup
          id={id}
          name={name}
          image={image}
          price={price}
          promo={promo}
          category={category}
          description={description}
          closePopup={handlePopup}
        />
      ) : (
        ''
      )}
      <div className={styles.content}>
        <h5>
          <Link to={`/product/${id}`}>{name}</Link>
        </h5>
        <div className={styles.stars}>
          <ProductRating id={id} stars={checkStars(id)} isStarred={checkStarred(id)} />
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            variant={checkFavs(id) ? 'favourite' : 'outline'}
            onClick={event => {
              event.preventDefault();
              return addToFavourite(id);
            }}
          >
            <FontAwesomeIcon icon={faHeart}>Favourite</FontAwesomeIcon>
          </Button>
          <Button
            variant={compare ? 'compare' : 'outline'}
            onClick={event => {
              if (numberOfProductsToCompare >= 4) {
                event.preventDefault();
                alert('You can only add four products to compare!');
              } else {
                event.preventDefault();
                return addToCompare(id);
              }
            }}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          <div className={styles.oldPrice}>{oldPrice ? '$ ' + oldPrice : ''}</div>
          <Button noHover variant='small'>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};
ProductBox.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  promo: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  favourite: PropTypes.bool,
  compare: PropTypes.bool,
  addToFavourite: PropTypes.func,
  addToCompare: PropTypes.func,
  numberOfProductsToCompare: PropTypes.number,
  image: PropTypes.string,
  stars: PropTypes.number,
  isStarred: PropTypes.bool,
  addToCart: PropTypes.func,
  quantity: PropTypes.number,
};

ProductBox.defaultProps = {
  quantity: 1,
};

export default ProductBox;
