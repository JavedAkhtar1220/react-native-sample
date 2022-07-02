import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { SvgXml } from 'react-native-svg';
import { COLORS, FONTREGULAR } from '../../assets/constants';
// import home from '@/assets/svg/home.svg';
import home from '../../assets/svg/home.svg';
import homeActive from '../../assets/svg/homeActive.svg';
import message from '../../assets/svg/message.svg';
import todo from '../../assets/svg/todo.svg';
import todoActive from '../../assets/svg/todoActive.svg';
import user from '../../assets/svg/user.svg';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';



const _getIcon = (label, isFocused) => {
  switch (label) {
    case 'Home':
      return (
        <View>
          <Octicons name='home' style={isFocused ? styles.activeBtn : styles.inActiveBtn} />
        </View>
      );
    case 'Notifications':
      return (
        <View>
          <Ionicons name='ios-notifications-outline' style={isFocused ? styles.activeBtn : styles.inActiveBtn} />

        </View>
      );
    // case 'Journey':
    //   return (
    //     <View>
    //       <SvgXml xml={isFocused ? todoActive : todo} width={30} height={30} />
    //     </View>
    //   );
    default:
      return (
        <View>
          <Ionicons name='settings-outline' style={isFocused ? styles.activeBtn : styles.inActiveBtn} />
        </View>
      );
  }
};

const MyTabBar = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 80,
        paddingHorizontal: 20,
        backgroundColor: '#fff'
      }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            key={index}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',

            }}>
            <View
              style={{
                height: 70,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {_getIcon(label, isFocused)}
              <Text
                style={{
                  color: isFocused ? COLORS.activeTab : COLORS.inActiveTab,
                  marginTop: 5,
                  textAlign: 'center',
                  fontFamily: FONTREGULAR,
                  fontSize: 12
                }}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: '10%',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.5,
    shadowRadius: 16,
    elevation: 12,
  },
  activeTab: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '10%',
    height: '10%',
    // borderRadius: 22,
    // backgroundColor: 'white',
    opacity: 1,
  },
  inActiveTab: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '10%',
    height: '10%',
    borderRadius: 30,
    opacity: 0.5,
  },
  activeLabel: {
    // fontSize: hp(1.6),
    color: '#2E2E2E',
  },
  inactiveLabel: {
    // fontFamily: FONT1REGULAR,
    // fontSize: hp(1.6),
    color: 'rgba(18, 18, 29, 0.3)',
  },
  activeBtn: {
    fontSize: 26,
    color: COLORS.activeTab
  },
  inActiveBtn: {
    fontSize: 26,
    color: COLORS.inActiveTab
  }
});

export default MyTabBar;
