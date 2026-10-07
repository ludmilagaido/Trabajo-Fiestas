import React from "react";

import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
} from "react-native";

import { fiestas } from "../data/data";

export default function ListaFiestas({ navigation }) {
  function renderItem({ item, index }) {
    const emojis = ["🌈", "💗", "🖤", "🔥"];

    return (
      <Pressable
        style={({ pressed }) => [
          styles.card,
          pressed && {
            opacity: 0.88,
          },
        ]}
        onPress={() =>
          navigation.navigate("DetalleFiesta", {
            fiesta: item,
          })
        }
      >
        <View style={styles.cardTop}>
          <View style={styles.emojiCircle}>
            <Text style={styles.emoji}>
              {emojis[index] || "🎉"}
            </Text>
          </View>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              PARTY
            </Text>
          </View>
        </View>

        <Text style={styles.title}>
          {item.nombre}
        </Text>

        <Text style={styles.description}>
          {item.descripcion}
        </Text>

        <View style={styles.details}>
          <View style={styles.detailRow}>
            <Text style={styles.detailIcon}>🎧</Text>

            <Text style={styles.detailText}>
              {item.musica}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailIcon}>👗</Text>

            <Text style={styles.detailText}>
              {item.outfit}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailIcon}>📍</Text>

            <Text style={styles.detailText}>
              {item.direccion}
            </Text>
          </View>
        </View>

        <View style={styles.button}>
          <Text style={styles.buttonText}>
            Explorar fiesta
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
        data={fiestas}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.kicker}>
              PARTY GUIDE
            </Text>

            <Text style={styles.mainTitle}>
              Encontrá tu próxima
              {"\n"}
              <Text style={styles.pink}>
                fiesta 🎉
              </Text>
            </Text>

            <Text style={styles.subtitle}>
              Música, outfits, ideas y lugares
              para hacer de la noche algo especial.
            </Text>

            <View style={styles.headerLine} />
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
    paddingHorizontal: 16,
    paddingBottom: 35,
  },

  header: {
    paddingTop: 22,
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
    fontSize: 30,
    lineHeight: 35,
    fontWeight: "900",
    marginTop: 7,
  },

  pink: {
    color: "#FF2D75",
  },

  subtitle: {
    color: "#A99AAC",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 9,
  },

  headerLine: {
    height: 1,
    backgroundColor: "#32113F",
    marginTop: 20,
  },

  card: {
    backgroundColor: "#190021",
    borderRadius: 26,
    padding: 19,
    marginBottom: 16,

    borderWidth: 1,
    borderColor: "#3B1648",
  },

  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  emojiCircle: {
    width: 62,
    height: 62,
    borderRadius: 31,

    backgroundColor: "#27062F",

    alignItems: "center",
    justifyContent: "center",
  },

  emoji: {
    fontSize: 36,
  },

  badge: {
    backgroundColor: "#32102F",
    borderRadius: 20,

    paddingHorizontal: 12,
    paddingVertical: 7,
  },

  badgeText: {
    color: "#FF4F91",
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "900",
    marginTop: 15,
  },

  description: {
    color: "#BFAFC4",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 6,
  },

  details: {
    backgroundColor: "#120018",
    borderRadius: 17,

    padding: 13,
    marginTop: 16,
  },

  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },

  detailIcon: {
    width: 27,
    fontSize: 16,
  },

  detailText: {
    flex: 1,
    color: "#E8DCEB",
    fontSize: 13,
  },

  button: {
    marginTop: 14,

    backgroundColor: "#FF2D75",

    minHeight: 48,
    borderRadius: 15,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "900",
  },

  arrow: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "900",
    marginLeft: 8,
  },
});
