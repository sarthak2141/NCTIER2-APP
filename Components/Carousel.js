import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";

const Carousel = () => {
  const flatlistRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  // Data for carousel
  const carouselData = [
    { id: "01", image: require("../assets/Images/img1.jpg") },
    { id: "02", image: require("../assets/Images/img7.jpg") },
    { id: "03", image: require("../assets/Images/img3.jpg") },
    { id: "04", image: require("../assets/Images/img4.jpg") },
    { id: "05", image: require("../assets/Images/img5.png") },
  ];

  // Auto Scroll
  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = (activeIndex + 1) % carouselData.length;
      flatlistRef.current.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
      setActiveIndex(nextIndex);
    }, 2000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  // Display Images // UI
  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image
          source={item.image}
          style={styles.image}
        />
      </View>
    );
  };

  // Handle Scroll
  const handleScroll = (event) => {
    const index = Math.floor(
      event.nativeEvent.contentOffset.x / Dimensions.get("window").width
    );
    setActiveIndex(index);
  };

  // Render Dot Indicators
  const renderDotIndicators = () => {
    return carouselData.map((_, index) => (
      <View
        key={index}
        style={[
          styles.dot,
          { backgroundColor: activeIndex === index ? "#c72229" : "grey" },
        ]}
      />
    ));
  };

  return (
    <View>
      <FlatList
        data={carouselData}
        ref={flatlistRef}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        snapToAlignment="center"
      />
      <View style={styles.dotContainer}>{renderDotIndicators()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
   
    alignItems: "center",
	backgroundColor: "transparent",
   
    overflow: "hidden", 
    marginLeft: 5,
	marginRight:1,
  },
  image: {
    height: 180,
    width: Dimensions.get("window").width - 27, 
	borderRadius:10,
	elevation: 5,
	resizeMode:'stretch'
  },
  contentContainer: {
    paddingHorizontal: 10, 
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 6,
  },
});

export default Carousel;




















