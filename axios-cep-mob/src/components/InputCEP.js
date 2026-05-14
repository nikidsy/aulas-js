import { TextInput } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function InputCEP({ value, onChange }) {
    return (
        <TextInput
            style={globalStyles.input}
            placeholder="Digite o CEP"
            value={value}
            onChangeText={onChange}
            keyboardType="numeric"
            maxLength={8}
        />
    );
}