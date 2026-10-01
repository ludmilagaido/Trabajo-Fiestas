import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListaFiestas from "../../screens/ListaFiestas";
import DetalleFiesta from "../../screens/DetalleFiesta";

import ListaMusica from "../../screens/ListaMusica";
import DetalleMusica from "../../screens/DetalleMusica";

import ListaOutfits from "../../screens/ListaOutfits";
import DetalleOutfit from "../../screens/DetalleOutfit";

import ListaIdeas from "../../screens/ListaIdeas";
import DetalleIdea from "../../screens/DetalleIdea";

import ListaFotos from "../../screens/ListaFotos";
import DetalleFoto from "../../screens/DetalleFoto";

const Stack = createNativeStackNavigator();

const stackOptions = {
  headerStyle: {
    backgroundColor: "#100014",
  },

  headerTintColor: "#FFFFFF",

  headerTitleStyle: {
    fontFamily: "SpaceGrotesk_700Bold",
    fontSize: 18,
  },

  headerShadowVisible: false,

  headerBackTitle: "",

  animation: "slide_from_right",

  gestureEnabled: true,

  contentStyle: {
    backgroundColor: "#08000D",
  },
};

export function FiestasStack() {
  return (
    <Stack.Navigator screenOptions={stackOptions}>
      <Stack.Screen
        name="ListaFiestas"
        component={ListaFiestas}
        options={{
          title: "Fiestas",
        }}
      />

      <Stack.Screen
        name="DetalleFiesta"
        component={DetalleFiesta}
        options={{
          title: "La fiesta",
        }}
      />
    </Stack.Navigator>
  );
}

export function MusicaStack() {
  return (
    <Stack.Navigator screenOptions={stackOptions}>
      <Stack.Screen
        name="ListaMusica"
        component={ListaMusica}
        options={{
          title: "Música",
        }}
      />

      <Stack.Screen
        name="DetalleMusica"
        component={DetalleMusica}
        options={{
          title: "El sonido",
        }}
      />
    </Stack.Navigator>
  );
}

export function OutfitsStack() {
  return (
    <Stack.Navigator screenOptions={stackOptions}>
      <Stack.Screen
        name="ListaOutfits"
        component={ListaOutfits}
        options={{
          title: "Outfits",
        }}
      />

      <Stack.Screen
        name="DetalleOutfit"
        component={DetalleOutfit}
        options={{
          title: "Tu look",
        }}
      />
    </Stack.Navigator>
  );
}

export function IdeasStack() {
  return (
    <Stack.Navigator screenOptions={stackOptions}>
      <Stack.Screen
        name="ListaIdeas"
        component={ListaIdeas}
        options={{
          title: "Ideas",
        }}
      />

      <Stack.Screen
        name="DetalleIdea"
        component={DetalleIdea}
        options={{
          title: "Idea",
        }}
      />
    </Stack.Navigator>
  );
}

export function FotosStack() {
  return (
    <Stack.Navigator screenOptions={stackOptions}>
      <Stack.Screen
        name="ListaFotos"
        component={ListaFotos}
        options={{
          title: "Fotos",
        }}
      />

      <Stack.Screen
        name="DetalleFoto"
        component={DetalleFoto}
        options={{
          title: "Memoria",
        }}
      />
    </Stack.Navigator>
  );
}