import { StyleSheet } from "react-native";

export const AppStyles = StyleSheet.create({
  /* LAYOUT */
  container: {
    flex: 1,
  },

  center: {
    justifyContent: "center",
    alignItems: "center",
  },

  /* CARD */
  card: {
    backgroundColor: "#f390dd",
    margin: 25,
    padding: 25,
    borderRadius: 20,
    alignItems: "center",
    elevation: 6,
  },

  section: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
  },

  /* TEXT */
  title: {
    fontSize: 26,
    fontFamily: "Floraison",
    marginBottom: 10,
    textAlign: "center",
  },

  text: {
    fontSize: 15,
    fontFamily: "Poppins",
    color: "#444",
    textAlign: "center",
  },
  text1: {
    fontSize: 15,
    fontFamily: "Poppins",
    color: "#444",
    textAlign: "justify",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "PoppinsBold",
  },
  buttonText1: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "SuperPopstar",
  },

  /* BUTTON */
  button: {
    backgroundColor: "#ec4ec2",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
  },
  button1: {
    backgroundColor: "#f390dd",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
  },

  /* LIST */
  list: {
    gap: 10,
    marginTop: 6,
  },
});
