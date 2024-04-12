import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, DefaultTheme , DarkTheme} from "@react-navigation/native";
import { Screen } from "./screeens/screen";
import { Header, getHeaderTitle } from '@react-navigation/elements';

const Drawer = createDrawerNavigator();




export default function App() {
  const scheme = useColorScheme()
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Drawer.Navigator screenOptions={{
        headerStyle:{
          // backgroundColor:'#ff9933',
        },
        drawerContentStyle:{
          // backgroundColor: "#fff3e6"
        },
        drawerLabelStyle:{
          color:'black'
        },
        overlayColor: 1,
        drawerActiveTintColor: '#ff9933', // Color of active text
        sceneContainerStyle: true,
      }} initialRouteName="Home">
        <Drawer.Screen
          style={styles.container}
          name="smoke"
          component={Screen}
          initialParams={{
            color: "green",
            value: 30,
            name: "smoke"
          }}
        />
        <Drawer.Screen
          name="gas"
          component={Screen}
          initialParams={{
            color: "#ff1a1a",
            value: 60,
            name: "gas"
          }}
        />
        <Drawer.Screen
          name="methane"
          component={Screen}
          initialParams={{
            color: "#ff9c33",
            value: 45,
            name: "methane"
          }}
        />
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "black",
    color: "white"
    // alignItems: "center",
    // justifyContent: "center",
  },
});
