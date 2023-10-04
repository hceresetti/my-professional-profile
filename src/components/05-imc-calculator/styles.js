import { StyleSheet } from "react-native"

const styles = StyleSheet.create(
  {
    tile: {
      flex: 1,
      backgroundColor: "#FFF",
    },
    
    enter: {
      flexDirection: "row",
    },

    input: {
      height: 80,
      textAlign: "center",
      width: "50%",
      fontSize: 50,
      marginTop: 34,
    },

    btn: {
      backgroundColor: "#9ACD32",
    },
    
    btnText: {
      textAlign: "center",
      padding: 30,
      fontSize: 25,
      fontWeight: "bold",
      color: "green",
    },
    
    result: {
      alignSelf: "center",
      color: "lightgrey",
      fontSize: 45,
      fontWeight: "bold",
      padding: 6,
    },
  }
)

export {styles}
