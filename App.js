import { StatusBar } from "expo-status-bar";
import { useState, useEffect, useRef } from "react";

import { StyleSheet, Text, View, Platform } from "react-native";
import NotificationContainer from "./comp/NotificationContainer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const obj = {
  id: 1,
  title: "Random JSON Example",
  hint: "This is a hint",
  direction: "North",
  url: "https://example.com",
  AlreadySaved: true,
  imageurl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiyIK6lw7E4PWgSvrHUftodq9HVvl5ZPkHnvV-xW5d2w&s",
  ShortDescription:
    "A short description of the  thethethe contentcontentcontentcontentcontentcontentcontentcontentcontentcontent contentcontentcontentcontentcontentcontentcontentcontentcontent",
  Content:
    "<div><p>This is some text in a paragraph.</p> <img src='https://www.google.com/logos/doodles/2024/celebrating-etel-adnan-6753651837110479-ldrk.png'></div>",
};

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar style="auto" />
      <NotificationContainer item={obj}></NotificationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "gray",
    paddingTop: 30,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
