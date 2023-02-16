import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled3 = ({
  route
}) => {
  const {} = route.params || {};
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }} style={styles.JWjAuWsR}><View style={styles.qtjiOGuV}></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  JWjAuWsR: {
    borderWidth: 0,
    backgroundColor: "#132714",
    width: 358,
    height: 574,
    borderRadius: 0
  },
  MtRSrxFn: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 69,
    color: "#777777",
    position: "absolute",
    transform: "rotate(12deg)",
    top: 192,
    left: 86
  },
  qtjiOGuV: {
    height: 60,
    width: 140,
    backgroundColor: "#d91f1f",
    borderRadius: 0,
    color: "#777777"
  }
});
export default Untitled3;