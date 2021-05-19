import React from "react";

import {
  Button,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
} from "react-native";

import { Background_home } from "src/assets/images";
import styles from "src/assets/App";

export type Props = {
  navigation: any;
};

const Searchpage: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={Background_home} style={styles.imageBackground}>
        {/* <ScrollView> */}
        <View>
          <Text>SEARCH</Text>
          <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
        </View>
        {/* </ScrollView> */}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Searchpage;
