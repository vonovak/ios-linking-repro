import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
// import {Ionicons} from "@expo/vector-icons";
// import IconFA from "@react-native-vector-icons/fontawesome6";
// import IconZoc from "@react-native-vector-icons/zocial";
import IconSL from "@react-native-vector-icons/simple-line-icons";
import {setDynamicLoadingEnabled} from "@react-native-vector-icons/common";
// setDynamicLoadingEnabled(true);

import {isLoaded, getLoadedFonts} from "expo-font";
import { useEffect } from "react";

export default function App() {
    console.log({loadedFonts: getLoadedFonts()})
    useEffect(() => {
        setTimeout(() => {
            console.log({loadedFonts: getLoadedFonts()})
        },1000)
    }, []);
  // const [loaded, error] = useFonts({
  //   ionicons: require("./node_modules/react-native-vector-icons/Fonts/Ionicons.ttf"),
  //   // ionicons: require("./node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf"),
  //   // MaterialIcons: require("./node_modules/react-native-vector-icons/Fonts/MaterialIcons.ttf"),
  //   // AntDesign: require("./node_modules/react-native-vector-icons/Fonts/AntDesign.ttf"),
  // });

  // if (!loaded && !error) {
  //   return null;
  // }

  return (
    <View style={styles.container}>
        {/*<Ionicons name="person" size={40} color="#333" />*/}
        {/*<IconFA name="address-book" size={40} color="#333" />*/}
        {/*<IconZoc name="amazon" size={40} color="#333" />*/}
        <IconSL name="user" size={40} color="#333" />
      {/* <IconM name="123" color="#4F8EF7" size={30} /> */}
      {/* <IconAD name="upcircleo" color="#4F8EF7" size={30} /> */}
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button
        title="fetch Ionicons"
        onPress={() => {
          const is = isLoaded("ionicons");
          alert(String(is));
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
