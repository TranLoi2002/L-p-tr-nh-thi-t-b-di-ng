import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, ActivityIndicator } from 'react-native';

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
      <Text style={styles.headerTitle}>The world's Best Bike</Text>
      
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
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeImage: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
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
    fontSize: 20,
    fontWeight: 'bold',
    margin: 15,
  },
  categories: {
    flexDirection: 'row',
    padding: 15,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  categoryButtonActive: {
    backgroundColor: '#ff4444',
  },
  categoryText: {
    color: '#333',
  },
  bikeCard: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
  },
  bikeImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  bikeName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '500',
  },
  favoriteButton: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  favoriteIcon: {
    fontSize: 24,
  },
  detailImage: {
    width: '100%',
    height: 300,
  },
  detailContent: {
    padding: 20,
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailPrice: {
    fontSize: 20,
    color: '#666',
    textDecorationLine: 'line-through',
  },
  detailDiscount: {
    fontSize: 22,
    color: '#ff4444',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
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
  favoriteDetailIcon: {
    fontSize: 24,
  },
});
