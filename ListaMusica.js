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

import { musica } from "../data/data";

export default function ListaMusica({ navigation }) {
  const emojis = ["🎧", "🔥", "🎤", "🎶"];

  return (
    <View style={styles.container}>
      <FlatList
        data={musica}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.kicker}>
              PARTY SOUND · 02
            </Text>

            <Text style={styles.mainTitle}>
              Poné la
              <Text style={styles.pink}> música.</Text>
            </Text>

            <Text style={styles.subtitle}>
              El sonido que transforma la noche.
            </Text>

            <View style={styles.soundWave}>
              {[14, 25, 37, 20, 31, 45, 26, 39, 18, 30, 42, 22].map(
                (height, index) => (
                  <View
                    key={index}
                    style={[
                      styles.waveBar,
                      {
                        height,
                        opacity: 0.35 + (index % 3) * 0.2,
                      },
                    ]}
                  />
                )
              )}
            </View>
          </View>
        }
        renderItem={({ item, index }) => (
          <MusicCard
            item={item}
            index={index}
            onPress={() =>
              navigation.navigate("DetalleMusica", {
                musica: item,
              })
            }
          />
        )}
      />
    </View>
  );
}

function MusicCard({ item, index, onPress }) {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.97,
      friction: 7,
      tension: 80,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 7,
      tension: 80,
      useNativeDriver: true,
    }).start();
  };

  const emojis = ["🎧", "🔥", "🎤", "🎶"];

  return (
    <Animated.View
      style={{
        transform: [{ scale }],
      }}
    >
      <Pressable
        style={styles.card}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <View style={styles.topRow}>
          <View style={styles.iconCircle}>
            <Text style={styles.emoji}>
              {emojis[index] || "🎵"}
            </Text>
          </View>

          <View style={styles.trackInfo}>
            <Text style={styles.trackLabel}>
              TRACK {String(index + 1).padStart(2, "0")}
            </Text>

            <Text
              style={styles.title}
              numberOfLines={1}
            >
              {item.nombre}
            </Text>

            <Text
              style={styles.artists}
              numberOfLines={1}
            >
              {item.artistas}
            </Text>
          </View>

          <View style={styles.playButton}>
            <Ionicons
              name="play"
              size={19}
              color="#FFFFFF"
            />
          </View>
        </View>

        <View style={styles.fakeProgress}>
          <View
            style={[
              styles.fakeProgressActive,
              {
                width: `${25 + index * 12}%`,
              },
            ]}
          />

          <View
            style={[
              styles.fakeDot,
              {
                left: `${25 + index * 12}%`,
              },
            ]}
          />
        </View>

        <View style={styles.timeRow}>
          <Text style={styles.time}>
            0:00
          </Text>

          <Text style={styles.time}>
            PARTY MIX
          </Text>
        </View>

        <View style={styles.descriptionBox}>
          <Text style={styles.description}>
            {item.descripcion}
          </Text>
        </View>

        <View style={styles.bottomRow}>
          <View style={styles.artistTag}>
            <Ionicons
              name="mic-outline"
              size={14}
              color="#FF3D81"
            />

            <Text
              style={styles.artistTagText}
              numberOfLines={1}
            >
              {item.artistas}
            </Text>
          </View>

          <View style={styles.arrowCircle}>
            <Ionicons
              name="arrow-up-right"
              size={18}
              color="#FFFFFF"
            />
          </View>
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
    padding: 18,
    paddingBottom: 40,
  },

  header: {
    paddingTop: 8,
    marginBottom: 22,
  },

  kicker: {
    color: "#FF3D81",
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 3,
  },

  mainTitle: {
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

  soundWave: {
    height: 65,
    marginTop: 22,
    backgroundColor: "#130018",
    borderRadius: 20,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#32113F",
  },

  waveBar: {
    width: 4,
    borderRadius: 4,
    backgroundColor: "#FF3D81",
  },

  card: {
    backgroundColor: "#16001E",
    borderRadius: 26,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#35123F",
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconCircle: {
    width: 68,
    height: 68,
    borderRadius: 22,
    backgroundColor: "#2A0736",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#4B1659",
  },

  emoji: {
    fontSize: 34,
  },

  trackInfo: {
    flex: 1,
    marginLeft: 14,
    marginRight: 10,
  },

  trackLabel: {
    color: "#FF3D81",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 2,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "900",
    marginTop: 4,
  },

  artists: {
    color: "#AFA2B6",
    fontSize: 12,
    marginTop: 3,
  },

  playButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#FF3D81",
    alignItems: "center",
    justifyContent: "center",
  },

  fakeProgress: {
    height: 5,
    backgroundColor: "#3A2141",
    borderRadius: 5,
    marginTop: 20,
    position: "relative",
  },

  fakeProgressActive: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "#FF3D81",
    borderRadius: 5,
  },

  fakeDot: {
    position: "absolute",
    top: -3,
    width: 11,
    height: 11,
    marginLeft: -5,
    borderRadius: 6,
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#FF3D81",
  },

  timeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 7,
  },

  time: {
    color: "#817486",
    fontSize: 9,
    fontWeight: "800",
  },

  descriptionBox: {
    marginTop: 15,
  },

  description: {
    color: "#BDAFC2",
    fontSize: 13,
    lineHeight: 19,
  },

  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
  },

  artistTag: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#21092A",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 15,
    maxWidth: "78%",
  },

  artistTagText: {
    color: "#D8C9DC",
    fontSize: 10,
    fontWeight: "700",
    marginLeft: 5,
  },

  arrowCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#2C1035",
    alignItems: "center",
    justifyContent: "center",
  },
});