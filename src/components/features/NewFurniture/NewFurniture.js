import React from 'react';
import PropTypes from 'prop-types';
import Swipeable from '../../common/Swipeable/Swipeable';
import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';
import Fade from 'react-reveal/Fade';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  render() {
    const { tileNumber, filters, searchProducts, searchCategories } = this.props;
    let { products, categories } = this.props;
    let { activeCategory } = this.state;
    const { activePage } = this.state;

    if (filters) {
      products = searchProducts;
      categories = searchCategories;
      activeCategory = categories[0];
    }

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / tileNumber);

    const rightAction = () => {
      const newPage = activePage - 1;
      if (newPage >= 0) {
        this.setState({ activePage: newPage });
      }
    };

    const leftAction = () => {
      const newPage = activePage + 1;
      if (newPage < pagesCount) {
        this.setState({ activePage: newPage });
      }
    };

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <button
            type='button'
            onClick={() => this.handlePageChange(i)}
            className={i === activePage ? styles.active : ''}
          ></button>
        </li>
      );
    }

    return (
      <Swipeable leftAction={leftAction} rightAction={rightAction}>
        <div className={styles.root}>
          <div className='container'>
            <div className={styles.panelBar}>
              <div className='row no-gutters align-items-end'>
                <div className={'col-auto ' + styles.heading}>
                  <h3>New furniture</h3>
                </div>
                <div className={'col ' + styles.menu}>
                  <ul>
                    {categories.map(item => (
                      //console.log('jakie sa kategorie po search? ', categories),
                      <li key={item}>
                        <Fade>
                          <button
                            className={item === activeCategory ? styles.active : ''}
                            onClick={() => this.handleCategoryChange(item)}
                          >
                            {item}
                          </button>
                        </Fade>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={'col-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
            </div>
          </div>
          <div className={`row + ${styles.grid}`}>
            {categoryProducts.slice(activePage * 8, (activePage + 1) * 8).map(item => (
              <div key={item.id} className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                <Fade>
                  <ProductBox {...item} />
                </Fade>
              </div>
            ))}
          </div>
        </div>
      </Swipeable>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.array,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
  tileNumber: PropTypes.number,
  filters: PropTypes.any,
  searchProducts: PropTypes.any,
  searchCategories: PropTypes.any,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
