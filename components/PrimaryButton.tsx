import { PropsWithChildren } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../constants/colors";

type Props = {
  children: React.ReactNode;
  onPress: () => void;
};

const PrimaryButton = ({ children, onPress }: Props) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },

  pressed: {
    opacity: 0.75,
  },
});
