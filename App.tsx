import {
  useFonts,
  RobotoMono_400Regular,
  RobotoMono_600SemiBold,
  RobotoMono_700Bold,
} from "@expo-google-fonts/roboto-mono";
import * as SplashScreen from "expo-splash-screen";
import { ThemeProvider } from "styled-components";
import theme from "./src/components/theme/theme";
import { Form } from "./src/screens";

export default function App() {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    RobotoMono_400Regular,
    RobotoMono_600SemiBold,
    RobotoMono_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();
  return (
    <ThemeProvider theme={theme}>
      <Form />
    </ThemeProvider>
  );
}
