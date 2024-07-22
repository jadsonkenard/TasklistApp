import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const FormContainer = styled.View`
  flex: 1;
  align-items: center;
`;
export const FormContent = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: ${RFValue(16)}px ${RFValue(16)}px;
`;
export const TasksContent = styled.View`
  background-color: ${({theme}) => theme.colors.light};
`
export const Tasks = styled.Text`
    
`