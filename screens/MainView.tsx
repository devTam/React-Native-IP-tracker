import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ImageBackground,
  Button,
  TouchableOpacity,
  ImageComponent,
} from "react-native"
import React from "react"
import RightArrow from "../assets/icon-arrow.svg"

export default function MainView() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <ImageBackground
          source={require("../assets/pattern-bg-mobile.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <SafeAreaView>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
                marginTop: 30,
              }}
            >
              IP Address Tracker
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <TextInput
                style={{
                  backgroundColor: "white",
                  width: "60%",
                  alignSelf: "center",
                  padding: 10,
                  height: 50,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                }}
              />
              <TouchableOpacity
                style={{
                  height: 50,
                  backgroundColor: "#111",
                  padding: 5,
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  width: 50,
                }}
                onPress={() => console.log("search")}
              >
                <RightArrow />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
      <View style={styles.bottom}>
        {/* MAP View */}
        <Text>Map view</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    background: "url(../assets/pattern-bg.png)",
    height: "30%",
  },

  bottom: {
    backgroundColor: "blue",
    flex: 1,
  },
})
