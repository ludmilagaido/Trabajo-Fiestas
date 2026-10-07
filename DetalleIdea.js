import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function DetalleIdea({ route }) {
  const { idea } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <View style={styles.iconCircle}>
          <Text style={styles.emoji}>
            💡
          </Text>
        </View>

        <Text style={styles.kicker}>
          PARTY IDEA
        </Text>

        <Text style={styles.title}>
          {idea.nombre}
        </Text>

        <Text style={styles.description}>
          {idea.descripcion}
        </Text>
      </View>

      <View style={styles.tip}>
        <Text style={styles.tipTitle}>
          ✨ Hacelo realidad
        </Text>

        <Text style={styles.tipText}>
          Adaptá esta idea a tu estilo y
          convertí una noche normal en una
          experiencia diferente.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09000F",
  },

  content: {
    paddingBottom: 35,
  },

  hero: {
    margin: 16,
    padding: 24,

    borderRadius: 27,

    backgroundColor: "#22002F",

    borderWidth: 1,
    borderColor: "#5A176D",
  },

  iconCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,

    backgroundColor: "#351044",

    alignItems: "center",
    justifyContent: "center",
  },

  emoji: {
    fontSize: 40,
  },

  kicker: {
    color: "#FF4F91",
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 2,

    marginTop: 20,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 29,
    lineHeight: 34,
    fontWeight: "900",
    marginTop: 5,
  },

  description: {
    color: "#D4C5D9",
    fontSize: 15,
    lineHeight: 23,
    marginTop: 9,
  },

  tip: {
    margin: 16,
    marginTop: 9,

    backgroundColor: "#FF2D75",

    padding: 20,

    borderRadius: 21,
  },

  tipTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "900",
  },

  tipText: {
    color: "#FFFFFF",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 7,
  },
});
