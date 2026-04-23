import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
    },
    input: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginTop: 60,
        borderRadius: 8,
        backgroundColor: '#fff'
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 20,
        textAlign: 'center',
        color: '#333',
    },
    card: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 15,
        elevation: 3,
    },
    texto: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333'
    }
});