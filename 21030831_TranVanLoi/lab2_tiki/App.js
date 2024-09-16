import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Image,TouchableOpacity
} from 'react-native';
import React ,{useState} from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [secureTextEntry, setSecureTextEntry] = useState(1);
  const evenSoLuongGiam  = () => {
    if (secureTextEntry>1) 
      setSecureTextEntry(secureTextEntry-1)
  };
  return (
    <View style={styleHome.title}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{}}>
          <Image
            source={require('/assets/Book.png')}
            style={{ width: 104, height: 127 }}
          />
        </View>
        <View style={{ paddingLeft: 15 }}>
          <View>
            <Text style={styleHome.title1}>
              Nguyên hàm tích phân và ứng dụng
            </Text>
          </View>
          <View>
            <Text style={styleHome.text}>Cung Cấp bởi TiKi trading</Text>
          </View>
          <View style={{ paddingTop: 10 }}>
            <Text
              style={{
                color: '#EE0D0D',
                fontWeight: 500,
                fontSize: 20,
              }}>
              141.800 đ
            </Text>
          </View>
          <View style={{ paddingTop: 5 }}>
            <Text
              style={{
                fontWeight: 200,
                fontSize: 12,
                color: '#808080',
                textDecorationLine:'line-through'
              }}>
              141.800 đ
            </Text>
          </View>
          <View style={{ flexDirection: 'row', paddingTop: 8 }}>
            <TouchableOpacity onPress={() => evenSoLuongGiam()}>
              <Text
                style={{
                  backgroundColor: '#C4C4C4',
                  paddingLeft: 5,
                  paddingRight: 5,
                }}>
                -
              </Text>
            </TouchableOpacity>
            <Text style={{ paddingLeft: 10, paddingRight: 10 }}  >{secureTextEntry}</Text>
            <TouchableOpacity onPress={() => setSecureTextEntry(secureTextEntry+1)}>
              <Text
                style={{
                  paddingLeft: 5,
                  backgroundColor: '#C4C4C4',
                  paddingRight: 5,
                }}>
                +
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                paddingLeft: 80,
                color: '#134FEC',
                fontSize: 12,
                fontWeight: 500,
              }}>
              Mua sau
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', paddingTop: 10 }}>
        <Text style={{ fontSize: 12, fontWeight: 600 }}>
          Mã giảm giá đã lưu{' '}
        </Text>
        <Text
          style={{
            color: '#134FEC',
            fontSize: 12,
            fontWeight: 600,
            paddingLeft: 30,
            paddingRight: 100,
          }}>
          Xem tại đây
        </Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 40 }}>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: '#808080',
            borderRadius: 2,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 70,
          }}>
          <View style={{ padding: 10 }}>
            <Image
              source={require('/assets/vang.png')}
              style={{ width: 20, height: 10 }}
            />
          </View>
          <View style={{ paddingRight: 30 }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 600,
              }}>
              Mã giảm giá{' '}
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#0A5EB7',
          }}>
          <Button title="Áp dụng" color="#FFFF"></Button>
        </View>
      </View>
      <View
        style={{
          marginTop: 40,
          backgroundColor: '#C4C4C4',
          padding: 8,
          paddingRight: 400,
        }}></View>
      <View style={{ flexDirection: 'row', paddingTop: 15, paddingBottom: 20 }}>
        <Text style={styleHome.title1}>
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
        </Text>
        <Text
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: '#134FEC',
            paddingLeft: 15,
          }}>
          Nhập tại đây?
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#C4C4C4',
          padding: 7,
          paddingRight: 400,
        }}></View>
      <View style={{ flexDirection: 'row', paddingTop: 15, paddingBottom: 20 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 600,
            paddingRight: 150,
          }}>
          Tạm tính
        </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: '#EE0D0D',
            }}>
            {secureTextEntry*141800}
          </Text>
      </View>
      <View
        style={{
          backgroundColor: '#C4C4C4',
          padding: 70,
          paddingRight: 400,
        }}></View>
      <View style={{ flexDirection: 'row' ,paddingTop:20}}>
        <Text style={{
          fontSize: 20,
          fontWeight: 600,
          paddingRight: 150,
          color:'#808080'
        }}>Thành tiền </Text>
        <Text style ={{
          fontSize: 20,
          fontWeight: 600,
          color: '#EE0D0D',
          paddingBottom:30
        }}>{secureTextEntry*141800}</Text>
      </View>
      <View
        style={{
          padding: 5,
          paddingLeft: 75,
          paddingRight: 72,
          backgroundColor: '#E53935',
          borderRadius: 3,
        }}>
        <Button title="TIẾN HÀNH ĐẶT HÀNG" color="#FFFF">
          // <Text style={{ fontSize: 18, fontWeight: 600 }}>LOGIN</Text>
        </Button>
      </View>
    </View>
  );
}

const styleHome = StyleSheet.create({
  text: {
    fontSize: 13,
    fontWeight: 600,
    paddingTop: 20,
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title1: {
    fontSize: 11,
    fontWeight: 700,
  },
});
