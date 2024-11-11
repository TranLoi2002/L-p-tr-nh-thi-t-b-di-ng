import React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  return (
    <View style={style.title}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#C7F4F7', '#D1F4F6', '#E5F4F5', '#37D6F8' , '#00CCF9','transparent']}
        style={style.background}
      />
      <View>
        <View style={style.icon}></View>
      </View>
      <View style={{ paddingTop: 70, paddingBottom: 70, alignItems: 'center' }}>
        <Text style={style.text}>GROW</Text>
        <Text style={style.text}>YOUR BUSINESS</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={style.title1}>
          We will help you to grow your business using
        </Text>
        <Text style={style.title1}>online sever</Text>
      </View>
      <View style={{ paddingTop: 50, flexDirection: 'row' }}>
        <View
          style={{
            padding: 10,
            marginRight: 60,
            paddingLeft: 20,
            paddingRight: 20,
            backgroundColor: '#E3C000',
            borderRadius: 10,
          }}>
          <Button
            onPress={() => {
              Alert.alert('LOGIN');
            }}
            title="LOGIN"
            color="black">
            // <Text style={{ fontSize: 18, fontWeight: 600 }}>LOGIN</Text>
          </Button>
        </View>
        <View
          style={{
            padding: 10,
            paddingLeft: 14,
            paddingRight: 14,
            backgroundColor: '#E3C000',
            borderRadius: 10,
          }}>
          <Button
            onPress={() => {
              Alert.alert('SINGUP');
            }}
            title="SINGUP"
            color="black">
            // <Text style={{ fontSize: 18, fontWeight: 600 }}>LOGIN</Text>
          </Button>
        </View>
      </View>
      <View
        style={{
          paddingTop: 20,
        }}>
        <Button title="HOW WE WORK?" color="black"></Button>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 800,
  },
  icon: {
    borderWidth: 15,
    height: 140,
    width: 140,
    borderColor: 'black',
    borderRadius: 100,
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#00CCF9',
  },
  title1: {
    fontSize: 13,
    fontWeight: 600,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1300,
  },
});
export default App;
