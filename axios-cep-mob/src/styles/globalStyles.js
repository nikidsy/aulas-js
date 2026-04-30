import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEF1F5',
        alignItems: 'center',
        paddingTop: 40,
    },

    titulo: {
        fontSize: 26,
        fontWeight: '700',
        color: '#1E293B',
        marginBottom: 20,
        letterSpacing: 0.5,
    },

    input: {
        height: 50,
        width: '90%',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        paddingHorizontal: 15,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },

    botao: {
        marginTop: 15,
        backgroundColor: '#5B21B6',
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 12,
        elevation: 3,
    },

    textoBotao: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },

    card: {
        width: '90%',
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 20,
        marginTop: 20,

        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },

        elevation: 4,
    },

    texto: {
        fontSize: 16,
        color: '#475569',
        marginBottom: 6,
        lineHeight: 22,
    },

    destaque: {
        fontWeight: '600',
        color: '#0F172A',
    },

    erro: {
        color: 'red',
        marginTop: 20,
        fontSize: 16,
    }
});