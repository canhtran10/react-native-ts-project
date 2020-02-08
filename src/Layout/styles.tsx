import {StyleSheet} from "react-native";

export const stylesGlobal = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  buttons: {
    flexDirection: 'row',
    minHeight: 70,
    alignItems: 'stretch',
    alignSelf: 'center',
    borderWidth: 5,
  },
  button: {
    flex: 1,
    paddingVertical: 0,
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold',
  },
  font: {},
  textLabel: {},
  textInput: {}
});
