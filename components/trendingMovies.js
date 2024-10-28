import {
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";
import { useNavigation } from "@react-navigation/native";
import { image500 } from "../api/moviedb";

var { width, height } = Dimensions.get("window");

export default function TrendingMovies({ data }) {
  const navigation = useNavigation();
  const handleClick = (item) => {
    navigation.navigate("Movie", item);
  };
  return (
    <View className="mb-0">
      <Text className="text-white text-xl mx-4 mb-2">Trending</Text>
      <Carousel
        data={data}
        renderItem={({ item }) => (
          <MovieCard item={item} handleClick={handleClick} />
        )}
        width={width} // Chaque image prend 70% de la largeur de l'écran
        height={height * 0.5} // Ajuster la hauteur en fonction de la largeur
        mode="parallax" // Utilisation du mode parallax
        modeConfig={{
          parallaxScrollingScale: 0.8, // Zoom des images centrales
          parallaxScrollingOffset: 175, // Distance d'affichage des images adjacentes
          parallaxAdjacentItemScale: 0.6, // Taille des images adjacentes
        }}
        loop={true} // Boucle infinie
        autoPlay={true} // Démarrage automatique
        autoPlayInterval={2000} // Intervalle d'auto-play
        scrollAnimationDuration={700} // Durée de l'animation
        style={{
          alignSelf: "center", // Centrer le carrousel
        }}
      />
    </View>
  );
}

const MovieCard = ({ item, handleClick }) => {
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 30, // Espace à gauche et à droite de l'image
        }}
      >
        <Image
          //source={require("../assets/images/spaceman.jpg")}
          source={{ uri: image500(item.poster_path) }}
          style={{
            width: width * 0.8,
            height: height * 0.5,
            borderRadius: 20,
          }}
          className="rounded-3xl"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
