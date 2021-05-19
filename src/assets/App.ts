import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  loadingText: {
    alignSelf: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  imageLogo: {
    alignSelf: "center",
    marginBottom: 80,
    width: 150,
    height: 110,
  },
  searchContainer: {
    position: "relative",
    width: "70%",
    alignSelf: "center",
    borderColor: "#fff",
  },
  searchInput: {
    borderBottomWidth: 2,
    borderColor: "#86ac94",
    backgroundColor: "#476954",
    color: "#fff",
    borderRadius: 5,
    paddingVertical: 12,
    fontSize: 16,
    paddingHorizontal: 15,
    marginBottom: 40,
  },
  searchError: {
    position: "absolute",
    alignSelf: "center",
    color: "red",
    fontStyle: "italic",
    fontSize: 14,
    bottom: 60,
  },
  searchButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderColor: "#4c5367",
    backgroundColor: "#2E323E",
    borderRadius: 5,
    paddingVertical: 14,
  },
  searchButtonText: {
    alignSelf: "center",
    color: "#fff",
    fontWeight: "bold",
  },
  cursusLevel: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 15,
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "90%",
    borderRadius: 100,
    height: 25,
  },
  cursusLevelText: {
    color: "#fff",
    fontSize: 18,
    position: "absolute",
  },
  cursusList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "95%",
    marginVertical: 15,
  },
  cursusButton: {
    display: "flex",
    borderColor: "#ffffff",
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    padding: 10,
  },
  cursusButtonText: {
    color: "#000",
    fontWeight: "bold",
  },
});

export default styles;
