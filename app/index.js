import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import Login from './components/login.js';
import store from './store/store.js';

export default function Index() {
  return (
    <Provider store={store}>
      <Login></Login>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  
    alignItems: 'center',      
  },
});
