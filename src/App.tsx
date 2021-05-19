import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import type { Node } from "react";
import { decode, encode } from "base-64";

import { ImageBackground, SafeAreaView, View, Text } from "react-native";

import Axios from "axios";

import Navigation from "src/navigation/Navigation";

import styles from "src/assets/App";
import { Background_home } from "src/assets/Images";
// import Example from "src/components/Example"

const App: () => Node = () => {
  const [Token, setToken] = useState<any>([]);

  if (!global.btoa) {
    global.btoa = encode;
  }

  if (!global.atob) {
    global.atob = decode;
  }
  // POST ENV
  useEffect(() => {
    Axios.request({
      // url: "/oauth/token",
      method: "post",
      baseURL: "https://api.intra.42.fr/oauth/token",
      auth: {
        username:
          "489a20190ddb89ccab6beda0ae313447ff35907230f4ae66482ad9853945d5be",
        password:
          "0d5d58a994464edcfac3c33d9c5c2db0e773d68004a91c34a375e367f1ba9cc7",
      },
      data: {
        grant_type: "client_credentials",
        scope: "public",
      },
    })
      .then((respose) => {
        setToken(respose.data);
      })
      .catch(function (error: string) {
        console.log("err post ", error);
      });
  }, []);

//   console.log("token", Token)

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={Background_home} style={styles.imageBackground}>
        {Token !== undefined ? (
          <Navigation token={Token.access_token} />
        ) : (
          <View>
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        )}
        {/* <Example name={"swifty companion"} /> */}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default App;
