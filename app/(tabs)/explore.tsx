import { ExternalLink } from "@/components/external-link";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Collapsible } from "@/components/ui/collapsible";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { AppStyles } from "../../assets/styles/AppStyles";

export default function ExploreRiahScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#ffd6f4", dark: "#3a2a36" }}
      headerImage={
        <IconSymbol
          size={260}
          color="#ff8ad6"
          name="person.crop.circle"
          style={styles.headerImage}
        />
      }
    >
      {/* TITLE */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{ fontFamily: "Floraison" }}>
          Explore Riah ✨
        </ThemedText>
      </ThemedView>

      {/* PROFILE CARD */}
      <ThemedView style={AppStyles.card}>
        <ThemedText style={AppStyles.text}>Riah Ulina</ThemedText>
        <ThemedText style={{ opacity: 0.7 }}>
          Mobile Developer Learner
        </ThemedText>
      </ThemedView>

      {/* ABOUT */}
      <Collapsible title="About Me">
        <ThemedText style={AppStyles.text}>
          Halo, saya Riah. Saya adalah mahasiswa yang memiliki minat besar di
          bidang Mobile Development. Saat ini saya mempelajari React Native dan
          Expo untuk membangun aplikasi mobile modern dan interaktif. Saya juga
          tertarik pada UI/UX dan menggunakan Figma untuk merancang desain
          aplikasi sebelum diimplementasikan ke dalam kode. Saya senang belajar
          teknologi baru dan bercita-cita menjadi Mobile Developer profesional.
        </ThemedText>
      </Collapsible>

      {/* SKILLS */}
      <Collapsible title="Skills">
        <ThemedView style={AppStyles.list}>
          <ThemedText>💻 C++</ThemedText>
          <ThemedText>🐘 PHP</ThemedText>
          <ThemedText>🚀 Laravel</ThemedText>
          <ThemedText>🗄️ MySQL</ThemedText>
          <ThemedText>🏛️ Oracle</ThemedText>
          <ThemedText>🔧 Git</ThemedText>
        </ThemedView>
      </Collapsible>

      {/* SOCIAL */}
      <Collapsible title="Connect With Me">
        <ThemedView style={AppStyles.list}>
          <ExternalLink href="https://www.linkedin.com/in/riah-ulina-17b92032b">
            <ThemedText type="link">💼 LinkedIn</ThemedText>
          </ExternalLink>

          <ExternalLink href="https://github.com/Riahulina">
            <ThemedText type="link">💻 GitHub</ThemedText>
          </ExternalLink>

          <ExternalLink href="https://www.instagram.com/yuknow_riahhhh">
            <ThemedText type="link">📸 Instagram</ThemedText>
          </ExternalLink>
        </ThemedView>
      </Collapsible>

      <TouchableOpacity style={AppStyles.button1} onPress={() => router.back()}>
        <Text style={AppStyles.buttonText}>Kembali</Text>
      </TouchableOpacity>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    bottom: -60,
    alignSelf: "center",
    position: "absolute",
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
});
