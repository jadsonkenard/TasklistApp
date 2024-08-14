import { useState } from "react";
import { Button, Header, Input } from "../../components";
import {
  FormContainer,
  FormContent,
  TaskButton,
  Task,
  TitleTasks,
  TitleContent,
} from "./styles";
import { Alert, ScrollView } from "react-native";

interface ITask {
  id: string;
  title: string;
}

export const Form = () => {
  const [newTask, setNewTask] = useState("");
  const [task, setTask] = useState<ITask[]>([]);

  const addTask = () => {
    if(newTask == ""){
      Alert.alert("Atenção", "Insira uma tarefa válida")
      return
    }
    const data = {
      id: String(new Date().getTime()),
      title: newTask,
    };
    setTask([data, ...task]);
    console.log(data.id)
    console.log(data.title)
    setNewTask("")
  };


  return (
    <FormContainer>
      <Header />
      <FormContent>
        <Input placeholder="Nova tarefa" onChangeText={setNewTask} value={newTask}/>
        <Button title="+" onPress={addTask} />
      </FormContent>
      <TitleContent>
        <TitleTasks>Minhas tarefas</TitleTasks>
      </TitleContent>
      <ScrollView showsVerticalScrollIndicator={false}>
      {task.map((item) => (
        
        <TaskButton key={item.id}>
          <Task>{item.title}</Task>
        </TaskButton>
        
      ))}
      </ScrollView>
    </FormContainer>
  );
};
