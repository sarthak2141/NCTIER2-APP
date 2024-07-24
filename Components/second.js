import React from "react";
import { View, StyleSheet, FlatList, Image, Dimensions } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, useAnimatedScrollHandler, interpolate, Extrapolate } from "react-native-reanimated";

const SRC_WIDTH = Dimensions.get("window").width;
const CARD_LENGTH = SRC_WIDTH * 0.8;
const SPACING = SRC_WIDTH * 0.02;
const SIDECARD_LENGTH = (SRC_WIDTH * 0.18) / 2;
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

function Item({ index, scrollX }) {
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * CARD_LENGTH,
      index * CARD_LENGTH,
      (index + 1) * CARD_LENGTH,
    ];

    const scale = interpolate(
      scrollX.value,
      inputRange,
      [0.8, 1, 0.8],
      Extrapolate.CLAMP
    );

    const opacity = interpolate(
      scrollX.value,
      inputRange,
      [0.5, 1, 0.5],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ scale }],
      opacity,
    };
  });

  return (
    <Animated.View
      style={[
        styles.card,
        animatedStyle,
        {
          marginLeft: index === 0 ? SIDECARD_LENGTH : SPACING,
          marginRight: index === 2 ? SIDECARD_LENGTH : SPACING,
        },
      ]}
    >
      <Image
        source={require("../assets/Images/img1.jpg")}
        style={{ width: "100%", height: "100%" }}
      />
    </Animated.View>
  );
}

const SecondCrausel=()=> {
  const scrollX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];

  return (
    <View>
      <AnimatedFlatList
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0.8}
        snapToInterval={CARD_LENGTH + (SPACING * 1.5)}
        disableIntervalMomentum={true}
        disableScrollViewPanResponder={true}
        snapToAlignment={"center"}
        data={DATA}
        horizontal={true}
        renderItem={({ item, index }) => {
          return <Item index={index} scrollX={scrollX} />;
        }}
        keyExtractor={(item) => item.id}
        onScroll={scrollHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_LENGTH,
    height: 150,
    overflow: "hidden",
    borderRadius: 15,
  },
});

export default SecondCrausel;