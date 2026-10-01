import React, { useEffect, useRef, useState } from "react";

import {
  Animated,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function DetalleMusica({ route }) {
  const { musica } = route.params;

  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const pulse = useRef(new Animated.Value(1)).current;

  const duration = 218;

  useEffect(() => {
    if (!playing) {
      pulse.stopAnimation();
      pulse.setValue(1);
      return;
    }

    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {
          toValue: 1.06,
          duration: 500,
          useNativeDriver: true,
        }),

        Animated.timing(pulse, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();

    return () => {
      animation.stop();
    };
  }, [playing]);

  useEffect(() => {
    if (!playing) {
      return;
    }

    const interval = setInterval(() => {
      setProgress((current) => {
        if (current >= 1) {
          setPlaying(false);
          return 0;
        }

        return current + 1 / duration;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [playing]);

  const togglePlay = () => {
    setPlaying((current) => !current);
  };

  const formatTime = (seconds) => {
    const safeSeconds = Math.max(
      0,
      Math.floor(seconds)
    );

    const minutes = Math.floor(
      safeSeconds / 60
    );

    const remainingSeconds =
      safeSeconds % 60;

    return `${minutes}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  const currentTime = progress * duration;

  const handleSeek = (event) => {
    const width =
      event.nativeEvent.locationX;

    const containerWidth =
      event.nativeEvent.target
        ? 1
        : 1;

    if (!containerWidth) {
      return;
    }

    const percentage = Math.max(
      0,
      Math.min(1, width / 300)
    );

    setProgress(percentage);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.hero}>
        <View style={styles.topLabel}>
          <View
            style={[
              styles.liveDot,
              {
                backgroundColor: playing
                  ? "#45F5A4"
                  : "#FF3D81",
              },
            ]}
          />

          <Text style={styles.liveText}>
            {playing
              ? "NOW PLAYING"
              : "PARTY SOUND"}
          </Text>
        </View>

        <Animated.View
          style={[
            styles.cover,
            {
              transform: [
                {
                  scale: pulse,
                },
              ],
            },
          ]}
        >
          <View style={styles.coverGlow} />

          <Text style={styles.coverEmoji}>
            🎧
          </Text>

          <View style={styles.coverLines}>
            <View style={styles.coverLine} />

            <View
              style={[
                styles.coverLine,
                styles.lineSmall,
              ]}
            />

            <View style={styles.coverLine} />

            <View
              style={[
                styles.coverLine,
                styles.lineMedium,
              ]}
            />

            <View style={styles.coverLine} />
          </View>
        </Animated.View>

        <Text style={styles.kicker}>
          PARTY SOUND
        </Text>

        <Text style={styles.title}>
          {musica.nombre}
        </Text>

        <Text style={styles.artists}>
          {musica.artistas}
        </Text>

        <Text style={styles.description}>
          {musica.descripcion}
        </Text>
      </View>

      <View style={styles.playerCard}>
        <View style={styles.playerHeader}>
          <Text style={styles.playerLabel}>
            PARTY PLAYER
          </Text>

          <View style={styles.equalizer}>
            <View style={styles.eqBar} />

            <View
              style={[
                styles.eqBar,
                styles.eqTall,
              ]}
            />

            <View
              style={[
                styles.eqBar,
                styles.eqMedium,
              ]}
            />

            <View style={styles.eqBar} />
          </View>
        </View>

        <Pressable
          onPress={handleSeek}
          style={styles.progressTrack}
        >
          <View
            style={[
              styles.progressActive,
              {
                width: `${progress * 100}%`,
              },
            ]}
          />

          <View
            style={[
              styles.progressDot,
              {
                left: `${progress * 100}%`,
              },
            ]}
          />
        </Pressable>

        <View style={styles.timeRow}>
          <Text style={styles.time}>
            {formatTime(currentTime)}
          </Text>

          <Text style={styles.time}>
            {formatTime(duration)}
          </Text>
        </View>

        <View style={styles.controls}>
          <Pressable
            style={styles.smallControl}
            onPress={() => {
              setProgress((current) =>
                Math.max(
                  0,
                  current - 10 / duration
                )
              );
            }}
          >
            <Ionicons
              name="play-back"
              size={19}
              color="#FFFFFF"
            />
          </Pressable>

          <Pressable
            style={styles.playButton}
            onPress={togglePlay}
          >
            <Ionicons
              name={
                playing
                  ? "pause"
                  : "play"
              }
              size={30}
              color="#FFFFFF"
            />
          </Pressable>

          <Pressable
            style={styles.smallControl}
            onPress={() => {
              setProgress((current) =>
                Math.min(
                  1,
                  current + 10 / duration
                )
              );
            }}
          >
            <Ionicons
              name="play-forward"
              size={19}
              color="#FFFFFF"
            />
          </Pressable>
        </View>

        <View style={styles.status}>
          <View
            style={[
              styles.statusDot,
              {
                backgroundColor: playing
                  ? "#45F5A4"
                  : "#817486",
              },
            ]}
          />

          <Text style={styles.statusText}>
            {playing
              ? "Reproduciendo"
              : "Pausado"}
          </Text>
        </View>
      </View>

      <View style={styles.artistSection}>
        <Text style={styles.sectionTitle}>
          🎤 Artistas
        </Text>

        <View style={styles.artistCard}>
          <View style={styles.artistIcon}>
            <Ionicons
              name="musical-notes"
              size={25}
              color="#FF3D81"
            />
          </View>

          <View style={styles.artistInfo}>
            <Text style={styles.artistLabel}>
              ARTISTAS
            </Text>

            <Text style={styles.artistName}>
              {musica.artistas}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.tip}>
        <Text style={styles.tipTitle}>
          🔥 Mood
        </Text>

        <Text style={styles.tipText}>
          Subí el volumen, prepará el outfit
          y empezá a entrar en modo fiesta.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#08000D",
  },

  content: {
    paddingBottom: 40,
  },

  hero: {
    margin: 16,
    padding: 22,
    borderRadius: 30,
    backgroundColor: "#1B0624",
    borderWidth: 1,
    borderColor: "#4A1558",
    alignItems: "center",
    overflow: "hidden",
  },

  topLabel: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
  },

  liveDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    marginRight: 7,
  },

  liveText: {
    color: "#FF6A9F",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 2,
  },

  cover: {
    width: 190,
    height: 190,
    borderRadius: 32,
    marginTop: 20,
    backgroundColor: "#2B0937",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#61206F",
    overflow: "hidden",
  },

  coverGlow: {
    position: "absolute",
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor:
      "rgba(255,61,129,0.16)",
  },

  coverEmoji: {
    fontSize: 72,
  },

  coverLines: {
    position: "absolute",
    bottom: 18,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  coverLine: {
    width: 5,
    height: 17,
    borderRadius: 5,
    backgroundColor: "#FF3D81",
  },

  lineSmall: {
    height: 9,
  },

  lineMedium: {
    height: 24,
  },

  kicker: {
    color: "#FF3D81",
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 3,
    marginTop: 22,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 5,
  },

  artists: {
    color: "#FF8AB1",
    fontSize: 13,
    fontWeight: "700",
    marginTop: 5,
    textAlign: "center",
  },

  description: {
    color: "#BDAFC2",
    fontSize: 13,
    lineHeight: 20,
    textAlign: "center",
    marginTop: 10,
  },

  playerCard: {
    marginHorizontal: 16,
    padding: 20,
    borderRadius: 25,
    backgroundColor: "#130018",
    borderWidth: 1,
    borderColor: "#35123F",
  },

  playerHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  playerLabel: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 2,
  },

  equalizer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },

  eqBar: {
    width: 3,
    height: 9,
    borderRadius: 3,
    backgroundColor: "#FF3D81",
  },

  eqMedium: {
    height: 15,
  },

  eqTall: {
    height: 21,
  },

  progressTrack: {
    height: 7,
    borderRadius: 7,
    backgroundColor: "#3A2141",
    marginTop: 22,
    position: "relative",
  },

  progressActive: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "#FF3D81",
    borderRadius: 7,
  },

  progressDot: {
    position: "absolute",
    top: -4,
    width: 15,
    height: 15,
    marginLeft: -7,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    borderWidth: 3,
    borderColor: "#FF3D81",
  },

  timeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },

  time: {
    color: "#827486",
    fontSize: 10,
    fontWeight: "700",
  },

  controls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    gap: 25,
  },

  smallControl: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#25102D",
    alignItems: "center",
    justifyContent: "center",
  },

  playButton: {
    width: 66,
    height: 66,
    borderRadius: 33,
    backgroundColor: "#FF3D81",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 3,
  },

  status: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },

  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 6,
  },

  statusText: {
    color: "#88798C",
    fontSize: 10,
    fontWeight: "700",
  },

  artistSection: {
    marginHorizontal: 16,
    marginTop: 24,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 12,
  },

  artistCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 20,
    backgroundColor: "#16001E",
    borderWidth: 1,
    borderColor: "#35123F",
  },

  artistIcon: {
    width: 50,
    height: 50,
    borderRadius: 17,
    backgroundColor: "#2B0A36",
    alignItems: "center",
    justifyContent: "center",
  },

  artistInfo: {
    marginLeft: 13,
    flex: 1,
  },

  artistLabel: {
    color: "#FF3D81",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1.5,
  },

  artistName: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
    marginTop: 4,
  },

  tip: {
    margin: 16,
    marginTop: 24,
    padding: 20,
    borderRadius: 23,
    backgroundColor: "#FF2D75",
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