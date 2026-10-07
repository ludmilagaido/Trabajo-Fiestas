import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function DetalleFoto({ route }) {
  const { foto } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.photo}>
        <Text style={styles.emoji}>
          📸
        </Text>

        <View style={styles.photoBadge}>
          <Text style={styles.photoBadgeText}>
            PARTY MOMENT
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.kicker}>
          IDEA PARA FOTOS
        </Text>

        <Text style={styles.title}>
          {foto.nombre}
        </Text>

        <Text style={styles.description}>
          {foto.descripcion}
        </Text>
      </View>

      <View style={styles.tip}>
        <Text style={styles.tipTitle}>
          📷 Tip para la foto
        </Text>

        <Text style={styles.tipText}>
          Probá diferentes ángulos, usá las luces
          del lugar y capturá momentos espontáneos.
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
    padding: 16,
    paddingBottom: 35,
  },

  photo: {
    height: 270,
    borderRadius: 27,

    backgroundColor: "#2A0736",

    alignItems: "center",
    justifyContent: "center",

    overflow: "hidden",
  },

  emoji: {
    fontSize: 80,
  },

  photoBadge: {
    position: "absolute",

    left: 14,
    bottom: 14,

    backgroundColor: "#120018",

    paddingHorizontal: 12,
    paddingVertical: 7,

    borderRadius: 16,
  },

  photoBadgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1,
  },

  card: {
    backgroundColor: "#190021",

    borderRadius: 24,

    padding: 21,

    marginTop: 15,

    borderWidth: 1,
    borderColor: "#3B1648",
  },

  kicker: {
    color: "#FF4F91",
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1.5,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 27,
    lineHeight: 32,
    fontWeight: "900",
    marginTop: 5,
  },

  description: {
    color: "#C8B8CE",
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8,
  },

  tip: {
    backgroundColor: "#FF2D75",

    padding: 19,

    borderRadius: 20,

    marginTop: 16,
  },

  tipTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "900",
  },

  tipText: {
    color: "#FFFFFF",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 6,
  },
});
