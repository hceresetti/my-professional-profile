import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
   },
  title: {
    fontSize: 20,
    marginVertical: 10,
   },
   inputTile: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
   },
   btnTile: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
   },
   btn: {
    width: 100,
   },
   input: {
    width: 50,
    textAlign: "center",
   },
   summaryTile: {
    marginTop: 20,
    alignItems: "center"
   }
});

export default StartGameScreen;
