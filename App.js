import React, { useState } from "react";
import { StyleSheet } from "react-native";

import Screen from "./app/components/Screen";
import ImageInputList from "./app/components/ImageInputList";

export default function App() {
  const [imageURIs, setImageURIs] = useState([]);

  const handleAdd = uri => {
    setImageURIs([...imageURIs, uri])
  }

  const handleRemove = uri => {
    setImageURIs(imageURIs.filter(imageURI => imageURI !== uri))
  }

  return (
    <Screen>
      <ImageInputList
        imageURIs={imageURIs}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
