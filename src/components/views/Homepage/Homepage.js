import React from 'react';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Feedback from '../../features/Feedback/FeedbackContainer';
import ProductCompare from '../../features/ProductCompare/ProductCompareContainer';
import Promoted from '../../layout/Promoted/Promoted';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <Promoted />
    <NewFurniture />
    <Feedback />
    <ProductCompare />
  </div>
);

export default Homepage;
