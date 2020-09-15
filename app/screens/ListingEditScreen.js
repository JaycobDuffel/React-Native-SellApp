import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import listingsApi from "../api/listings";
import {
  AppForm,
  AppFormField,
  AppFormImagePicker,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";
import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please upload at least one image."),
});

const categories = [
  {
    label: "Electronics",
    value: 1,
    backgroundColor: "#ff3f3f",
    icon: "camera",
  },
  { label: "Pets", value: 2, backgroundColor: "#56bc64", icon: "dog" },
  { label: "Automotive", value: 3, backgroundColor: "#FF6665", icon: "car" },
  { label: "Games", value: 4, backgroundColor: "#446dff", icon: "cards" },
  {
    label: "Clothing",
    value: 5,
    backgroundColor: "#ff9900",
    icon: "shoe-formal",
  },
  { label: "Books", value: 6, backgroundColor: "#66d6ff", icon: "book" },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: "#f2bcff",
    icon: "headphones",
  },
  { label: "Sports", value: 8, backgroundColor: "#65B1F4", icon: "football" },
  {
    label: "Other",
    value: 9,
    backgroundColor: "#9a79b7",
    icon: "window-maximize",
  },
];

export default function ListingEditScreen() {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    
    if (!result.ok) {
      setUploadVisible(false)
      return alert("Could not save the listing.");

    }
    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen onDone={() => setUploadVisible(false)} progress={progress} visible={uploadVisible} />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width={"50%"}
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
