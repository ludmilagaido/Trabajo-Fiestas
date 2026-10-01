import React, { useEffect, useRef } from "react";

import {
  Animated,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const fotosOutfits = [
  "https://eslamoda.com/wp-content/uploads/sites/2/2018/12/mini-red-dress.jpg",
  "https://s2.glbimg.com/a6K-uTvgQE12jk7DXOuakba0tlk%3D/852x0/smart/filters%3Astrip_icc%28%29/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2022/N/i/KGIdB2Sxm8plNGnTd15Q/whatsapp-image-2022-11-19-at-01.01.31.jpeg?utm_source=chatgpt.com",
  "https://i.pinimg.com/236x/80/3e/dc/803edceedb66657a4491f1227ca89908.jpg",
  "https://media.mdzol.com/adjuntos/373/migration/u/fotografias/m/2024/6/20/f768x1151-1611872_1738171_5050.jpg",
];

export default function DetalleOutfit({ route, navigation }) {
  const { outfit } = route.params;

  const opacity = useRef(
    new Animated.Value(0)
  ).current;

  const translateY = useRef(
    new Animated.Value(25)
  ).current;

  const imageScale = useRef(
    new Animated.Value(1)
  ).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),

      Animated.spring(translateY, {
        toValue: 0,
        friction: 8,
        tension: 60,
        useNativeDriver: true,
      }),

      Animated.timing(imageScale, {
        toValue: 1.05,
        duration: 7000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const imageIndex =
    outfit?.id != null
      ? Number(outfit.id) % fotosOutfits.length
      : 0;

  const image =
    fotosOutfits[imageIndex];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* HERO */}

      <Animated.View
        style={[
          styles.hero,
          {
            opacity,
            transform: [
              { translateY },
            ],
          },
        ]}
      >
        <Animated.Image
          source={{ uri: image }}
          style={[
            styles.heroImage,
            {
              transform: [
                { scale: imageScale },
              ],
            },
          ]}
          resizeMode="cover"
        />

        <View style={styles.heroOverlay} />

        <View style={styles.heroTop}>
          <View style={styles.partyBadge}>
            <Text style={styles.partyBadgeText}>
              PARTY STYLE
            </Text>
          </View>

          <View style={styles.heroIcon}>
            <Text style={styles.heroEmoji}>
              👗
            </Text>
          </View>
        </View>

        <View style={styles.heroContent}>
          <Text style={styles.heroSmall}>
            TU PRÓXIMO LOOK
          </Text>

          <Text style={styles.title}>
            {outfit.nombre}
          </Text>

          <Text
            style={styles.description}
            numberOfLines={4}
          >
            {outfit.descripcion}
          </Text>
        </View>
      </Animated.View>

      {/* PRENDAS */}

      <Animated.View
        style={[
          styles.section,
          {
            opacity,
            transform: [
              { translateY },
            ],
          },
        ]}
      >
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionKicker}>
              CHECKLIST
            </Text>

            <Text style={styles.sectionTitle}>
              Armá tu outfit
            </Text>
          </View>

          <View style={styles.sectionIcon}>
            <Ionicons
              name="bag-handle-outline"
              size={22}
              color="#FF3D81"
            />
          </View>
        </View>

        {outfit.prendas?.map(
          (prenda, index) => (
            <Animated.View
              key={index}
              style={[
                styles.item,
                {
                  opacity,
                  transform: [
                    {
                      translateX:
                        translateY.interpolate({
                          inputRange: [0, 25],
                          outputRange: [0, 20],
                        }),
                    },
                  ],
                },
              ]}
            >
              <View style={styles.number}>
                <Text style={styles.numberText}>
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </Text>
              </View>

              <Text style={styles.itemText}>
                {prenda}
              </Text>

              <View style={styles.check}>
                <Ionicons
                  name="sparkles"
                  size={15}
                  color="#FF3D81"
                />
              </View>
            </Animated.View>
          )
        )}
      </Animated.View>

      {/* COLORES */}

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionKicker}>
              PALETTE
            </Text>

            <Text style={styles.sectionTitle}>
              Colores
            </Text>
          </View>

          <View style={styles.sectionIcon}>
            <Ionicons
              name="color-palette-outline"
              size={22}
              color="#FF3D81"
            />
          </View>
        </View>

        <View style={styles.colors}>
          {outfit.colores?.map(
            (color, index) => (
              <View
                key={index}
                style={styles.color}
              >
                <View
                  style={[
                    styles.colorDot,
                    {
                      backgroundColor:
                        getColor(
                          color,
                          index
                        ),
                    },
                  ]}
                />

                <Text style={styles.colorText}>
                  {color}
                </Text>
              </View>
            )
          )}
        </View>
      </View>

      {/* TIP */}

      <View style={styles.tip}>
        <View style={styles.tipIcon}>
          <Text style={styles.tipEmoji}>
            ✨
          </Text>
        </View>

        <View style={styles.tipContent}>
          <Text style={styles.tipTitle}>
            Hacelo tuyo
          </Text>

          <Text style={styles.tipText}>
            Combiná las prendas con
            accesorios que representen
            tu estilo y convertí este look
            en tu propia versión.
          </Text>
        </View>
      </View>

      {/* BOTÓN */}

      <Pressable
        style={({ pressed }) => [
          styles.backButton,
          pressed && styles.backButtonPressed,
        ]}
        onPress={() =>
          navigation?.goBack()
        }
      >
        <Ionicons
          name="arrow-back"
          size={18}
          color="#FFFFFF"
        />

        <Text style={styles.backButtonText}>
          Ver más outfits
        </Text>
      </Pressable>

      <View style={styles.bottomSpace} />
    </ScrollView>
  );
}

