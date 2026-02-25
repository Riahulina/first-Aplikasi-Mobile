import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { Text } from "react-native";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Floraison: require("../assets/fonts/FloraisondesAmours.ttf"),
    Poppins: require("../assets/fonts/PoppinsRegular.ttf"),
    PoppinsBold: require("../assets/fonts/PoppinsBold.ttf"),
    SuperPopstar: require("../assets/fonts/SuperPopstar.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
