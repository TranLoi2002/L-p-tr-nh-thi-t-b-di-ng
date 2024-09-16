import React ,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, StyleSheet, Button, Alert,Image,TextInput,TouchableOpacity,Switch } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Stack = createStackNavigator();

function Home({ navigation }) {
  return (
    <View style={styleHome.title}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#C7F4F7', '#D1F4F6', '#E5F4F5', '#37D6F8' , '#00CCF9','transparent']}
        style={styleHome.background}
      />
      <View>
        <View style={styleHome.icon}></View>
      </View>
      <View style={{ paddingTop: 70, paddingBottom: 70, alignItems: 'center' }}>
        <Text style={styleHome.text}>GROW</Text>
        <Text style={styleHome.text}>YOUR BUSINESS</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={styleHome.title1}>
          We will help you to grow your business using
        </Text>
        <Text style={styleHome.title1}>online sever</Text>
      </View>
      <View style={{ paddingTop: 50, flexDirection: 'row' }}>
        <View
          style={{
            padding: 5,
            marginRight: 60,
            paddingLeft: 20,
            paddingRight: 20,
            backgroundColor: '#E3C000',
          }}>
          <Button
            onPress={() => navigation.navigate('Login')}
            title="LOGIN"
            color="black">
            // <Text style={{ fontSize: 18, fontWeight: 600 }}>LOGIN</Text>
          </Button>
        </View>
        <View
          style={{
            padding: 5,
            paddingLeft: 14,
            paddingRight: 14,
            backgroundColor: '#E3C000',
          }}>
          <Button
            onPress={() => navigation.navigate('Register')}
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
}

function FogetPassword({ navigation }) {
  return (
    <View style={styleFogetPassword.title}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#C7F4F7', '#D1F4F6', '#E5F4F5', '#37D6F8' , '#00CCF9','transparent']}
        style={styleFogetPassword.background}
      />
      <View>
        <View >
          <Image
          source={require('/assets/Picture1.png')}
          style={{width:100,height:120}}
          />
        </View>
      </View>
      <View style={{ paddingTop: 40, paddingBottom: 40, alignItems: 'center' }}>
        <Text style={styleFogetPassword.text}>FORGET</Text>
        <Text style={styleFogetPassword.text}>PASSWORD</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={styleFogetPassword.title1}>
          Provide your account’s email for which you
        </Text>
        <Text style={styleFogetPassword.title1}>want to reset your password</Text>
      </View>
      <View style={{flexDirection: 'row',paddingTop:40,}}>
        <Image
          source={require('/assets/Email.png')}
          style={{width:50,height:45,marginTop:12}}
          />
        <TextInput
          placeholder="Email"
          placeholderTextColor="black"
          style = {{
            height: 45,
            marginTop: 12,
           
            borderColor:"#C4C4C4",
            backgroundColor:"#C4C4C4",
            paddingRight:30,
            width:220,
            marginLeft:0,
            
          }}
        />
      </View>
      <View style={{ paddingTop: 50, flexDirection: 'row' }}>
        <View
          style={{
            padding: 5,
            paddingLeft: 105,
            paddingRight: 110,
            backgroundColor: '#E3C000',
          }}>
          <Button
            onPress={() => navigation.navigate('ChangePassword')}
            title="NEXT"
            color="black">
            // <Text style={{ fontSize: 18, fontWeight: 600 }}>LOGIN</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}
function VerifyCode({ navigation }) {
  return (
    <View style={styleVerifyCode.title}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#C7F4F7', '#D1F4F6', '#E5F4F5', '#37D6F8' , '#00CCF9','transparent']}
        style={styleVerifyCode.background}
      />
      <View style ={{marginBottom:20}}>
        <Text style={styleVerifyCode.code}>CODE</Text>
      </View>
      <View style={{ paddingTop: 40, paddingBottom: 50, alignItems: 'center' }}>
        <Text style={styleVerifyCode.text}>VERIFYCATION</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={styleVerifyCode.title1}>
          Enter ontime password sent on
        </Text>
        <Text style={styleVerifyCode.title1}>++849092605798</Text>
      </View>
      <View style={{flexDirection: 'row',paddingTop:40,}}>
         <TextInput
          style = {{
            height: 45,
            marginTop: 12,
            borderWidth: 1,
            paddingRight:30,
            width:40,
            marginLeft:0,
            
          }}
        />
        <TextInput
          style = {{
            height: 45,
            marginTop: 12,
            borderWidth: 1,
            paddingRight:30,
            width:40,
            marginLeft:0,
            
          }}
        />
        <TextInput
          style = {{
            height: 45,
            marginTop: 12,
            borderWidth: 1,
            paddingRight:30,
            width:40,
            marginLeft:0,
            
          }}
        />
        <TextInput
          style = {{
            height: 45,
            marginTop: 12,
            borderWidth: 1,
            paddingRight:30,
            width:40,
            marginLeft:0,
            
          }}
        />
        <TextInput
          style = {{
            height: 45,
            marginTop: 12,
            borderWidth: 1,
            paddingRight:30,
            width:40,
            marginLeft:0,
            
          }}
        />
        <TextInput
          style = {{
            height: 45,
            marginTop: 12,
            borderWidth: 1,
            paddingRight:30,
            width:40,
            marginLeft:0,
            
          }}
        />
      </View>
      <View style={{ paddingTop: 50, flexDirection: 'row' }}>
        <View
          style={{
            padding: 5,
            paddingLeft: 105,
            paddingRight: 110,
            backgroundColor: '#E3C000',
          }}>
          <Button
            onPress={() => navigation.navigate('Login')}
            title="VERIFY CODE"
            color="black">
            // <Text style={{ fontSize: 18, fontWeight: 600 }}>LOGIN</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}

function Login({ navigation }) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  return (
    <View style={styleLogin.title}>
      <View style={{alignItems: 'center' }}>
        <Text style={styleLogin.text}>LOGIN</Text>
      </View>
      <View style={{flexDirection: 'row',paddingTop:100,}}>
         <TextInput
          placeholder="Email"
          placeholderTextColor="black"
          style = {{
            height: 45,
           
            borderColor:"#C4C4C4",
            backgroundColor:"#C4C4C4",
            paddingRight:30,
            width:270,
            padding:10
            
          }}
        />
      </View>
      <View style={{flexDirection: 'row',paddingTop:30,}}>
         <TextInput
          secureTextEntry={secureTextEntry}
          placeholder="Password"
          placeholderTextColor="black"
          style = {{
            height: 45,
           
            borderColor:"#C4C4C4",
            backgroundColor:"#C4C4C4",
            paddingRight:30,
            width:230,
            padding:10
            
          }}
        />
        <View style={{padding:10,paddingTop:12,backgroundColor:'#C4C4C4'}}>
          <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
            <Image
              source={require('/assets/eye.png')}
              style={{width:20,height:20}}
              />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ paddingTop: 70, flexDirection: 'row' }}>
        <View
          style={{
            padding: 5,
            paddingLeft: 105,
            paddingRight: 110,
            backgroundColor: '#E53935',
            borderRadius:3
          }}>
          <Button
            onPress={() => navigation.navigate('Home')}
            title="LOGIN"
            color="#FFFF"
            >
            // <Text style={{ fontSize: 18, fontWeight: 600 }}>LOGIN</Text>
          </Button>
        </View>
      </View>
      <View style={{ alignItems: 'center',padding:10}}>
        <Text style={styleLogin.title1}>
          When you agree to terms and conditions
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('FogetPassword')} >
          <Text style={{fontSize: 13,fontWeight: 600,color:'#5D25FA'}}>Or For got your password? </Text>
        </TouchableOpacity>
        <Text style={styleLogin.title1}>Or login with</Text>
      </View>
      <View style={{flexDirection:"row",paddingTop:40}}>
        <View style={{
          backgroundColor:'#25479B',
          paddingLeft:40,
          paddingRight:40,
          justifyContent:'center'
          }}>
          <Image
              source={require('/assets/Facebook.png')}
              style={{width:10,height:25}}
              />
        </View>
        <View style={{
          backgroundColor:'#0F8EE0',
          
          paddingLeft:30,
          paddingRight:30,
          justifyContent:'center'
          }}>
          <Text style={{color:'#FFFF',fontSize:30,fontWeight:500}}>Z</Text>
        </View>
        <View style={{
          backgroundColor:'#FFFF',
          
          paddingLeft:30,
          paddingRight:30,
          justifyContent:'center'
        }}>
          <Image
              source={require('/assets/Google.png')}
              style={{width:28,height:28}}
              />
        </View>
      </View>
    </View>
  );
}

function Register({ navigation }) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isCheckedMale, setIsCheckedMale] = useState(true);
  const toggleSwitchMale = () => {
    setIsCheckedMale(!isCheckedMale);
    setIsCheckedFemale(!isCheckedFemale);
  };
  const [isCheckedFemale, setIsCheckedFemale] = useState(false);

  const toggleSwitchFemale = () => {
    setIsCheckedFemale(!isCheckedFemale);
    setIsCheckedMale(!isCheckedMale)
  };
  return (
    <View style={styleRegister.title}>
      <View style={{alignItems: 'center' }}>
        <Text style={styleRegister.text}>REGISTER</Text>
      </View>
      <View style={{paddingTop:50,}}>
         <TextInput
          placeholder="Name"
          placeholderTextColor="black"
          style = {{
            height: 45,
           
            borderColor:"#C4C4C4",
            backgroundColor:"#C4C4C4",
            paddingRight:30,
            width:270,
            padding:10
            
          }}
        />
      </View>
      <View style={{paddingTop:20,}}>
         <TextInput
          placeholder="Phone"
          placeholderTextColor="black"
          style = {{
            height: 45,
           
            borderColor:"#C4C4C4",
            backgroundColor:"#C4C4C4",
            paddingRight:30,
            width:270,
            padding:10
            
          }}
        />
      </View>
      <View style={{paddingTop:20,}}>
         <TextInput
          placeholder="Email"
          placeholderTextColor="black"
          style = {{
            height: 45,
           
            borderColor:"#C4C4C4",
            backgroundColor:"#C4C4C4",
            paddingRight:30,
            width:270,
            padding:10
            
          }}
        />
      </View>
      <View style={{flexDirection: 'row',paddingTop:20,}}>
         <TextInput
          secureTextEntry={secureTextEntry}
          placeholder="Password"
          placeholderTextColor="black"
          style = {{
            height: 45,
           
            borderColor:"#C4C4C4",
            backgroundColor:"#C4C4C4",
            paddingRight:30,
            width:230,
            padding:10
            
          }}
        />
        <View style={{padding:10,paddingTop:12,backgroundColor:'#C4C4C4'}}>
          <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
            <Image
              source={require('/assets/eye.png')}
              style={{width:20,height:20}}
              />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{paddingTop:20,}}>
         <TextInput
          placeholder="Birthday"
          placeholderTextColor="black"
          style = {{
            height: 45,
           
            borderColor:"#C4C4C4",
            backgroundColor:"#C4C4C4",
            paddingRight:30,
            width:270,
            padding:10
            
          }}
        />
      </View>
      <View style={{flexDirection:'row',paddingTop:20}}>
        <Switch
          value={isCheckedMale}
          onValueChange={toggleSwitchMale}
          
          
        />
        <Text style = {{paddingLeft:10,paddingRight:20}}>Male</Text>
        <Switch
          value={isCheckedFemale}
          onValueChange={toggleSwitchFemale}
        />
        <Text style = {{paddingLeft:10}}>Fermale</Text>
      </View>
      <View style={{ paddingTop: 50, flexDirection: 'row' }}>
        <View
          style={{
            padding: 5,
            paddingLeft: 95,
            paddingRight: 92,
            backgroundColor: '#E53935',
            borderRadius:3
          }}>
          <Button
            onPress={() => navigation.navigate('VerifyCode')}
            title="REGISTER"
            color="#FFFF"
            >
            // <Text style={{ fontSize: 18, fontWeight: 600 }}>LOGIN</Text>
          </Button>
        </View>
      </View>
      <View style={{ alignItems: 'center',padding:5}}>
        <Text style={styleRegister.title1}>
          When you agree to terms and conditions
        </Text>
      </View>
      
    </View>
  );
}
function ChangePassword({ navigation }) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  return (
    <View style={styleLogin.title}>
      <View>
        <View >
          <Image
          source={require('/assets/reset-password.png')}
          style={{width:150,height:150}}
          />
        </View>
      </View>
      <View style={{flexDirection: 'row',paddingTop:100,}}>
        <TextInput
          secureTextEntry={secureTextEntry}
          placeholder="New password"
          placeholderTextColor="black"
          style = {{
            height: 45,
           
            borderColor:"#C4C4C4",
            backgroundColor:"#C4C4C4",
            paddingRight:30,
            width:230,
            padding:10
          }}
        />
        <View style={{padding:10,paddingTop:12,backgroundColor:'#C4C4C4'}}>
          <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
            <Image
              source={require('/assets/eye.png')}
              style={{width:20,height:20}}
              />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: 'row',paddingTop:30,}}>
         <TextInput
          secureTextEntry={secureTextEntry}
          placeholder=" Change Password"
          placeholderTextColor="black"
          style = {{
            height: 45,
           
            borderColor:"#C4C4C4",
            backgroundColor:"#C4C4C4",
            paddingRight:30,
            width:230,
            padding:10
            
          }}
        />
        <View style={{padding:10,paddingTop:12,backgroundColor:'#C4C4C4'}}>
          <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
            <Image
              source={require('/assets/eye.png')}
              style={{width:20,height:20}}
              />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ paddingTop: 70, flexDirection: 'row' }}>
        <View
          style={{
            padding: 5,
            paddingLeft: 70,
            paddingRight: 80,
            backgroundColor: '#E53935',
            borderRadius:3
          }}>
          <Button
            onPress={() => navigation.navigate('Home')}
            title="SAVE PASSWORD"
            color="#FFFF"
            >
            // <Text style={{ fontSize: 18, fontWeight: 600 }}>LOGIN</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FogetPassword" component={FogetPassword} />
        <Stack.Screen name="VerifyCode" component={VerifyCode} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styleHome = StyleSheet.create({
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
const styleFogetPassword = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 800,
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

const styleVerifyCode = StyleSheet.create({
  text: {
    fontSize: 22,
    fontWeight: 600,
  },
  code: {
    fontSize: 70,
    fontWeight: 700,
  },
  title: {
    flex: 1,
    alignItems: 'center',
     justifyContent: 'center',
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
const styleLogin = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 800,
  },
  title: {
    flex: 1,
    paddingTop:80,
    alignItems: 'center',
    backgroundColor:'rgba(49, 170, 82, 0.19)',
  },
  title1: {
    fontSize: 13,
    fontWeight: 600,
    padding:15
  },
});
const styleRegister = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 800,
  },
  title: {
    flex: 1,
    paddingTop:40,
    alignItems: 'center',
    backgroundColor:'rgba(49, 170, 82, 0.19)',
  },
  title1: {
    fontSize: 13,
    fontWeight: 600,
    padding:15
  },
});

export default App;
