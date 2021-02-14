import React from "react";
import { Button, View } from "react-native";

export default (props: any) => {

  // const [quantidade, setQuantidade] = useState('');

  return (
    <View>
      <Button
        title="Sortear" onPress={() => props.sortearNumeros(6)} />
    </View>
  );

}
