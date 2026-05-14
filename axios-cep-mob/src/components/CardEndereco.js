import { View, Text } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function CardEndereco({ endereco }) {
    return (
        <View style={globalStyles.card}>
            <Text>CEP: {endereco.cep}</Text>
            <Text>Rua: {endereco.logradouro}</Text>
            <Text>Bairro: {endereco.bairro}</Text>
            <Text>Cidade: {endereco.localidade}</Text>
            <Text>UF: {endereco.uf}</Text>
        </View>
    );
}