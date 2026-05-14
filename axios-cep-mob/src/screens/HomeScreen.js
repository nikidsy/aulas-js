import { useState, useEffect } from 'react';
import {
    Text,
    SafeAreaView,
    TouchableOpacity,
    ActivityIndicator,
    FlatList
} from 'react-native';

import api from '../services/api';
import InputCEP from '../components/InputCEP';
import { globalStyles } from '../styles/globalStyles';

export default function HomeScreen({ navigation }) {
    const [cep, setCep] = useState('');
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState(false);
    const [historico, setHistorico] = useState([]);

    async function buscarCEP() {
        if (cep.length !== 8) {
            setErro(true);
            return;
        }

        setLoading(true);
        setErro(false);

        try {
            const response = await api.get(`${cep}/json/`);

            if (response.data.erro) {
                setErro(true);
            } else {
                setHistorico(prev => [response.data, ...prev]);

                navigation.navigate('Detalhes', {
                    endereco: response.data
                });
            }
        } catch {
            setErro(true);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (cep.length === 8) {
            buscarCEP();
        }
    }, [cep]);

    return (
        <SafeAreaView style={globalStyles.container}>
            <Text style={globalStyles.titulo}>Buscar CEP</Text>

            <InputCEP value={cep} onChange={setCep} />

            <TouchableOpacity style={globalStyles.botao} onPress={buscarCEP}>
                <Text style={globalStyles.textoBotao}>Buscar</Text>
            </TouchableOpacity>

            {loading && <ActivityIndicator size="large" />}

            {erro && <Text style={globalStyles.erro}>Erro ao buscar CEP</Text>}

            <FlatList
                data={historico}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Text
                        style={{ marginTop: 10 }}
                        onPress={() =>
                            navigation.navigate('Detalhes', { endereco: item })
                        }
                    >
                        {item.cep} - {item.localidade}
                    </Text>
                )}
            />
        </SafeAreaView>
    );
}