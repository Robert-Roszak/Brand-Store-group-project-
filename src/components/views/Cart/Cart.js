import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';
import { NavLink } from 'react-router-dom';
import styles from './Cart.module.scss';
import Container from '@material-ui/core/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ products, removeProduct, removeProducts, updateQuantity }) => {
  const delivery = 20;
  let subtotal = 0;

  return (
    <div className={styles.root}>
      <Container className={styles.container} maxWidth='lg'>
        <h5>Your cart</h5>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => {
              subtotal += product.price * product.quantity;

              return (
                <tr key={product.productId}>
                  <td>
                    <div>{product.name}</div>
                    <div className={styles.photo}>
                      <img src={product.image} alt={product.name} />
                    </div>
                  </td>
                  <td>
                    <Button
                      variant='quantity'
                      onClick={event => {
                        event.preventDefault();
                        updateQuantity(-1, product.productId);
                      }}
                    >
                      <FontAwesomeIcon icon={faMinus}>-</FontAwesomeIcon>
                    </Button>
                    <input
                      type='text'
                      id='quantity'
                      name='quantity'
                      value={product.quantity}
                    />
                    <Button
                      variant='quantity'
                      onClick={event => {
                        event.preventDefault();
                        updateQuantity(1, product.productId);
                      }}
                    >
                      <FontAwesomeIcon icon={faPlus}>+</FontAwesomeIcon>
                    </Button>
                  </td>
                  <td>${product.price}</td>
                  <td>${product.price * product.quantity}</td>
                  <td>
                    <Button
                      variant='trash'
                      onClick={event => {
                        event.preventDefault();
                        return removeProduct(product.name);
                      }}
                    >
                      <FontAwesomeIcon icon={faTrashAlt}>Remove</FontAwesomeIcon>
                    </Button>
                  </td>
                </tr>
              );
            })}
            ;
          </tbody>
        </table>
        <div className={styles.cartSummary}>Subtotal: ${subtotal}</div>
        <div className={styles.cartSummary}>Delivery: ${delivery}</div>
        <div className={styles.cartSummary}>Total: ${subtotal + delivery}</div>
        <div className={styles.checkout}>
          <NavLink exact to={'/'} activeClassName='active'>
            <Button
              variant='small'
              onClick={event => {
                event.preventDefault();
                return removeProducts();
              }}
            >
              PROCEED TO CHECKOUT
            </Button>
          </NavLink>
        </div>
      </Container>
    </div>
  );
};

Cart.propTypes = {
  products: PropTypes.array,
  removeProduct: PropTypes.func,
  removeProducts: PropTypes.func,
  updateQuantity: PropTypes.func,
};

export default Cart;
