import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './style.js';

export default function AddTask({ visible, onSave, onClose }) {
    const [task, setTask] = useState({
        title: '',
        description: '',
        priority: '',
        start: '',
        end: ''
    });

    const handleSave = () => {
        onSave(task);
        setTask({ title: '', description: '', priority: '', start: '', end: '' });
    };

    return (
      <Modal visible={visible} animationType='slide'>
          <View style={styles.modal}>
              <Text style={styles.title}>
                  Nova Tarefa
              </Text>
              <TextInput style={styles.input} placeholder='Título' onChangeText={t => setTask({
                  ...form, title: t})}/>
              <TextInput style={styles.input} placeholder='Descrição' onChangeText={t => setTask({
                  ...form, description: t})}/>
              <TextInput style={styles.input} placeholder='Prioridade' onChangeText={t => setTask({
                  ...form, priority: t})}/>
              <TextInput style={styles.input} placeholder='Data de Início: DD/MM' onChangeText={t => setTask({
                  ...form, start: t})}/>
              <TextInput style={styles.input} placeholder='Data de Fim: DD/MM' onChangeText={t => setTask({
                  ...form, end: t})}/>
              <TouchableOpacity style={styles.btnSave} onPress={ handleSave }>
                  <Text>Salvar Tarefa</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={ onClose }>
                  <Text style={styles.txtCancelar}>Cancelar</Text>
              </TouchableOpacity>
          </View>
      </Modal>
    );
}