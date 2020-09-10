import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Electronics", value: 1, backgroundColor: "#ff3f3f", icon: "camera" },
  { label: "Pets", value: 2, backgroundColor: "#56bc64", icon: "dog" },
  { label: "Automotive", value: 3, backgroundColor: "#FF6665", icon: "car" },
  { label: "Games", value: 4, backgroundColor: "#446dff", icon: "cards" },
  { label: "Clothing", value: 5, backgroundColor: "#ff9900", icon: "shoe-formal" },
  { label: "Books", value: 6, backgroundColor: "#66d6ff", icon: "book" },
  { label: "Movies & Music", value: 7, backgroundColor: "#f2bcff", icon: "headphones" },
  { label: "Sports", value: 8, backgroundColor: "#65B1F4", icon: "football" },
  { label: "Other", value: 9, backgroundColor: "#9a79b7", icon: "window-maximize" },
];

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
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
export default ListingEditScreen;
