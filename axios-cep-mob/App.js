import { useState, useEffect } from 'react';
import { Text, View, TextInput, SafeAreaView } from 'react-native';
import api from './src/services/api';
import { globalStyles } from "./src/styles/globalStyles";

export default function App() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);

  useEffect(() => {
    async function buscarCEP() {
      if (cep.length === 8) {
        try {
          const response = await api.get(`${cep}/json/`);
          setEndereco(response.data);
        } catch (error) {
          console.error('Erro na requisição:', error);
        }
      } else {
        setEndereco(null);
      }
    }

    buscarCEP();
  }, [cep]);

  return (
      <SafeAreaView style={globalStyles.container}>

        <TextInput
            style={globalStyles.input}
            placeholder="Digite o CEP (somente números)"
            value={cep}
            onChangeText={setCep}
            keyboardType="numeric"
            maxLength={8}
        />

        <Text style={globalStyles.titulo}>Resultado</Text>

        {endereco && !endereco.erro && (
            <View style={globalStyles.card}>
              <Text style={globalStyles.texto}>CEP: {endereco.cep}</Text>
              <Text style={globalStyles.texto}>Rua: {endereco.logradouro}</Text>
              <Text style={globalStyles.texto}>Bairro: {endereco.bairro}</Text>
              <Text style={globalStyles.texto}>Cidade: {endereco.localidade}</Text>
              <Text style={globalStyles.texto}>Estado: {endereco.uf}</Text>
            </View>
        )}

        {endereco?.erro && (
            <Text style={globalStyles.texto}>CEP não encontrado</Text>
        )}

      </SafeAreaView>
  );
}