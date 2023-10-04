import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  sliderText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 12,
  },
  switchTile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  switchLabel: {
    flex: 1,
    fontSize: 16,
  },
  switch: {
    flex: 1,
  },
  switchText: {
    fontSize: 16,
  },
  submittedData: {
    marginTop: 16,
  },
  submittedDataHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  submittedDataText: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export { styles }
