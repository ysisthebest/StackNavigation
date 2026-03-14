import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

import styles from '../styles';
import { validatePhone, formatPhone } from '../validate';

export default function LoginScreen({ navigation }) {

  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleChange = (text) => {

    const formatted = formatPhone(text);
    setPhone(formatted);

    const result = validatePhone(formatted);

    setMessage(result.message);
    setIsValid(result.valid);
  };

  const handleContinue = () => {

    const result = validatePhone(phone);

    if (!result.valid) {
      setMessage(result.message);
      setIsValid(false);
      return;
    }

    navigation.navigate("Home");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={20}
    >

      <View style={styles.top}>

        <Text style={styles.title}>Đăng nhập</Text>

        <Text style={styles.label}>Nhập số điện thoại</Text>

        <Text style={styles.desc}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản
        </Text>

        <TextInput
          style={[
            styles.input,
            message !== '' && !isValid && styles.inputError
          ]}
          placeholder="Nhập số điện thoại của bạn"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={handleChange}
          maxLength={12}
        />

        {message !== '' && (
          <Text style={isValid ? styles.successText : styles.errorText}>
            {message}
          </Text>
        )}

      </View>

      <View style={styles.bottom}>
        <TouchableOpacity
          style={[styles.button, !isValid && styles.disabled]}
          disabled={!isValid}
          onPress={handleContinue}
        >
          <Text style={styles.buttonText}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  );
}