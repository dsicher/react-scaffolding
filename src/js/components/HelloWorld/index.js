import { actions } from './redux/actions';
import reducer from './redux/reducer';
import * as constants from './constants';
import HelloWorld from './HelloWorld';

export default {
  actions: actions,
  reducer: reducer,
  constants: constants,
  Component: HelloWorld,
};
