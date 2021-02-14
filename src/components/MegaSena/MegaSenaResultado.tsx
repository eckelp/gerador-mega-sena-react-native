import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default (props: any) => {

  const exibirNumeros = () => {
    return props.numeros.map((numero: any) => (
      <View style={style.Bola} key={numero}>
        <Text style={style.Numero}>{numero}</Text>
      </View>
    ))
  }

  return (
    <View style={style.Container}>
      {exibirNumeros() }
    </View>
  )
}

const style = StyleSheet.create({
  Container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5
  },
  Bola: {
    height: 50,
    width: 50,
    backgroundColor: "#000",
    borderRadius: 25,
    margin: 5,
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Numero: {
    color: "#fff"
  }
});

