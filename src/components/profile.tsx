import React, { useEffect, useState } from "react";

import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";

import styles from "src/assets/App";
import { Background_home } from "src/assets/Images";

export type Props = {
  navigation: any;
  route: any;
};

const HomeScreen: React.FC<Props> = ({ route, navigation }) => {
  const [currentCursus, setCurrentCursus] = useState(21);
  const [cursusDatas, setCursusDatas] = useState<any>(false);
  const { response } = route.params;
  const location =
    response.data.location !== null ? response.data.location : "Unavailable";
  useEffect(() => {
    const newCursus = response.data.cursus_users.find(
      (e: any) => e.cursus_id === currentCursus
    );
    setCursusDatas(newCursus);
  }, [currentCursus]);

  return (
    <SafeAreaView style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <ImageBackground source={Background_home} style={styles.imageBackground}>
        <ScrollView>
          <View
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              borderColor: "#fff",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                paddingHorizontal: 10,
              }}
            >
              <View>
                <Text
                  style={{ fontSize: 15, color: "#fff", fontWeight: "bold" }}
                >
                  ₳ {response.data.wallet}
                </Text>
              </View>
              <View>
                <Text
                  style={{ fontSize: 15, color: "#fff", fontWeight: "bold" }}
                >
                  Points {response.data.correction_point}
                </Text>
              </View>
            </View>
            <View style={{ alignItems: "center" }}>
              <View style={{ paddingVertical: 10 }}>
                <Image
                  style={{ width: 150, height: 150, borderRadius: 100 }}
                  source={{
                    uri: response.data.image_url,
                  }}
                />
              </View>
              <View>
                <Text
                  style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}
                >
                  {response.data.last_name} {response.data.first_name}
                </Text>
              </View>
              {response.data.id === 20053 &&
                response.data.titles &&
                response.data.titles.length >= 2 && (
                  <View>
                    <Text
                      style={{
                        fontSize: 15,
                        color: "#fff",
                        fontWeight: "bold",
                      }}
                    >
                      {response.data.titles[1].name}
                    </Text>
                  </View>
                )}
              <View>
                <Text
                  style={{ fontSize: 15, color: "#fff", fontWeight: "bold" }}
                >
                  {response.data.login} - {location}
                </Text>
              </View>
              <View>
                <Text
                  style={{ fontSize: 15, color: "#fff", fontWeight: "bold" }}
                >
                  {response.data.email}
                </Text>
              </View>
            </View>
            <View style={styles.cursusLevel}>
              {cursusDatas && (
                <View
                  style={{
                    backgroundColor: "#33C47F",
                    width:
                      cursusDatas?.level >= 1
                        ? cursusDatas?.level.toString().split(".")[1] + "%"
                        : "0%",
                    position: "absolute",
                    height: 25,
                    left: 0,
                    borderRadius: 100,
                  }}
                ></View>
              )}
              <Text style={styles.cursusLevelText}>
                {cursusDatas && cursusDatas?.level}
              </Text>
            </View>
            <View style={styles.cursusList}>
              {response.data.cursus_users.length > 1 &&
                response.data.cursus_users.map((cursus: any, index: number) => (
                  <TouchableOpacity
                    key={index}
                    style={[styles.cursusButton]}
                    onPress={() => setCurrentCursus(cursus.cursus.id)}
                  >
                    <Text style={styles.cursusButtonText}>
                      {cursus.cursus.name}
                    </Text>
                  </TouchableOpacity>
                ))}
            </View>
            <View
              style={{
                width: "95%",
                marginVertical: 10,
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: 10,
                padding: 15,
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 25,
                    color: "#fff",
                    fontWeight: "bold",
                    textDecorationLine: "underline",
                    marginBottom: 10,
                  }}
                >
                  Skills
                </Text>
              </View>
              {cursusDatas &&
                cursusDatas?.skills.map((e: any, index: number) => (
                  <View
                    key={index}
                        style={{
                        display: "flex",
                        flexDirection: "column",
                        }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 15,
                          color: "rgba(255,255,255,1)",
                          marginVertical: 5,
                        }}
                      >
                        {e.name}{" "}
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,
                          color: "rgba(255,255,255,1)",
                          marginVertical: 5,
                          fontWeight: "bold",
                        }}
                        numberOfLines={1}
                      >
                        {e.level.toString().substring(0, 4)}
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 3,
                        backgroundColor: "#33C47F",
                        width:
                          e.level >= 0
                            ? e.level.toFixed(2).toString().split(".")[1] + "%"
                            : "0%",
                      }}
                    ></View>
                  </View>
                ))}
            </View>
            <View
              style={{
                width: "95%",
                marginVertical: 10,
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: 10,
                padding: 15,
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 25,
                    color: "#fff",
                    fontWeight: "bold",
                    textDecorationLine: "underline",
                    marginBottom: 10,
                  }}
                >
                  Projects
                </Text>
              </View>
              {response.data.projects_users.map((e: any, index: number) => (
                <View
                    key={index}
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      color: "rgba(255,255,255,1)",
                      marginVertical: 5,
                    }}
                  >
                    {e.project.name}{" "}
                  </Text>
                  {e["validated?"] ? (
                    <Text
                      style={{
                        fontSize: 15,
                        color: "green",
                        marginVertical: 5,
                        fontWeight: "bold",
                      }}
                    >
                      {e.final_mark}
                    </Text>
                  ) : e["validated?"] === false ? (
                    <Text
                      style={{
                        fontSize: 15,
                        color: "red",
                        marginVertical: 5,
                        fontWeight: "bold",
                      }}
                    >
                      {e.final_mark}
                    </Text>
                  ) : (
                    <Text
                      style={{
                        fontSize: 15,
                        color: "#fff",
                        marginVertical: 5,
                        fontWeight: "bold",
                      }}
                    >
                      Unmarked
                    </Text>
                  )}
                </View>
              ))}
            </View>
            <TouchableOpacity
              style={[styles.searchButton, { width: "95%" }]}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.searchButtonText}>BACK HOME</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;
