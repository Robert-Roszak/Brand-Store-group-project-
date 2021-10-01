import initialState from './initialState';

/* selectors */
export const getCurrency = ({ currency }) => currency;
/* action name creator */
const reducerName = 'currency';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_CURRENCY = createActionName('CHANGE_CURRENCY');

/* action creators */
export const changeCurrency = payload => ({ payload, type: CHANGE_CURRENCY });

/*initialState.language*/
if (getCurrency === '') initialState.currency = 'USD';
if (getCurrency === 'USD') initialState.currency = 'USD';
if (getCurrency === 'PLN') initialState.currency = 'PLN';
if (getCurrency === 'EUR') initialState.currency = 'EUR';

/* reducer */
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_CURRENCY: {
      return statePart, action.payload;
    }
    default:
      return statePart;
  }
}
