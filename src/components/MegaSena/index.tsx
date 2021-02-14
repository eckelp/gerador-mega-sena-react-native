import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import MegaSenaForm from './MegaSenaForm';
import MegaSenaResultado from "./MegaSenaResultado";

export default () => {

  const [numerosSorteados, setNumerosSorteados] = useState([]);

  const sortearNumeros = (quantidade: string) => {
    const numeros = Array(parseInt(quantidade))
      .fill(null)
      .reduce(numero => [...numero, sortearNumeroNaoExistente(numero)], [])
      .sort( (n1: number, n2: number) => n1 - n2);

    console.log(numeros)
    setNumerosSorteados(numeros);

  };

  const sortearNumeroNaoExistente = (numeros: Array<number>) : number => {
    const novoNumero = parseInt(Math.random() * 60) + 1

    return numeros.includes(novoNumero) ? sortearNumeroNaoExistente(numeros) : novoNumero;
  }

  return (
    <View style={{ flexGrow: 1, padding: 18 }}>
      <View style={[style.MainAxisCenter, style.CrossAxisCenter, { flexGrow: 1 }]}>
        <Text style={{ fontSize: 24 }}>Mega-Sena</Text>
      </View>

      <View style={[style.Form, { flexGrow:1}]}>
        <MegaSenaForm sortearNumeros={sortearNumeros} />
      </View>

      <View style={[style.Resultado, {flexGrow: 10}]}>
        <MegaSenaResultado numeros={numerosSorteados} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  MainAxisCenter: {
    display: "flex",
    justifyContent: "center"
  },
  CrossAxisCenter: {
    display: "flex",
    alignItems: "center"
  },
  Form: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  Resultado: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
  },

});
