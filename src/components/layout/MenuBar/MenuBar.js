import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearchContainer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => {
  const [view, setview] = useState(false);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={'row ' + styles.wrapper}>
          <div className={'col ' + styles.search}>
            <ProductSearch />
          </div>
          <div className={'col ' + styles.menu + (view ? ' ' + styles.visibility : '')}>
            <ul>
              <li>
                <a href='#' className={styles.active}>
                  Home
                </a>
              </li>
              <li>
                <a href='#'>Furniture</a>
              </li>
              <li>
                <a href='#'>Chair</a>
              </li>
              <li>
                <a href='#'>Table</a>
              </li>
              <li>
                <a href='#'>Sofa</a>
              </li>
              <li>
                <a href='#'>Bedroom</a>
              </li>
              <li>
                <a href='#'>Blog</a>
              </li>
            </ul>
          </div>
          <a href='#' className={styles.dropdown} onClick={() => setview(!view)}>
            <FontAwesomeIcon icon={faBars} />
          </a>
        </div>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
