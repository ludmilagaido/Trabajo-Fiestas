import React from "react";

import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
} from "react-native";

import { fotos } from "../data/data";

export default function ListaFotos({ navigation }) {
  const emojis = ["🌈", "👯", "🕺", "📸"];

  function renderItem({ item, index }) {
    return (
      <Pressable
        style={({ pressed }) => [
          styles.card,
          pressed && {
            opacity: 0.88,
          },
        ]}
        onPress={() =>
          navigation.navigate("DetalleFoto", {
            foto: item,
          })
        }
      >
        <View style={styles.photo}>
          <Text style={styles.photoEmoji}>
            {emojis[index] || "📸"}
          </Text>

          <View style={styles.photoBadge}>
            <Text style={styles.photoBadgeText}>
              📸 MOMENTO
            </Text>
          </View>
        </View>

        <Text style={styles.title}>
          {item.nombre}
        </Text>

        <Text style={styles.description}>
          {item.descripcion}
        </Text>

        <View style={styles.explore}>
          <Text style={styles.link}>
            Ver idea
          </Text>

          <Text style={styles.arrow}>
            →
          </Text>
        </View>
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={fotos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.kicker}>
              PARTY MEMORIES
            </Text>

            <Text style={styles.mainTitle}>
              Capturá la noche 📸
            </Text>

            <Text style={styles.subtitle}>
              Ideas para que tus fotos también
              sean parte de la fiesta.
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09000F",
  },

  list: {
    padding: 16,
    paddingBottom: 35,
  },

  header: {
    paddingTop: 8,
    paddingBottom: 18,
  },

  kicker: {
    color: "#FF2D75",
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 2.5,
  },

  mainTitle: {
    color: "#FFFFFF",
    fontSize: 29,
    fontWeight: "900",
    marginTop: 7,
  },

  subtitle: {
    color: "#A99AAC",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 7,
  },

  card: {
    backgroundColor: "#190021",
    borderRadius: 25,
    padding: 14,
    marginBottom: 16,

    borderWidth: 1,
    borderColor: "#3B1648",
  },

  photo: {
    height: 175,
    borderRadius: 19,

    backgroundColor: "#2A0736",

    alignItems: "center",
    justifyContent: "center",

    overflow: "hidden",
  },

  photoEmoji: {
    fontSize: 65,
  },

  photoBadge: {
    position: "absolute",

    left: 12,
    bottom: 12,

    backgroundColor: "#120018",

    paddingHorizontal: 10,
    paddingVertical: 6,

    borderRadius: 15,
  },

  photoBadgeText: {
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 0.7,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "900",
    marginTop: 14,
  },

  description: {
    color: "#BFAFC4",
    fontSize: 14,
    lineHeight: 20,
    marginTop: 5,
  },

  explore: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 13,
  },

  link: {
    color: "#FF4F91",
    fontWeight: "900",
    fontSize: 14,
  },

  arrow: {
    color: "#FF4F91",
    fontSize: 20,
    fontWeight: "900",
    marginLeft: 7,
  },
});
