import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles";
import { AppContext } from "../contexts/AppContext";

export default function ProfileScreen() {

  const { setIsLoggedIn } = useContext(AppContext);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <View style={styles.homeContainer}>

      <Text style={styles.homeTitle}>Profile</Text>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>

    </View>
  );
}