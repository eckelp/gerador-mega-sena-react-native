import React from "react";
import { SafeAreaView } from "react-native";

import MegaSena from "./src/components/MegaSena";

const App = () => {
  return (
    <>
      <SafeAreaView style={{flexGrow: 1}}>
        <MegaSena />
      </SafeAreaView>
    </>
  );
};

export default App;
