import React, { useEffect, useState } from 'react';
import { StyleSheet, View, StatusBar, FlatList,Image,TouchableOpacity,Text } from 'react-native';

export default function HomeScreen ({navigation}) {
   const [urunler, seturunler] = useState([]);

  const getUrunler = (m = m) => {
    fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')
      .then((res) => res.json())
      .then((data) => {
        seturunler(data);
      });
  };

  useEffect(() => {
    getUrunler();
  }, []);
   const yuklenenurunler = ({ item }) => {
  return (
    <TouchableOpacity style={styles.urunCard}>
        <Image source={{ uri: item.images[0] }} style={styles.urunresim}/>

        <View style={styles.urunaciklama}>
        <Text style={styles.urunadi}>{item.title}</Text>
        <Text style={styles.urunfiyati}>${item.price}</Text>
        <Text style={styles.urunbilgi}>{item.description}</Text>
        <Text style={styles.urunbarkod}>Barkod No:{item.creationAt}</Text>
       
       <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={()=>navigation.navigate("bilgi")}>Bilgi Al</Text>        
     </TouchableOpacity>

        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={urunler}
        renderItem={yuklenenurunler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#CCD3CA",
  },
  urunCard: {
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    overflow: 'hidden',
  },
  urunresim: {
    width: '100%',
    height: 200,
  },
  urunaciklama: {
    padding: 10,
    backgroundColor:"#B5C0D0",
  },
  urunadi: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
        color:"#EED3D9",
  },
  urunfiyati: {
    fontSize: 16,
        color:"#F5E8DD",
  },
  urunbilgi:{
    fontSize:"10px",
    color:"#F5E8DD",
  },
 urunbarkod:{
  color:"#F5E8DD",
  padding:"5px",
 },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
   button: {
    backgroundColor: '#9290C3',
     borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: '80%',
    marginRight:"10px",
  },
});