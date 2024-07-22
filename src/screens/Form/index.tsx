import { Button, Header, Input } from "../../components";
import { FormContainer, FormContent, Tasks, TasksContent } from "./styles";

export const Form = () => {
  return (
    <FormContainer>
      <Header />
      <FormContent>
        <Input />
        <Button title="+" />
      </FormContent>
      <TasksContent>
        <Tasks>tarefa 01</Tasks>
      </TasksContent>
    </FormContainer>
  );
};
