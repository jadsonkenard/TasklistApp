import { useState } from "react";
import { Button, Header, Input } from "../../components";
import { FormContainer, FormContent, TaskButton, Task } from "./styles";

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
      {task.map((item) => (
        <TaskButton>
          <Task>{item.title}</Task>
        </TaskButton>
      ))}
    </FormContainer>
  );
};
