import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function DetalleFiesta({ route }) {
  const { fiesta } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <View style={styles.heroIcon}>
          <Text style={styles.heroEmoji}>
            🎉
          </Text>
        </View>

        <Text style={styles.kicker}>
          FIESTA
        </Text>

        <Text style={styles.title}>
          {fiesta.nombre}
        </Text>

        <Text style={styles.description}>
          {fiesta.descripcion}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          ✨ La experiencia
        </Text>

        <View style={styles.infoCard}>
          <Text style={styles.infoEmoji}>🎧</Text>

          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>
              Música
            </Text>

            <Text style={styles.infoText}>
              {fiesta.musica}
            </Text>
          </View>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoEmoji}>👗</Text>

          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>
              Dress Code
            </Text>

            <Text style={styles.infoText}>
              {fiesta.outfit}
            </Text>
          </View>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoEmoji}>💡</Text>

          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>
              Idea
            </Text>

            <Text style={styles.infoText}>
              {fiesta.idea}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          📍 Ubicación
        </Text>

        <View style={styles.locationCard}>
          <View style={styles.locationIcon}>
            <Text>📍</Text>
          </View>

          <View style={styles.locationContent}>
            <Text style={styles.locationTitle}>
              Dirección
            </Text>

            <Text style={styles.location}>
              {fiesta.direccion}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.tip}>
        <Text style={styles.tipTitle}>
          🚀 Prepará tu noche
        </Text>

        <Text style={styles.tipText}>
          Revisá el outfit, elegí tu música y
          preparate para disfrutar. La noche
          empieza ahora.
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

    borderRadius: 28,

    backgroundColor: "#22002F",

    borderWidth: 1,
    borderColor: "#5A176D",
  },

  heroIcon: {
    width: 68,
    height: 68,
    borderRadius: 34,

    backgroundColor: "#351044",

    alignItems: "center",
    justifyContent: "center",
  },

  heroEmoji: {
    fontSize: 38,
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
    fontSize: 30,
    lineHeight: 35,
    fontWeight: "900",
    marginTop: 5,
  },

  description: {
    color: "#DCCFE1",
    fontSize: 15,
    lineHeight: 23,
    marginTop: 9,
  },

  section: {
    marginHorizontal: 16,
    marginTop: 9,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "900",
    marginBottom: 13,
  },

  infoCard: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#180021",

    borderRadius: 19,

    padding: 16,
    marginBottom: 10,

    borderWidth: 1,
    borderColor: "#32113F",
  },

  infoEmoji: {
    fontSize: 30,
    width: 48,
  },

  infoContent: {
    flex: 1,
  },

  infoTitle: {
    color: "#FF4F91",
    fontSize: 12,
    fontWeight: "900",
    marginBottom: 4,
  },

  infoText: {
    color: "#FFFFFF",
    fontSize: 15,
    lineHeight: 21,
  },

  locationCard: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#180021",

    borderRadius: 19,
    padding: 16,

    borderWidth: 1,
    borderColor: "#32113F",
  },

  locationIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,

    backgroundColor: "#2B1034",

    alignItems: "center",
    justifyContent: "center",
  },

  locationContent: {
    flex: 1,
    marginLeft: 13,
  },

  locationTitle: {
    color: "#FF4F91",
    fontSize: 12,
    fontWeight: "900",
    marginBottom: 4,
  },

  location: {
    color: "#FFFFFF",
    fontSize: 15,
    lineHeight: 21,
  },

  tip: {
    margin: 16,
    marginTop: 25,

    padding: 20,

    borderRadius: 22,

    backgroundColor: "#FF2D75",
  },

  tipTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 7,
  },

  tipText: {
    color: "#FFFFFF",
    fontSize: 14,
    lineHeight: 21,
  },
});
