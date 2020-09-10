import React from "react";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

export default function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageURIs = values[name]
  const handleAdd = uri => {
    setFieldValue(name, [...imageURIs, uri])
  }

  const handleRemove = uri => {
    setFieldValue(imageURIs.filter(imageURI => imageURI !== uri))
  }

  return (
    <>
      <ImageInputList imageURIs={imageURIs} onAddImage={handleAdd} onRemoveImage={handleRemove} />
      <ErrorMessage />
    </>
  );
}
