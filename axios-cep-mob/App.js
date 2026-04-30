import { useState } from 'react';
import { Text, View, TextInput, SafeAreaView, ActivityIndicator, TouchableOpacity } from 'react-native';
import api from './src/services/api';
import { globalStyles } from "./src/styles/globalStyles";

export default function App() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(false);

  async function buscarCEPManual() {
    if (cep.length !== 8) {
      setErro(true);
      setEndereco(null);
      return;
    }

    setLoading(true);
    setErro(false);

    try {
      const response = await api.get(`${cep}/json/`);
      setEndereco(response.data);
    } catch (error) {
      setErro(true);
      setEndereco(null);
    } finally {
      setLoading(false);
    }
  }

  return (
      <SafeAreaView style={globalStyles.container}>

        <Text style={globalStyles.titulo}>Buscar CEP</Text>

        <TextInput
            style={globalStyles.input}
            placeholder="Digite o CEP"
            value={cep}
            onChangeText={setCep}
            keyboardType="numeric"
            maxLength={8}
        />

        <TouchableOpacity
            style={globalStyles.botao}
            onPress={buscarCEPManual}
        >
          <Text style={globalStyles.textoBotao}>Buscar</Text>
        </TouchableOpacity>

        {loading && (
            <ActivityIndicator size="large" color="#3B82F6" style={{ marginTop: 20 }} />
        )}

        {erro && !loading && (
            <Text style={globalStyles.erro}>
              Digite um CEP válido ou verifique sua conexão
            </Text>
        )}

        {endereco && !endereco.erro && !loading && (
            <View style={globalStyles.card}>
              <Text style={globalStyles.texto}>
                <Text style={globalStyles.destaque}>CEP:</Text> {endereco.cep}
              </Text>
              <Text style={globalStyles.texto}>
                <Text style={globalStyles.destaque}>Rua:</Text> {endereco.logradouro}
              </Text>
              <Text style={globalStyles.texto}>
                <Text style={globalStyles.destaque}>Bairro:</Text> {endereco.bairro}
              </Text>
              <Text style={globalStyles.texto}>
                <Text style={globalStyles.destaque}>Cidade:</Text> {endereco.localidade}
              </Text>
              <Text style={globalStyles.texto}>
                <Text style={globalStyles.destaque}>Estado:</Text> {endereco.uf}
              </Text>
            </View>
        )}

        {endereco?.erro && !loading && (
            <Text style={globalStyles.erro}>
              CEP não encontrado
            </Text>
        )}

      </SafeAreaView>
  );
}