[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


---

- [Install](#install)
- [Usage](#usage)
  - [`createExampleStack`](#createexamplestack)
  - [`routeToSection`](#routetosection)
  - [`createNavScreen`](#createnavscreen)
- [Components](#components)
- [Status](#status)
- [Why I created this library](#why-i-created-this-library)

---

## Install

```sh
yarn add react-navigation-example-utils
```

## Usage

### `createExampleStack`

```jsx
import { createExampleStack } from 'react-navigation-example-utils'

const Examples = {
  Example1Screen, // React Component
  Example2Screen,
  Example3Screen,
}

const homeTabRouteSectionMap = {
  Examples,
}

const HomeStack = createExampleStack({
  routeSectionMap: homeTabRouteSectionMap,
  navScreenTitle: 'Examples',
  navScreenRouteKey: 'HomeNavScreen',
  tabBarLabel: 'Home',
  tabBarIconName: Platform.OS === 'ios' ? 'ios-videocam' : 'md-videocam',
  tabScreenOptions: {
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={
          Platform.OS === 'ios'
            ? `ios-information-circle${focused ? '' : '-outline'}`
            : 'md-information-circle'
        }
      />
    ),
  },
})

const AppNavigator = createAppContainer(HomeStack)

// # if you need BottomTabNavigator
// const MainTabNavigator = createBottomTabNavigator(
//   { HomeStack },
//   { initialRouteName: 'HomeStack' },
// )

// # if you need SwitchNavigator
// const AppNavigator = createAppContainer(
//   createSwitchNavigator({
//     Main: MainTabNavigator,
//   }),
// )
```

### `routeToSection`

Used inside [`createExampleStack`](#createexamplestack)

### `createNavScreen`

Used inside [`createExampleStack`](#createexamplestack)


## Components


## Status

If anyone interested in adding new indicators, I appreciate the PR 🙌

## Why I created this library

