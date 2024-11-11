import { Text, SafeAreaView, StyleSheet } from 'react-native';

import React from 'react';
import {Provice} from 'react-redux';
import store from './store';
import Counter from './Counter';

const App = () =>{
  return (
    <Provice store = {store}>
      <Counter style ={styles.container} />
    </Provice>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

});