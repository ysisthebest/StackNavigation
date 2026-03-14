import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

export default function HomeScreen() {
  return (
    <View style={styles.homeContainer}>

      <Text style={styles.homeTitle}>
        Chào mừng bạn
      </Text>

      <Text style={styles.homeDesc}>
        Bạn đã đăng nhập thành công vào ứng dụng
      </Text>

    </View>
  );
}