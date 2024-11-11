import React, { useEffect , useState  } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, ActivityIndicator,TextInput } from 'react-native';

// Async thunk for fetching bikes
const fetchBikes = createAsyncThunk('bikes/fetchBikes', async () => {
  const response = await fetch('https://6703a68cab8a8f8927310915.mockapi.io/bike');
  const data = await response.json();
  return data;
});

// Redux Slice
const bikeSlice = createSlice({
  name: 'bikes',
  initialState: {
    favorites: [],
    bikes: [],
    status: 'idle',
    error: null
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const bikeId = action.payload;
      const index = state.favorites.indexOf(bikeId);
      if (index === -1) {
        state.favorites.push(bikeId);
      } else {
        state.favorites.splice(index, 1);
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBikes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBikes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.bikes = action.payload;
      })
      .addCase(fetchBikes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

// Store
const store = configureStore({
  reducer: {
    bikes: bikeSlice.reducer
  }
});
const AddProductScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if (!name || !price || !category || !description || !image) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const newProduct = {
      name,
      price: parseFloat(price),
      category,
      description,
      image,
    };

    try {
      const response = await fetch('https://6703a68cab8a8f8927310915.mockapi.io/bike', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        Alert.alert('Success', 'Product added successfully');
        dispatch(fetchBikes()); // Refresh the bike list
        navigation.goBack();
      } else {
        throw new Error('Failed to add product');
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Add New Product</Text>
        <TextInput
          style={styles.input}
          placeholder="Product Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Price"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Category (e.g., road, mountain)"
          value={category}
          onChangeText={setCategory}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          multiline
        />
        <TextInput
          style={styles.input}
          placeholder="Image URL"
          value={image}
          onChangeText={setImage}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
          <Text style={styles.addButtonText}>Add Product</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// Welcome Screen
const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://haybike.com/assets/media/xe-up-web.jpg' }}
        style={styles.welcomeImage}
      />
      <Text style={styles.title}>POWER BIKE SHOP</Text>
      <Text style={styles.subtitle}>A premium online store for{'\n'}sporter and their stylish choice</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Catalog')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

// Catalog Screen
const CatalogScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const dispatch = useDispatch();
  const { bikes, status, error } = useSelector(state => state.bikes);
  const favorites = useSelector(state => state.bikes.favorites);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBikes());
    }
  }, [status, dispatch]);

  const filteredBikes = React.useMemo(() => {
    if (selectedCategory === 'all') return bikes;
    return bikes.filter(bike => bike.category.toLowerCase() === selectedCategory);
  }, [bikes, selectedCategory]);

  if (status === 'loading') {
    return <View style={styles.centered}><ActivityIndicator size="large" color="#ff4444" /></View>;
  }

  if (status === 'failed') {
    return <View style={styles.centered}><Text>Error: {error}</Text></View>;
  }

  return (
    <View style={styles.container}>
      <View style ={{flexDirection:'row'}}>
        <Text style={styles.headerTitle}>The world's Best Bike</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddProductScreen')} >
          <View style={{width:50,height:50,backgroundColor:'red'}}>
            <Text> 
            Add bike
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.categories}>
        <TouchableOpacity
          style={[styles.categoryButton, selectedCategory === 'all' && styles.categoryButtonActive]}
          onPress={() => setSelectedCategory('all')}
        >
          <Text style={styles.categoryText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryButton, selectedCategory === 'road' && styles.categoryButtonActive]}
          onPress={() => setSelectedCategory('road')}
        >
          <Text style={styles.categoryText}>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryButton, selectedCategory === 'mountain' && styles.categoryButtonActive]}
          onPress={() => setSelectedCategory('mountain')}
        >
          <Text style={styles.categoryText}>Mountain</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredBikes}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.bikeCard}
            onPress={() => navigation.navigate('Detail', { bike: item })}
          >
            <Image source={{ uri: item.image }} style={styles.bikeImage} />
            <Text style={styles.bikeName}>{item.name}</Text>
            <TouchableOpacity
              style={styles.favoriteButton}
              onPress={() => dispatch(bikeSlice.actions.toggleFavorite(item.id))}
            >
              <Text style={styles.favoriteIcon}>
                {favorites.includes(item.id) ? '❤️' : '🤍'}
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

// Detail Screen
const DetailScreen = ({ route }) => {
  const { bike } = route.params;
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.bikes.favorites);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: bike.image }} style={styles.detailImage} />
      <View style={styles.detailContent}>
        <Text style={styles.detailTitle}>{bike.name}</Text>
        <Text style={styles.detailPrice}>${bike.price}</Text>
        <Text style={styles.detailDiscount}>15% OFF | ${(bike.price * 0.85).toFixed(2)}</Text>
        
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.description}>{bike.description}</Text>

        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => alert('Added to cart!')}
        >
          <Text style={styles.addToCartText}>Add to cart</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.favoriteDetailButton}
          onPress={() => dispatch(bikeSlice.actions.toggleFavorite(bike.id))}
        >
          <Text style={styles.favoriteDetailIcon}>
            {favorites.includes(bike.id) ? '❤️' : '🤍'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// Navigation Stack
const Stack = createNativeStackNavigator();

// Main App
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen 
            name="Welcome" 
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Catalog" 
            component={CatalogScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Detail" 
            component={DetailScreen}
            options={{ title: 'Bike Details' }}
          />
          <Stack.Screen 
            name="AddProductScreen" 
            component={AddProductScreen}
            options={{ title: 'Bike Details' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeImage: {
    width: 300,
    height: 190,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#e0e0e0',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#ff4444',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 15,
    color: '#333',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  categoryButtonActive: {
    backgroundColor: '#ff4444',
  },
  categoryText: {
    color: '#333',
    fontWeight: '500',
  },
  categoryTextActive: {
    color: '#fff',
  },
  bikeList: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  bikeCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  bikeImage: {
    width: '100%',
    height: 90,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  bikeInfo: {
    padding: 10,
  },
  bikeName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  bikePrice: {
    fontSize: 14,
    color: '#666',
  },
  favoriteButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 15,
    padding: 5,
  },
  detailImage: {
    width: '100%',
    height: 200,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '50%',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  detailContent: {
    padding: 20,
  },
  detailTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  detailPrice: {
    fontSize: 22,
    color: '#666',
    textDecorationLine: 'line-through',
  },
  detailDiscount: {
    fontSize: 24,
    color: '#ff4444',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 30,
  },
  addToCartButton: {
    backgroundColor: '#ff4444',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  favoriteDetailButton: {
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  formContainer: {
    padding: 20,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#ff4444',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 15,
  },
});
