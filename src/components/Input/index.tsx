import { InputContainer } from "./styles";
import { TextInputProps } from "react-native";


export const Input = ({...props}: TextInputProps) => {
    return(
        <InputContainer {...props}>
        </InputContainer>
    )
}