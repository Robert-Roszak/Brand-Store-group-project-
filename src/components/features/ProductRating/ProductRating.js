import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './ProductRating.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as sStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as rStar } from '@fortawesome/free-regular-svg-icons';

const ProductRating = ({ id, stars, isStarred, setStars }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hover, setHover] = useState(0);

  return (
    <div className={isStarred || isHovered ? style.isStarred : style.default}>
      {[1, 2, 3, 4, 5].map(i => (
        <span
          key={i}
          onClick={() => setStars({ id, i, isStarred })}
          onMouseOver={() => {
            setHover(i);
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setHover(0);
            setIsHovered(false);
          }}
        >
          {isHovered ? (
            <FontAwesomeIcon icon={hover < i ? rStar : sStar}>
              {i} stars
            </FontAwesomeIcon>
          ) : !isHovered && i <= stars ? (
            <FontAwesomeIcon icon={sStar}>{i} stars</FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={rStar}>{i} stars</FontAwesomeIcon>
          )}
        </span>
      ))}
    </div>
  );
};

ProductRating.propTypes = {
  id: PropTypes.any.isRequired,
  stars: PropTypes.number.isRequired,
  isStarred: PropTypes.bool,
  setStars: PropTypes.func.isRequired,
};

export default ProductRating;
