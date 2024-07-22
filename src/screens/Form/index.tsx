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
import { ScrollView } from "react-native";

interface ITask {
  id: string;
  title: string;
}

export const Form = () => {
  const [newTask, setNewTask] = useState("");
  const [task, setTask] = useState<ITask[]>([]);

  const addTask = () => {
    const data = {
      id: String(new Date().getTime()),
      title: newTask ? newTask : "Tarefa vazia",
    };
    setTask([data, ...task]);
  };

  return (
    <FormContainer>
      <Header />
      <FormContent>
        <Input onChangeText={setNewTask} />
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
