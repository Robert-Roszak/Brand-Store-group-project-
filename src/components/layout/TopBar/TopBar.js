import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser, faLock, faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './TopBar.module.scss';
import { Link, NavLink } from 'react-router-dom';

const TopBar = ({
  languageFromContainer,
  changeLanguage,
  currencyFromContainer,
  changeCurrency,
}) => {
  const [language, setLanguage] = useState('');
  const [currency, setCurrency] = useState('');

  // console.log('languageFromContainer: ', languageFromContainer);
  // console.log('language: ', language);

  if (language !== languageFromContainer) changeLanguage(language);
  if (currency !== currencyFromContainer) changeCurrency(currency);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={`col text-left ${styles.topOptions}`}>
            <ul>
              <li>
                <button type='button'>
                  Currency{' '}
                  <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                </button>
                <ul className={styles.secondaryList}>
                  <li>
                    <button type='button' onClick={() => setCurrency('USD')}>
                      USD
                    </button>
                  </li>
                  <li>
                    <button type='button' onClick={() => setCurrency('PLN')}>
                      PLN
                    </button>
                  </li>
                  <li>
                    <button type='button' onClick={() => setCurrency('EUR')}>
                      EUR
                    </button>
                  </li>
                </ul>
              </li>
              <li>
                <button type='button'>
                  Language{' '}
                  <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                </button>
                <ul className={styles.secondaryList}>
                  <li>
                    <button type='button' onClick={() => setLanguage('English')}>
                      English
                    </button>
                  </li>
                  <li>
                    <button type='button' onClick={() => setLanguage('Polish')}>
                      Polish
                    </button>
                  </li>
                </ul>
              </li>
              <li>
                <button type='button'>
                  Help <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                </button>
              </li>
            </ul>
          </div>
          <div className={`col text-right ${styles.topMenu}`}>
            <ul>
              <li>
                <NavLink exact to={'/login'} activeClassName='active'>
                  <button type='button'>
                    <FontAwesomeIcon className={styles.icon} icon={faUser} /> Login
                  </button>
                </NavLink>
              </li>
              <li>
                <button type='button'>
                  <Link to='/register'>
                    <FontAwesomeIcon className={styles.icon} icon={faLock} />
                    Register
                  </Link>
                </button>
              </li>
              <li>
                <button type='button'>
                  <FontAwesomeIcon className={styles.icon} icon={faBars} />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

TopBar.propTypes = {
  language: PropTypes.string,
  currency: PropTypes.string,
  languageFromContainer: PropTypes.string,
  currencyFromContainer: PropTypes.string,
  setLanguage: PropTypes.func,
  setCurrency: PropTypes.func,
  changeLanguage: PropTypes.func,
  changeCurrency: PropTypes.func,
};

export default TopBar;
