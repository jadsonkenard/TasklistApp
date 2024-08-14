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
export const TitleContent = styled.View`
  width: ${RFValue(260)}px;
`;
export const TitleTasks = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
export const TaskButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.light};
  width: ${RFValue(260)}px;
  height: ${RFValue(40)}px;
  margin: ${RFValue(5)}px;
  border-radius: 6px;
  justify-content: center;
  padding-left: ${RFValue(10)}px;
`;
export const Task = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;
