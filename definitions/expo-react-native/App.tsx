import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Vibe Expo Template</Text>
      <Text style={styles.sub}>Scan the QR with Expo Go to preview this template.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 20, fontWeight: '600' },
  sub: { marginTop: 8, color: '#666' }
});
