import initialState from './initialState';

/* selectors */
export const getLanguage = ({ language }) => language;
/* action name creator */
const reducerName = 'language';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_LANGUAGE = createActionName('CHANGE_LANGUAGE');

/* action creators */
export const changeLanguage = payload => ({ payload, type: CHANGE_LANGUAGE });

/*initialState.language*/
if (getLanguage === '') initialState.language = 'English';
if (getLanguage === 'English') initialState.language = 'English';
if (getLanguage === 'Polish') initialState.language = 'Polish';

/* reducer */
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_LANGUAGE: {
      return statePart, action.payload;
    }
    default:
      return statePart;
  }
}
