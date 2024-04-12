import React from "react";
import { View, StyleSheet, } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";

export const Screen = ({ route }) => {
  const { color, value, name } = route.params;

  return (
    <View style={styles.view}>
      <View style={styles.container}>
        <CircularProgress
          value={value}
          title={`% ${name}`}
          radius={180}
          duration={2000}
          progressValueColor={color}
          maxValue={100}
          inActiveStrokeWidth={25}
          inActiveStrokeColor={color}
          inActiveStrokeOpacity={0.4}
          activeStrokeWidth={20}
          activeStrokeColor={color}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: "100%",
    height: "100%",
    overflowY: "hidden",
    overflowX: "hidden",
    backgroundColor: "#f2f2f2"

  },

  text: {
    color: "#161924",
    fontSize: 20,
    fontWeight: 500,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "150px"
  }
});
