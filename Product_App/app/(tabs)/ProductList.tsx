import React, { useState } from 'react';
import { Text, View, FlatList, Image, StyleSheet } from 'react-native';

const ProductList = () => {
  const [products, setProducts] = useState([
    {
      id: '1',
      url: "https://imagedelivery.net/2DfovxNet9Syc-4xYpcsGg/3be9926f-0b4c-4fce-b1bf-f0cec10e5c00/product",
      name: "Nike Dunk High By You",
      price: "$150.00"
    },
    {
      id: '2',
      url: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/c3cc42e5-49b3-4b98-bf00-b3313a9a60e6/AIR+MAX+DN8.png",
      name: "Nike Dunk High low",
      price: "$150.00"
    },
    {
      id: '3',
      url: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/ec9bc004-458c-4f2b-abc9-8c0f32e36586/AIR+MAX+DN8.png",
      name: "Nike Air Max Alpha Trainer 5",
      price: "$150.00"
    },
    {
        id: '4',
        url: "https://imagedelivery.net/2DfovxNet9Syc-4xYpcsGg/b709ad90-ba74-4016-8420-366747067400/public",
        name: "Nike Air Max 270",
        price: "$160.00"
    },
    {
        id: '5',
        url: "https://static.nike.com/a/images/t_default/c4c1acba-008a-4955-bcf8-dc17250523c5/W+AIR+MAX+DN8.png",
        name: "Nike Air Max 90",
        price: "$140.00"
    },
    {
        id: '6',
        url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/20fdb293-50ff-42f4-ae6d-87d5c55eae5c/AIR+MAX+DN8.png",
        name: "Nike Air Max 95",
        price: "$170.00"
    }
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <Image source={{ uri: item.url }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>NIKE</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        numColumns={3}
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 10,
    paddingLeft: 10,
 
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  container: {
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    borderBlockColor: 'black',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    fontSize: 14,
    color: 'gray',
  },
});
