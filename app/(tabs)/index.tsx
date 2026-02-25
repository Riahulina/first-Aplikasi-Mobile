import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { AppStyles } from "../../assets/styles/AppStyles";

export default function HomeScreen() {
  return (
    <LinearGradient colors={["#fd9ed1", "#fcd9f8"]} style={AppStyles.container}>
      <View style={[AppStyles.card, AppStyles.center]}>
        <Text style={AppStyles.buttonText1}>Hallo</Text>
        <Text style={AppStyles.buttonText1}>✨This My First App✨</Text>

        <Text style={AppStyles.text}>My Name is Riah Ulina 💙</Text>
        <Text style={AppStyles.text}>MI-4A</Text>

        <Text style={AppStyles.text}>My Experience in Mobile Dev 🚀</Text>

        <Link href="/AboutScreen" asChild>
          <TouchableOpacity style={AppStyles.button}>
            <Text style={AppStyles.buttonText1}>Kenal Saya Lebih Dekat</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/explore" asChild>
          <TouchableOpacity style={AppStyles.button}>
            <Text style={AppStyles.buttonText1}>Terhubung Dengan Saya</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </LinearGradient>
  );
}
