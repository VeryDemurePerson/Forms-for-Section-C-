import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const LandingPage = () => {
  const router = useRouter(); //  Used for screen navigation with expo-router

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to our App</Text>

      {/*  Sign In Navigation Button */}
      <TouchableOpacity
        onPress={() => router.push("./sign-in")}
        style={styles.button}
      >
        <Ionicons name="log-in-outline" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Sign Up Navigation Button */}
      <TouchableOpacity
        onPress={() => router.push("./sign-up")}
        style={styles.button}
      >
        <MaterialIcons name="person-add-alt-1" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/*  Employee Form Navigation Button */}
      <TouchableOpacity
        onPress={() => router.push("./employee-form")}
        style={styles.button}
      >
        <FontAwesome5 name="user-tie" size={18} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Employee Form</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
    backgroundColor: "#F0F4F8", // Light background
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 40,
  },
  button: {
    flexDirection: "row", //  Place icon and text in row
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8, // Space between icon and text
  },
  icon: {
    marginRight: 4, // Slight spacing between icon and text
  },
});
