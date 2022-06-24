import {
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
import { requirementsData } from "../../data";

function renderHeader(navigation, item) {
  return (
    <View style={{ height: hp(30) }}>
      <ImageBackground
        style={{
          width: "100%",
          height: "100%",
        }}
        source={images.bannerBg}
        resizeMode="cover"
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: wp(6),
            marginTop: hp(2),
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              width: wp(10),
              height: wp(10),
              backgroundColor: COLORS.lightGray,
              borderRadius: wp(8),
              opacity: 0.4,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={icons.back}
              style={{ height: hp(4), width: wp(4) }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={icons.focus}
              style={{ height: hp(5), width: wp(5) }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: wp(60),
            marginHorizontal: wp(6),
            marginTop: hp(3),
          }}
        >
          <Text style={{ ...FONTS.largeTitle, color: COLORS.white }}>
            {item.name}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

function renderRequirements() {
  return (
    <View
      style={{
        paddingTop: hp(2),
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: wp(4),
        }}
      >
        <Text style={{ ...FONTS.h3, color: COLORS.secondary }}>
          Requirements
        </Text>
        <View
          style={{
            width: wp(8),
            height: hp(0.3),
            backgroundColor: COLORS.gray,
          }}
        ></View>
      </View>

      {/* render icons */}
      <View
        style={{
          width: "100%",
          height: hp(10),
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: wp(4),
        }}
      >
        {requirementsData.map((item) => (
          <IconReq
            key={`req-icon-${item.id}`}
            icon={item.icon}
            value={item.value}
            total={item.total}
          />
        ))}
      </View>

      {/* render requirements info */}
      <View style={{ marginTop: hp(3), paddingHorizontal: wp(4), flex: 1 }}>
        {requirementsData.map((item) => (
          <InfoReq
            key={`info-req-${item.id}`}
            icon={item.icon}
            name={item.name}
            value={item.value}
            unit={item.unit}
          />
        ))}
      </View>

      {/* render take action */}
      <View
        style={{
          height: hp(10),
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: COLORS.primary,
            borderTopRightRadius: wp(4),
            borderBottomRightRadius: wp(4),

            // justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <View style={{ flex: 0.5 }}></View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Text style={{ ...FONTS.h4, color: COLORS.lightGray }}>
              Take Action
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              paddingLeft: wp(2),
            }}
          >
            <Image
              source={icons.chevron}
              resizeMode="contain"
              style={{
                width: wp(4),
                height: hp(4),
              }}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            flex: 1.6,
            flexDirection: "row",
            borderTopRightRadius: wp(4),
            borderBottomRightRadius: wp(4),

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 0.2 }}></View>
          <View
            style={{
              flex: 0.8,
            }}
          >
            <Text style={{ ...FONTS.h4, color: COLORS.gray }}>
              Almost 2 week of growing time
            </Text>
          </View>
          <View style={{ flex: 0.2 }}>
            <Image
              source={icons.downArrow}
              resizeMode="contain"
              style={{ width: wp(4), height: hp(4) }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

function IconReq({ icon, value, total }) {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View
        style={{
          width: wp(12),
          height: hp(7),
          marginTop: hp(3),

          borderRadius: wp(4),
          borderColor: COLORS.gray,
          borderWidth: wp(0.3),
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={icon}
          style={{ width: wp(5), height: hp(5) }}
          resizeMode="contain"
        />
      </View>
      <ImageBackground
        style={{
          marginTop: hp(1),
          width: "70%",
          borderRadius: wp(3),
          borderWidth: hp(0.2),
          borderColor: COLORS.gray,
          backgroundColor: COLORS.gray,
        }}
      >
        <View
          style={{
            top: 0,
            left: 0,
            borderRadius: wp(3),
            borderWidth: hp(0.2),
            width: `${(value / total) * 100}%`,
            borderColor: COLORS.primary,
          }}
        ></View>
      </ImageBackground>
    </View>
  );
}

function InfoReq({ icon, value, unit, name }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: hp(7),
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: wp(6),
            height: hp(6),
            marginRight: wp(2),
          }}
        />
        <Text style={{ ...FONTS.h4, color: COLORS.secondary }}>{name}</Text>
      </View>
      <Text style={{ ...FONTS.body4, color: COLORS.gray }}>
        {value} {unit}
      </Text>
    </View>
  );
}

export default function PlantingDetail({ route, navigation }) {
  const { item } = route.params;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {renderHeader(navigation, item)}
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.lightGray,
          borderTopLeftRadius: wp(8),
          borderTopRightRadius: wp(8),
          position: "absolute",
          width: "100%",
          height: hp(65),
          bottom: 0,
        }}
      >
        {renderRequirements()}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
