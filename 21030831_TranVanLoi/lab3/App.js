import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { createContext, useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { createStackNavigator } from '@react-navigation/stack';
import Picture1 from '/assets/Picture1.png';
import Picture2 from '/assets/Picture2.png';
import Picture3 from '/assets/Picture3.png';
import Picture4 from '/assets/Picture4.png';
// You can import supported modules from npm

// or any files within the Snack
const Stack = createStackNavigator();
const MyContext = createContext();

function Phone({ navigation}) {
  const {Link,SetLink} = useContext(MyContext);
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ justifyContent: 'center', paddingTop: 80, paddingLeft: 30 }}>
        <Image
          source={require(Link)}
          style={{ width: 301, height: 361, marginLeft: 20, marginRight: 190 }}
        />
      </View>
      <View style={{ paddingLeft: 30, paddingTop: 10 }}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 500,
          }}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
      </View>
      <View style={{ flexDirection: 'row', paddingLeft: 30, paddingTop: 10 }}>
        <Entypo name="star" size={30} color="#E0E41A" />
        <Entypo name="star" size={30} color="#E0E41A" />
        <Entypo name="star" size={30} color="#E0E41A" />
        <Entypo name="star" size={30} color="#E0E41A" />
        <Entypo name="star" size={30} color="#E0E41A" />
        <Text style={{ fontSize: 17, paddingTop: 5, paddingLeft: 20 }}>
          (Xem 828 đánh giá)
        </Text>
      </View>
      <View style={{ paddingLeft: 30, paddingTop: 10, flexDirection: 'row' }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 700,
          }}>
          1.790.000 đ
        </Text>
        <Text
          style={{
            fontSize: 23,
            fontWeight: 500,
            paddingLeft: 20,
            textDecorationLine: 'line-through',
          }}>
          1.790.000 đ
        </Text>
      </View>
      <View style={{ paddingLeft: 30, paddingTop: 10, flexDirection: 'row' }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 800,
            color: '#FA0000',
            paddingRight: 15,
          }}>
          Ở ĐÂU RẺ HƠN HOÀN TIỀN
        </Text>
        <AntDesign name="questioncircleo" size={24} color="black" />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Color')}>
        <View
          style={{
            marginTop: 50,
            marginLeft: 30,
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 10,
            flexDirection: 'row',
            width: 350,
            paddingLeft: 40,
            paddingTop: 10,
            paddingBottom: 10,
          }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 400,
              paddingRight: 20,
            }}>
            4 MÀU - CHỌN MÀU
          </Text>
          <AntDesign name="right" size={24} color="black" />
        </View>
      </TouchableOpacity>
      <View
        style={{
          marginTop: 50,
          marginLeft: 30,
          backgroundColor: '#EE0A0A',
          width: 350,
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 400,
            borderRadius: 10,
            paddingLeft: 100,
            color: '#FFFF',
            paddingTop: 10,
            paddingBottom: 10,
          }}>
          CHỌN MUA
        </Text>
      </View>
    </View>
  );
}

function Color({navigation}) {
  const {Link,SetLink} = useContext(MyContext);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingTop: 70, flexDirection: 'row', paddingBottom: 30 }}>
        <Image
          source={require(Link)}
          style={{ width: 101, height: 131, marginLeft: 20, marginRight: 30 }}
        />
        <View style={{ paddingTop: 10 }}>
          <Text style={{ fontSize: 20 }}>Điện Thoại Vsmart Joy 3</Text>
          <Text style={{ fontSize: 20 }}>Hàng chính hãng</Text>
        </View>
      </View>
      <View style={{ backgroundColor: '#C4C4C4', paddingLeft: 30 }}>
        <View style={{ paddingTop: 20 }}>
          <Text style={{ fontSize: 20 }}>Chọn một màu bên dưới :</Text>
        </View>
        <TouchableOpacity onPress={() => SetLink("/assets/Picture4.png")}>

          <View>
            <Image
              source={require('/assets/Picture5.png')}
              style={{ width: 105, height: 100, marginLeft: 100, marginTop: 20 }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => SetLink("/assets/Picture3.png")}>
          <View>
            <Image
              source={require('/assets/Picture6.png')}
              style={{ width: 95, height: 90, marginLeft: 105, marginTop: 15 }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => SetLink("/assets/Picture2.png")}>
          <View>
            <Image
              source={require('/assets/Picture7.png')}
              style={{ width: 95, height: 90, marginLeft: 105, marginTop: 20 }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => SetLink("/assets/Picture1.png")}>
          <View>
            <Image
              source={require('/assets/Picture8.png')}
              style={{ width: 95, height: 90, marginLeft: 105, marginTop: 20 }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Phone')}>
          <View
            style={{
              marginTop: 30,
              backgroundColor: '#1952E294',
              width: 330,
              borderRadius: 10,
              marginBottom:50
            }}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 400,
                borderRadius: 10,
                paddingLeft: 120,
                color: '#FFFF',
                paddingTop: 10,
                paddingBottom: 10,
              }}>
              XONG
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function App({ navigation }) {
  const [Link, SetLink] = useState('/assets/Picture1.png');
  return (
    <MyContext.Provider value={{Link,SetLink}}>
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Phone"
              component={Phone}
              options={{ headerMode: 'none' }}
            />
            <Stack.Screen
              name="Color"
              component={Color}
              options={{ headerMode: 'none' }}
            />
          </Stack.Navigator>
      </NavigationContainer>
    </MyContext.Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
