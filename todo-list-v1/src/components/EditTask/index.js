import React, { useState, useEffect } from "react";
import { Modal, View, Text, TextInput, TouvhableOpacity } from 'react-native';
import styles from "./style";

export default function EditTask({ visible, taskData, onSave, onClose }) {

    const [currentTask, setCurrentTask] = useState(taskData);

    useEffect(() => {setCurrentTask(taskData);},[taskData]);

    return (
        <Modal visible={visible} animationType={'fade'}>
            <View styl={styles.modal}>
                <Text style={styles.titulo}>Editar Tarefa</Text>
                <TextInput value={currentTask?.title} style={styles.title} onChangeText={t => setCurrentTask({...currentTask, title: t})}></TextInput>
                <TextInput value={currentTask?.description} style={styles.desc} onChangeText={t => setCurrentTask({...currentTask, description: t})}></TextInput>
                <TouvhableOpacity style={syles.button} onPres={() => onSave(currentTask)}>
                    <Text>Atualizar</Text>
                </TouvhableOpacity>
                <TouvhableOpacity style={styles.buton} onPress={onClose}>
                    <Text> Voltar</Text>
                </TouvhableOpacity>
            </View>
        </Modal>
    )
}