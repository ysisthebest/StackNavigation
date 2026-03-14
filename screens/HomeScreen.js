import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeContainer}>

      <Text style={styles.homeTitle}>
        Chào mừng bạn
      </Text>

      <Text style={styles.homeDesc}>
        Bạn đã đăng nhập thành công vào ứng dụng
      </Text>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Đăng xuất</Text>
      </TouchableOpacity>

    </View>
  );
}