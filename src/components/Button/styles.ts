import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const TouchableOpacity = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.colors.primary};
    width: ${RFValue(45)}px;
    height: ${RFValue(45)}px;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
`
export const Text = styled.Text`
    color: #fff;
    font-size: ${RFValue(18)}px;
`