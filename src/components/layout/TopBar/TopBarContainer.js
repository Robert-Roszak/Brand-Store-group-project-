import TopBar from './TopBar';
import { connect } from 'react-redux';

import { changeLanguage, getLanguage } from '../../../redux/languageRedux';

const mapStateToProps = state => ({
  languageFromContainer: getLanguage(state),
});
const mapDispatchToProps = dispatch => ({
  changeLanguage: language => dispatch(changeLanguage(language)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
