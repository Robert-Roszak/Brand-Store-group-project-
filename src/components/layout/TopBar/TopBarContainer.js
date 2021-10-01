import TopBar from './TopBar';
import { connect } from 'react-redux';

import { changeLanguage, getLanguage } from '../../../redux/languageRedux';
import { changeCurrency, getCurrency } from '../../../redux/currencyRedux';

const mapStateToProps = state => ({
  languageFromContainer: getLanguage(state),
  currencyFromContainer: getCurrency(state),
});
const mapDispatchToProps = dispatch => ({
  changeLanguage: language => dispatch(changeLanguage(language)),
  changeCurrency: currency => dispatch(changeCurrency(currency)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
