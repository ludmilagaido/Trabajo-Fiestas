import React, { useRef } from "react";

import {
  Animated,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const outfits = [
  {
    id: 1,
    nombre: "Pink Party",
    descripcion:
      "Brillos, rosa y actitud para una noche intensa.",
    imagen:
      "https://estaticos-cdn.prensaiberica.es/clip/deaf614c-706d-4dd0-af66-17f9c766fbb5_16-9-discover-aspect-ratio_default_0.jpg",
    prendas: [
      "Top rosa o fucsia",
      "Falda o pantalón negro",
      "Accesorios plateados",
    ],
    colores: [
      "Rosa",
      "Negro",
      "Plateado",
    ],
  },

  {
    id: 2,
    nombre: "Glow Night",
    descripcion:
      "Un look brillante para destacar toda la noche.",
    imagen:
      "https://i0.wp.com/elplanetaurbano.com/wp-content/uploads/2019/09/56B951C2-FC40-4F3D-8AE7-51CE1B856021.jpeg?resize=980%2C551&ssl=1",
    prendas: [
      "Top brillante",
      "Jean o pantalón oscuro",
      "Accesorios llamativos",
    ],
    colores: [
      "Plateado",
      "Negro",
      "Blanco",
    ],
  },

  {
    id: 3,
    nombre: "All Black",
    descripcion:
      "Negro, elegante y perfecto para una noche de fiesta.",
    imagen:
      "https://sjaqcipolsssajvcvlzc.supabase.co/storage/v1/object/public/Posts/fiesta%20pinamar%20noche.jpg",
    prendas: [
      "Vestido o top negro",
      "Botas o zapatillas",
      "Accesorios metálicos",
    ],
    colores: [
      "Negro",
      "Gris",
      "Plateado",
    ],
  },

  {
    id: 4,
    nombre: "Fire Look",
    descripcion:
      "Un look fuerte para entrar y llamar la atención.",
    imagen:
      "https://uploads-ssl.webflow.com/63060fa5c9a20d7fa116ed02/642630c1215330b1564f3aa6_1475866861.jpg",
    prendas: [
      "Top rojo",
      "Pantalón negro",
      "Accesorios dorados",
    ],
    colores: [
      "Rojo",
      "Negro",
      "Dorado",
    ],
  },
];

export default function ListaOutfits({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={outfits}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.eyebrow}>
              PARTY STYLE · 03
            </Text>

            <Text style={styles.title}>
              Vestite para
              <Text style={styles.pink}>
                {" "}salir.
              </Text>
            </Text>

            <Text style={styles.subtitle}>
              Elegí tu look y rompé la noche.
            </Text>
          </View>
        }
        renderItem={({ item, index }) => (
          <OutfitCard
            item={item}
            index={index}
            onPress={() =>
              navigation.navigate(
                "DetalleOutfit",
                {
                  outfit: item,
                }
              )
            }
          />
        )}
      />
    </View>
  );
}

function OutfitCard({
  item,
  index,
  onPress,
}) {
  const scale = useRef(
    new Animated.Value(1)
  ).current;

  const imageScale = useRef(
    new Animated.Value(1)
  ).current;

  const handlePressIn = () => {
    Animated.parallel([
      Animated.spring(scale, {
        toValue: 0.96,
        friction: 7,
        tension: 80,
        useNativeDriver: true,
      }),

      Animated.spring(imageScale, {
        toValue: 1.04,
        friction: 7,
        tension: 80,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handlePressOut = () => {
    Animated.parallel([
      Animated.spring(scale, {
        toValue: 1,
        friction: 7,
        tension: 80,
        useNativeDriver: true,
      }),

      Animated.spring(imageScale, {
        toValue: 1,
        friction: 7,
        tension: 80,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const getIcon = () => {
    if (index === 0) {
      return "💖";
    }

    if (index === 1) {
      return "✨";
    }

    if (index === 2) {
      return "🖤";
    }

    return "🔥";
  };

  return (
    <Animated.View
      style={{
        transform: [
          {
            scale,
          },
        ],
      }}
    >
      <Pressable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={styles.card}
      >
        <Animated.Image
          source={{
            uri: item.imagen,
          }}
          style={[
            styles.image,
            {
              transform: [
                {
                  scale: imageScale,
                },
              ],
            },
          ]}
          resizeMode="cover"
        />

        <View style={styles.overlay} />

        <View style={styles.glowOne} />

        <View style={styles.glowTwo} />

        <View style={styles.number}>
          <Text style={styles.numberText}>
            LOOK{" "}
            {String(index + 1).padStart(2, "0")}
          </Text>
        </View>

        <View style={styles.iconBubble}>
          <Text style={styles.iconText}>
            {getIcon()}
          </Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.miniLabel}>
            PARTY LOOK
          </Text>

          <Text
            style={styles.titleCard}
            numberOfLines={2}
          >
            {item.nombre}
          </Text>

          <View style={styles.colors}>
            {item.colores.map(
              (color, i) => (
                <View
                  key={i}
                  style={styles.pill}
                >
                  <Text
                    style={styles.pillText}
                  >
                    {color}
                  </Text>
                </View>
              )
            )}
          </View>
        </View>

        <View style={styles.arrow}>
          <Ionicons
            name="arrow-up-right"
            size={21}
            color="#FFFFFF"
          />
        </View>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#08000D",
  },

  list: {
    padding: 20,
    paddingBottom: 40,
  },

  header: {
    paddingTop: 10,
    marginBottom: 24,
  },

  eyebrow: {
    color: "#FF3D81",
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 3,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 40,
    lineHeight: 44,
    fontWeight: "900",
    marginTop: 8,
  },

  pink: {
    color: "#FF3D81",
  },

  subtitle: {
    color: "#AFA2B6",
    fontSize: 14,
    marginTop: 8,
  },

  card: {
    height: 430,
    borderRadius: 28,
    overflow: "hidden",
    marginBottom: 18,
    backgroundColor: "#1A0A20",
  },

  image: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor:
      "rgba(8,0,13,0.38)",
  },

  glowOne: {
    position: "absolute",
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor:
      "rgba(255,61,129,0.15)",
    top: -60,
    right: -50,
  },

  glowTwo: {
    position: "absolute",
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor:
      "rgba(160,60,255,0.13)",
    bottom: -55,
    left: -50,
  },

  number: {
    position: "absolute",
    top: 18,
    left: 18,
    backgroundColor: "#FF3D81",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },

  numberText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1.3,
  },

  iconBubble: {
    position: "absolute",
    top: 17,
    right: 17,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor:
      "rgba(8,0,13,0.65)",
    borderWidth: 1,
    borderColor:
      "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
  },

  iconText: {
    fontSize: 24,
  },

  content: {
    position: "absolute",
    left: 20,
    bottom: 20,
    right: 75,
  },

  miniLabel: {
    color: "#FF6A9F",
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 2,
    marginBottom: 5,
  },

  titleCard: {
    color: "#FFFFFF",
    fontSize: 31,
    lineHeight: 36,
    fontWeight: "900",
  },

  colors: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 10,
  },

  pill: {
    backgroundColor:
      "rgba(255,255,255,0.16)",
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 15,
    borderWidth: 1,
    borderColor:
      "rgba(255,255,255,0.14)",
  },

  pillText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "700",
  },

  arrow: {
    position: "absolute",
    right: 18,
    bottom: 18,
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#FF3D81",
    alignItems: "center",
    justifyContent: "center",
  },
});