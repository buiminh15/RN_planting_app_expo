import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS, FONTS, icons, images, SIZES } from "../../constants";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { newPlantsData } from "../../data";

export default function HomeScreen({ navigation }) {
  function renderNewPlants() {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: wp(6),
            marginTop: hp(3),
          }}
        >
          <Text style={{ ...FONTS.body2, color: COLORS.white }}>
            New Plants
          </Text>
          <TouchableOpacity onPress={() => console.log("focus")}>
            <Image
              resizeMode="contain"
              source={icons.focus}
              style={{ width: wp(5), height: hp(5) }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{ marginTop: hp(3), marginBottom: hp(4), marginLeft: wp(6) }}
        >
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={newPlantsData}
            renderItem={renderPlantItem}
            keyExtractor={(item) => `new-plant-${item.id}`}
          />
        </View>
      </View>
    );
  }

  function renderPlantItem({ item }) {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("PlantingDetail", { item })}
      >
        <ImageBackground
          source={item.img}
          imageStyle={{ borderRadius: wp(3) }}
          resizeMode="cover"
          style={{
            width: wp(24),
            height: hp(16),
            marginRight: wp(4),
          }}
        >
          <View
            style={{
              marginLeft: wp(2),
              marginTop: hp(1),
            }}
          >
            <Image
              source={item.favorite ? icons.heartGreenOutline : icons.heartRed}
              style={{
                width: wp(4),
                height: hp(4),
              }}
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              backgroundColor: COLORS.primary,
              position: "absolute",
              bottom: hp(2),
              right: 0,
              borderTopLeftRadius: wp(3),
              borderBottomLeftRadius: wp(3),
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: wp(3),
            }}
          >
            <Text style={{ ...FONTS.body4, color: COLORS.white }}>
              {item.name}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }

  function renderTodayShare() {
    return (
      <View style={{ marginHorizontal: wp(8), flex: 1, marginBottom: hp(3) }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: hp(3),
            marginTop: hp(1),
          }}
        >
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.black,
            }}
          >
            Today's Share
          </Text>
          <TouchableOpacity>
            <Text style={{ ...FONTS.body4, color: COLORS.secondary }}>
              See all
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <View style={{ flex: 1, marginRight: wp(2) }}>
            <View style={{ flex: 1, marginBottom: hp(1) }}>
              <Image
                source={images.plant5}
                resizeMode="cover"
                style={{ width: "100%", height: "100%", borderRadius: wp(4) }}
              />
            </View>
            <View style={{ flex: 1, marginTop: hp(1) }}>
              <Image
                source={images.plant1}
                resizeMode="cover"
                style={{ width: "100%", height: "100%", borderRadius: wp(4) }}
              />
            </View>
          </View>
          <View style={{ flex: 1, marginLeft: wp(2) }}>
            <Image
              source={images.plant6}
              resizeMode="cover"
              style={{ width: "100%", height: "100%", borderRadius: wp(4) }}
            />
          </View>
        </View>
      </View>
    );
  }

  function renderAddedFriends() {
    return (
      <View
        style={{
          paddingHorizontal: wp(6),
          paddingTop: hp(2),
          flex: 1,
        }}
      >
        <Text style={{ ...FONTS.h2, color: COLORS.secondary }}>
          Added Friends
        </Text>
        <Text style={{ ...FONTS.body4, color: COLORS.secondary }}>5 total</Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={images.profile1}
              resizeMode="contain"
              style={{
                width: wp(10),
                height: wp(10),
                borderColor: COLORS.primary,
                borderWidth: 2,
                borderRadius: wp(10),
              }}
            />
            <Image
              source={images.profile2}
              resizeMode="contain"
              style={{
                width: wp(10),
                height: wp(10),
                borderColor: COLORS.primary,
                borderWidth: 2,
                borderRadius: wp(10),
                marginLeft: wp(-4),
              }}
            />
            <Image
              source={images.profile3}
              resizeMode="contain"
              style={{
                width: wp(10),
                height: wp(10),
                borderColor: COLORS.primary,
                borderWidth: 2,
                borderRadius: wp(10),
                marginLeft: wp(-4),
              }}
            />
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.secondary,
                marginLeft: wp(2),
              }}
            >
              +2 More
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.secondary,
                marginRight: wp(3),
              }}
            >
              Add New
            </Text>
            <TouchableOpacity
              style={{
                width: wp(10),
                height: hp(5),
                backgroundColor: COLORS.lightGray,
                borderRadius: wp(3),
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={icons.plus}
                resizeMode="contain"
                style={{
                  width: "50%",
                  height: "50%",
                  tintColor: COLORS.primary,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <View style={{ backgroundColor: COLORS.gray, flex: 1 }}>
        <View
          style={{
            paddingVertical: hp(1),
            backgroundColor: COLORS.white,
          }}
        >
          <View
            style={{
              backgroundColor: COLORS.primary,
              marginHorizontal: wp(2),
              borderRadius: wp(8),
            }}
          >
            {renderNewPlants()}
          </View>
        </View>
        <View
          style={{
            height: hp("38%"),
            backgroundColor: COLORS.white,
            borderBottomLeftRadius: wp(8),
            borderBottomRightRadius: wp(8),
          }}
        >
          {renderTodayShare()}
        </View>
        <View style={{ flex: 1, backgroundColor: COLORS.gray }}>
          {renderAddedFriends()}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