function getColor(color, index) {
  const text = String(
    color || ""
  ).toLowerCase();

  if (
    text.includes("rosa") ||
    text.includes("pink")
  ) {
    return "#FF3D81";
  }

  if (
    text.includes("rojo") ||
    text.includes("red")
  ) {
    return "#FF405C";
  }

  if (
    text.includes("negro") ||
    text.includes("black")
  ) {
    return "#17121A";
  }

  if (
    text.includes("blanco") ||
    text.includes("white")
  ) {
    return "#FFFFFF";
  }

  if (
    text.includes("azul") ||
    text.includes("blue")
  ) {
    return "#4B7BFF";
  }

  if (
    text.includes("verde") ||
    text.includes("green")
  ) {
    return "#35D39A";
  }

  if (
    text.includes("violeta") ||
    text.includes("purple") ||
    text.includes("morado")
  ) {
    return "#A855F7";
  }

  if (
    text.includes("dorado") ||
    text.includes("gold")
  ) {
    return "#FFD166";
  }

  return [
    "#FF3D81",
    "#A855F7",
    "#4B7BFF",
    "#35D39A",
  ][index % 4];
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#08000D",
  },

  content: {
    paddingBottom: 30,
  },

  /* HERO */

  hero: {
    height: 430,
    margin: 16,
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: "#22002F",
  },

  heroImage: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
  },

  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor:
      "rgba(8,0,13,0.48)",
  },

  heroTop: {
    position: "absolute",
    top: 18,
    left: 18,
    right: 18,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  partyBadge: {
    backgroundColor: "#FF3D81",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
  },

  partyBadgeText: {
    color: "#FFFFFF",
    fontFamily: "SpaceGrotesk_700Bold",
    fontSize: 10,
    letterSpacing: 1.5,
  },

  heroIcon: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor:
      "rgba(8,0,13,0.70)",
    borderWidth: 1,
    borderColor:
      "rgba(255,255,255,0.18)",

    alignItems: "center",
    justifyContent: "center",
  },

  heroEmoji: {
    fontSize: 25,
  },

  heroContent: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 22,
  },

  heroSmall: {
    color: "#FF6A9F",
    fontFamily: "SpaceGrotesk_700Bold",
    fontSize: 10,
    letterSpacing: 2,
    marginBottom: 5,
  },

  title: {
    color: "#FFFFFF",
    fontFamily: "PlayfairDisplay_700Bold",
    fontSize: 35,
    lineHeight: 40,
  },

  description: {
    color: "#E7DDEB",
    fontFamily: "SpaceGrotesk_400Regular",
    fontSize: 14,
    lineHeight: 20,
    marginTop: 9,
  },

  /* SECTIONS */

  section: {
    marginHorizontal: 16,
    marginTop: 10,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 13,
  },

  sectionKicker: {
    color: "#FF3D81",
    fontFamily: "SpaceGrotesk_700Bold",
    fontSize: 9,
    letterSpacing: 2,
    marginBottom: 2,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontFamily: "PlayfairDisplay_700Bold",
    fontSize: 25,
  },

  sectionIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#1C0B23",
    borderWidth: 1,
    borderColor: "#3B1745",
    alignItems: "center",
    justifyContent: "center",
  },

  /* ITEMS */

  item: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#15001D",

    borderRadius: 19,

    padding: 13,

    marginBottom: 9,

    borderWidth: 1,
    borderColor: "#2F1239",
  },

  number: {
    width: 40,
    height: 40,
    borderRadius: 20,

    backgroundColor: "#FF3D81",

    alignItems: "center",
    justifyContent: "center",

    marginRight: 12,
  },

  numberText: {
    color: "#FFFFFF",
    fontFamily: "SpaceGrotesk_700Bold",
    fontSize: 11,
  },

  itemText: {
    flex: 1,
    color: "#FFFFFF",
    fontFamily: "SpaceGrotesk_500Medium",
    fontSize: 14,
    lineHeight: 20,
  },

  check: {
    width: 31,
    height: 31,
    borderRadius: 16,
    backgroundColor: "#26102E",
    alignItems: "center",
    justifyContent: "center",
  },

  /* COLORS */

  colors: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  color: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#190021",

    paddingHorizontal: 12,
    paddingVertical: 9,

    borderRadius: 20,

    borderWidth: 1,
    borderColor: "#32113F",
  },

  colorDot: {
    width: 11,
    height: 11,
    borderRadius: 6,
    marginRight: 7,
    borderWidth: 1,
    borderColor:
      "rgba(255,255,255,0.3)",
  },

  colorText: {
    color: "#FFFFFF",
    fontFamily: "SpaceGrotesk_500Medium",
    fontSize: 11,
  },

  /* TIP */

  tip: {
    marginHorizontal: 16,
    marginTop: 26,

    padding: 17,

    borderRadius: 23,

    backgroundColor: "#FF3D81",

    flexDirection: "row",
    alignItems: "flex-start",
  },

  tipIcon: {
    width: 43,
    height: 43,
    borderRadius: 22,

    backgroundColor:
      "rgba(255,255,255,0.18)",

    alignItems: "center",
    justifyContent: "center",

    marginRight: 12,
  },

  tipEmoji: {
    fontSize: 21,
  },

  tipContent: {
    flex: 1,
  },

  tipTitle: {
    color: "#FFFFFF",
    fontFamily: "SpaceGrotesk_700Bold",
    fontSize: 17,
    marginBottom: 5,
  },

  tipText: {
    color: "#FFFFFF",
    fontFamily: "SpaceGrotesk_400Regular",
    fontSize: 12,
    lineHeight: 18,
  },

  /* BACK */

  backButton: {
    marginHorizontal: 16,
    marginTop: 16,

    height: 52,

    borderRadius: 18,

    backgroundColor: "#1B0922",

    borderWidth: 1,
    borderColor: "#3A1745",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
  },

  backButtonPressed: {
    transform: [
      { scale: 0.97 },
    ],
    backgroundColor: "#26102E",
  },

  backButtonText: {
    color: "#FFFFFF",
    fontFamily: "SpaceGrotesk_700Bold",
    fontSize: 13,
  },

  bottomSpace: {
    height: 15,
  },
});