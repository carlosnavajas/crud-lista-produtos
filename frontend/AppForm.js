import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import DatePicker from 'react-native-datepicker';
import axios from 'axios';

export default function AppForm({ route, navigation }) {

  var id = route.params ? route.params._id : undefined;
  const [tipo_produto, setValue] = React.useState('vestuario');
  const [data_entrega, setDataEntrega] = useState(new Date());
  const [produto, setProduto] = useState(''); 
  const [quantidade, setQuantidade] = useState('');  
  const [valor, setValorProduto] = useState('');

  useEffect(() => {
    if(!route.params) return;
    setValue(route.params.tipo_produto);
    setDataEntrega(route.params.data_entrega);
    setProduto(route.params.produto);
    setQuantidade(route.params.quantidade.toString());
    setValorProduto(route.params.valor.toString());
  }, [route])


  function handleProductChange(produto){ setProduto(produto); } 
  function handleProductValueChange(valor_produto){ setValorProduto(valor_produto); } 
  function handleQuantityChange(quantidade){ setQuantidade(quantidade); }
  
  function handleButtonPress(){ 

    const listItem = {produto, tipo_produto, valor, quantidade, data_entrega};
    if(id == undefined){
      axios.post('http://192.168.0.12:3001/api/v1/produtos', listItem ).then(response => {
          alert('Cadastro realizado com sucesso!');
          navigation.navigate("AppList", listItem);
        });
    } else {
      axios.post('http://192.168.0.12:3001/api/v1/produtos/' + id, listItem).then(response => {
          alert('Registro alterado com sucesso!');
          id = undefined;
          navigation.navigate("AppList", listItem);
        });
    } 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Produto</Text>
      <View style={styles.inputContainer}> 
        <TextInput 
          style={styles.input}
          onChangeText={handleProductChange} 
          placeholder="Nome do Produto"
          clearButtonMode="always"
          value={produto} /> 

        <Text>Tipo do Produto</Text>
        <RadioButton.Group onValueChange={value => setValue(value)} value={tipo_produto}>
          <RadioButton.Item label="Vestuário" value="vestuario" color="red" />
          <RadioButton.Item label="Limpeza" value="limpeza" color="red" />
          <RadioButton.Item label="Alimento" value="alimento" color="red" />
        </RadioButton.Group>

        <TextInput 
          style={styles.input} 
          onChangeText={handleProductValueChange} 
          placeholder="Valor do Produto"
          keyboardType={'numeric'}
          clearButtonMode="always"
          value={valor} />
        
        <TextInput 
          style={styles.input} 
          onChangeText={handleQuantityChange}  
          placeholder="Digite a quantidade" 
          keyboardType={'numeric'}
          clearButtonMode="always"
          value={quantidade} /> 
        
        <Text>Data de Entrega</Text>
        <DatePicker
          date={data_entrega}
          onDateChange={setDataEntrega}
        />

        <TouchableOpacity style={styles.button} onPress={handleButtonPress}> 
          <Text style={styles.buttonText}>Salvar</Text> 
        </TouchableOpacity> 
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D93600',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
  },
  inputContainer: {
    flex: 1,
    marginTop: 30,
    width: '90%',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
  input: {
    marginTop: 10,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'stretch'
  },
  button: {
    marginTop: 10,
    height: 60,
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowOpacity: 20,
    shadowColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  }
});