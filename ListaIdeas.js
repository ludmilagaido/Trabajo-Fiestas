import React from "react";

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { ideas } from "../data/data";

export default function ListaIdeas({ navigation }) {
  const emojis = ["✨", "📸", "🌈", "🎵"];

  function renderItem({ item, index }) {
    return (
      <TouchableOpacity
        activeOpacity={0.88}
        style={styles.card}
        onPress={() =>
          navigation.navigate("DetalleIdea", {
            idea: item,
          })
        }
      >
        <View style={styles.iconCircle}>
          <Text style={styles.emoji}>
            {emojis[index] || "💡"}
          </Text>
        </View>

        <Text style={styles.title}>
          {item.nombre}
        </Text>

        <Text style={styles.description}>
          {item.descripcion}
        </Text>

        <View style={styles.explore}>
          <Text style={styles.link}>
            Descubrir idea
          </Text>

          <Text style={styles.arrow}>
            →
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={ideas}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.kicker}>
              PARTY IDEAS
            </Text>

            <Text style={styles.mainTitle}>
              Dale creatividad
              {"\n"}
              a la noche 💡
            </Text>

            <Text style={styles.subtitle}>
              Pequeños detalles que pueden
              transformar una fiesta.
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
    lineHeight: 34,
    fontWeight: "900",
    marginTop: 7,
  },

  subtitle: {
    color: "#A99AAC",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
  },

  card: {
    backgroundColor: "#190021",
    borderRadius: 25,
    padding: 20,
    marginBottom: 15,

    borderWidth: 1,
    borderColor: "#3B1648",
  },

  iconCircle: {
    width: 62,
    height: 62,
    borderRadius: 31,

    backgroundColor: "#2A0736",

    alignItems: "center",
    justifyContent: "center",
  },

  emoji: {
    fontSize: 35,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "900",
    marginTop: 13,
  },

  description: {
    color: "#BFAFC4",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 6,
  },

  explore: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },

  link: {
    color: "#FF4F91",
    fontSize: 14,
    fontWeight: "900",
  },

  arrow: {
    color: "#FF4F91",
    fontSize: 20,
    fontWeight: "900",
    marginLeft: 7,
  },
});