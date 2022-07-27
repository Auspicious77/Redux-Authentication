import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Auth from './screens/Auth';
import Todo from './screens/Todo';
import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from './Reducers/AuthReducer';
import TodoReducers from './Reducers/TodoReducers';
import { Provider, useSelector } from 'react-redux';


const store = configureStore({
  reducer: {
    user: AuthReducer,
    todo: TodoReducers
  }
})

function App() {
  const token = useSelector(state => state.user.token)
  return (
    <View style = {styles.container}>
      <StatusBar style= "auto" />
              {/* {
                token?  <Todo/> : <Auth/>
              } */}
              <Auth/>
 
     

    </View>
  );
}

export default () => {
  return(
    <Provider store={store}>
    <App/>
    </Provider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
