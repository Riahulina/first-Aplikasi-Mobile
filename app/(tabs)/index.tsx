import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <LinearGradient colors={["#f62594", "#e897df"]} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Hallo</Text>
        <Text style={styles.title}>✨This My First App✨</Text>

        <Text style={styles.name}>My Name is Riah Ulina 💙</Text>
        <Text style={styles.name}>MI-4A</Text>

        <Text style={styles.subtitle}>My Experience in Mobile Dev 🚀</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Mulai</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  card: {
    backgroundColor: "#f9b1ea",
    margin: 25,
    padding: 30,
    borderRadius: 20,
    alignItems: "center",
    elevation: 6,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },

  name: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },

  subtitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 25,
  },

  button: {
    backgroundColor: "#2575fc",
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 25,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
