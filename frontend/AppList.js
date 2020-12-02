import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import AppItem from './AppItem';
import axios from 'axios';


export default function AppList({route, navigation}) {
  const [items, setItems] = useState([]);

  useEffect(() => { 
    axios.get('http://192.168.0.12:3001/api/v1/produtos')
         .then(response => { 
             setItems(response.data.map(produto => ({id: produto._id,produto: produto.produto, tipo_produto: produto.tipo_produto, valor: produto.valor, 
                                                      quantidade: produto.quantidade, data_entrega: produto.data_entrega}))); 
         }); 
    }, [route]);

  return (
    <View style={styles.container}>
        <StatusBar style="light" />
        <Text style={styles.title}>Lista de Produtos</Text>
        <ScrollView 
            style={styles.scrollContainer}
            contentContainerStyle={styles.itemsContainer}>
            { items.map(item => {
                return <AppItem key={item.id} id={item.id} item={'Qtde: ' + item.quantidade + '  - Descrição: ' + item.produto + ' - Valor Total: R$ ' + item.quantidade * item.valor } navigation={navigation} />
            }) }
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D93600',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20
  },
  scrollContainer: {

    width: '90%'
  },
  itemsContainer: {

    marginTop: 10,
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
});