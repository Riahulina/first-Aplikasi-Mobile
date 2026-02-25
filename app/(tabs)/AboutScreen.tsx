import { ThemedText } from "@/components/themed-text";
import { useRouter } from "expo-router";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { AppStyles } from "../../assets/styles/AppStyles";

export default function AboutScreen() {
  const router = useRouter();

  return (
    <ScrollView
      style={[AppStyles.container, { padding: 20, backgroundColor: "#ffe3f7" }]}
    >
      {/* TITLE */}
      <ThemedText type="title" style={AppStyles.title}>
        About Me 👩‍💻
      </ThemedText>

      {/* CARD */}
      <View style={AppStyles.card}>
        <ThemedText style={AppStyles.buttonText}>Riah Ulina</ThemedText>
        <ThemedText style={{ opacity: 0.7 }}>Mahasiswa MI-4A</ThemedText>
      </View>

      {/* ABOUT */}
      <View style={AppStyles.section}>
        <ThemedText style={[AppStyles.text, { fontSize: 18, marginBottom: 8 }]}>
          Tentang Saya
        </ThemedText>

        <ThemedText style={AppStyles.text1}>
          Halo, saya Riah. Saya adalah seorang mahasiswa yang memiliki minat
          besar di bidang teknologi, khususnya Mobile Development. Saat ini saya
          sedang mempelajari pengembangan aplikasi menggunakan React Native dan
          Expo untuk membuat aplikasi mobile yang modern dan interaktif. Saya
          juga tertarik pada desain antarmuka (UI/UX) dan sering menggunakan
          Figma untuk merancang tampilan aplikasi sebelum diimplementasikan ke
          dalam kode. Bagi saya, menggabungkan desain yang menarik dengan fungsi
          yang bermanfaat adalah hal yang sangat penting dalam pengembangan
          aplikasi. Saat ini saya terus mengembangkan kemampuan saya melalui
          proyek-proyek latihan seperti pembuatan aplikasi kasir, desain
          aplikasi, serta eksperimen fitur baru di React Native. Saya senang
          belajar hal baru, mencoba teknologi terbaru, dan berharap dapat
          menjadi Mobile Developer profesional di masa depan.
        </ThemedText>
      </View>

      {/* BUTTON */}
      <TouchableOpacity style={AppStyles.button1} onPress={() => router.back()}>
        <ThemedText style={AppStyles.buttonText}>Kembali</ThemedText>
      </TouchableOpacity>
    </ScrollView>
  );
}
