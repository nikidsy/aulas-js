import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { theme } from "./src/styles/global";
import AddTask from "./src/components/AddTask";
import EditTask from "./src/components/EditTask";
import SearchBar from "./src/components/SearchBar";
import TaskCard from "./src/components/TaskCard";

export default function App() {

    const [task, setTask] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [addVisible, setAddVisbile] = useState(false);
    const [editVisible, setEditVisible] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    const addTask = (newTask) => {
        setTask([...task, {newTask, id: Date.now().toString() }]);
        setAddVisbile(false);
    }

    const updateTask = (updatedTask) => {
        setTask(task.map(t => t.id === updatedTask.id ? updatedTask: t));
        setAddVisbile(false);
    }

    const deleteTask = (id) => setTask(task.filter(t => t.id !== id));


    const filterTask = task.filter(t => t.title.toLowerCase().includes(searchText.toLowerCase()));

    return (
        <View style={styles.container}>
            <Text style={styles.header}>ToDo List</Text>
            <SearchBar value={searchText} onChangeText={setSearchText} />
            <FlatList data={filterTask} keyExtractor={item => item.id} renderItem={({ item }) => (
                    <TaskCard item={ item } onDelete={deleteTask} onEdit={openEdit} />
                )} />
            <TouchableOpacity style={styles.button} onPress={() => setAddVisbile(true)}>
                <Text style={styles.add}>+</Text>
            </TouchableOpacity>
            <AddTask visible={addVisible} onSave={addTask} onClose={() => setAddVisbile(false)} />
            <EditTask visible={editVisible} taskData={selectedTask} onSave={updateTask} onClose={() => setEditVisible(false)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        padding: 20,
        paddingTop: 60
    },
    header: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20
    },
    button: {
        position: "absolute",
        bottom: 30,
        right: 30,
        backgroundColor: theme.colors.background,
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center"
    }
});