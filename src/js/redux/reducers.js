// IMPORT ALL SCENE REDUCERS
import HelloWorld from '../components/HelloWorld';

// EXPORT REDUCERS AS OBJECT
export default {
  // scene redux reducers
  [HelloWorld.constants.NAME]: HelloWorld.reducer,
};
