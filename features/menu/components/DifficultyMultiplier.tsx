import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Props } from "~/core/features/menu/containers/DifficultyMultiplier";

const DifficultyMultiplier = ({ difficultyMultiplier }: Props) => (
  <View style={theme.container}>
    <Text>{difficultyMultiplier}</Text>
  </View>
);

const theme = StyleSheet.create({
  container: {
    alignSelf: "center",
    flex: 1,
    marginTop: 200
  }
});

export default DifficultyMultiplier;
