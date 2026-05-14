import { SafeAreaView } from 'react-native';
import CardEndereco from '../components/CardEndereco';
import { globalStyles } from '../styles/globalStyles';

export default function DetailScreen({ route }) {
    const { endereco } = route.params;

    return (
        <SafeAreaView style={globalStyles.container}>
            <CardEndereco endereco={endereco} />
        </SafeAreaView>
    );
}