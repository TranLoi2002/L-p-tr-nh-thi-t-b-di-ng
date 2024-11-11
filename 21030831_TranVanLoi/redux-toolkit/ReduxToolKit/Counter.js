import React from 'react';
import { Text, SafeAreaView, StyleSheet,View,Button } from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement } from './counterSlice';
 
const Counter = ()=>{
  const count  = useSelector((state)=>state.couter.value);
  const dispatch =useDispatch();
  return(
    <View style = {styles.container}>
      <Text style ={styles.count}>{count}</Text>
      <Button title = "Increment" onPress = {()=>dispatch(increment())} />
      <br/>
      <Button title ="Decrement" onPress = {()=>dispatch(decrement())} />

    </View>
  );
};

const styles = StyleSheet.create({
  container :{
    flex:1,
    justifyContent:'center',
    alignContent:'center',
  },
  count :{
    fontSize:48,
    marginBottom:20,
  }
})
export default Counter;