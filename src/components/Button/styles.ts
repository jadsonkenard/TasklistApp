import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const TouchableOpacity = styled.TouchableOpacity`
    background-color: blue;
    width: ${RFValue(300)}px;
    height: 45px;
    align-items: center;
    justify-content: center;
`
export const Text = styled.Text`
    color: #fff;
    font-size: ${RFValue(18)}px;
`