import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const InputContainer = styled.TextInput`
  background-color: ${({theme}) => theme.colors.light};
  height: ${RFValue(45)}px;
  width: ${RFValue(250)}px;
  border-radius: 6px;
  border-bottom-width: 1px;
  border-color: ${({theme}) => theme.colors.primary};
`;
