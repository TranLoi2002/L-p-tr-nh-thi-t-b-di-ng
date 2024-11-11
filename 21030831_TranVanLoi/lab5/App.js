import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#33FF33',
              padding: 10,
              paddingRight: 30,
              paddingLeft: 25,
              marginLeft: 30,
            }}>
            <Text>Add</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#33FF33',
              padding: 10,
              paddingRight: 30,
              paddingLeft: 25,
              marginLeft: 10,
            }}>
            <Text>Delete</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#33FF33',
              padding: 10,
              paddingRight: 30,
              paddingLeft: 25,
              marginLeft: 10,
            }}>
            <Text>Edit</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TextInput
        placeholder="Tên"
        placeholderTextColor="black"
        style={{
          height: 45,
          marginTop: 12,

          borderColor: '#C4C4C4',
          backgroundColor: '#C4C4C4',
          paddingRight: 30,
          width: 280,
          marginLeft: 30,
        }}
      />
      <TextInput
        placeholder="SDT"
        placeholderTextColor="black"
        style={{
          height: 45,
          marginTop: 12,

          borderColor: '#C4C4C4',
          backgroundColor: '#C4C4C4',
          paddingRight: 30,
          width: 280,
          marginLeft: 30,
        }}
      />
      <View
        style={{
          borderWidth: 3,
          borderColor:'#C4C4C4',
          width: 280,
          height: 400,
          marginLeft: 30,
          marginTop: 10,
          borderRadius: 5,
        }}>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
