import { TouchableOpacity, Text } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface IButton extends TouchableOpacityProps {
    title: string;
}
export const Button = ({title, ...props}: IButton) => {
    return(
        <TouchableOpacity {...props}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}