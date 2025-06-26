import {View, Text,Image, StyleSheet,ScrollView} from 'react-native';
import React from 'react';

const ProductDetails = ({ route }) => {
 
const {product}=route.params;

  return (

    <ScrollView>
      <Image source={{uri:product.url}} style={styles.image}/>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </ScrollView>
  );
};
export default ProductDetails;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    color: 'green',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});