import React from 'react'
import {
  createStackNavigator,
  NavigationScreenConfigProps,
  NavigationStackScreenOptions,
  NavigationTabScreenOptions,
  StackNavigatorConfig,
} from 'react-navigation'
import { TabBarIcon } from './components/TabBarIcon';
import { createNavScreen } from './create-nav-screen'
import { routeToSection } from './route-to-sections'
import { RouteMap, RouteSectionMap } from './types'

interface CreateExampleStackArgs {
  /**
   * @nonTypeSafe Should not use if possible
   */
  // initialRouteName?: string
  // navScreen: CreateNavScreenArgs
  /**
   * must be
   * - no-space
   * - pascal case
   */
  navScreenRouteKey: string
  navScreenTitle: string
  // routeMap: RouteMap
  routeSectionMap: RouteSectionMap
  stackConfig?: StackNavigatorConfig
  stackDefaultNavigationOptions?: NavigationStackScreenOptions
  /**
   * icon name should be typed
   */
  tabBarIconName: string
  tabBarLabel: string
  tabScreenOptions?:
    | NavigationTabScreenOptions
    | ((props: NavigationScreenConfigProps) => NavigationTabScreenOptions)
}

export function createExampleStack({
  // routeMap,
  routeSectionMap,
  //
  stackConfig,
  stackDefaultNavigationOptions = { headerBackTitle: null },
  //
  tabScreenOptions,
  tabBarLabel,
  tabBarIconName,
  // initialRouteName,
  navScreenRouteKey,
  navScreenTitle,
}: CreateExampleStackArgs) {
  const sections = routeToSection(routeSectionMap)
  const NavScreen = createNavScreen({ title: navScreenTitle, sections })
  const routeMap = Object.values(routeSectionMap).reduce<RouteMap>(
    (pv, cv) => ({ ...pv, ...cv }),
    {},
  )

  const ExampleStack = createStackNavigator(
    {
      [navScreenRouteKey]: {
        screen: NavScreen,
        navigationOptions: {
          headerTransparent: false,
        },
      },
      ...routeMap,
    },
    {
      // initialRouteName: initialRouteName ? initialRouteName : navScreenRouteKey,
      initialRouteName: navScreenRouteKey,
      ...stackConfig,
      defaultNavigationOptions: {
        ...(stackConfig ? stackConfig.defaultNavigationOptions : undefined),
        ...stackDefaultNavigationOptions,
      },
    },
  )
  ExampleStack.navigationOptions = (
    props: NavigationScreenConfigProps,
  ): NavigationTabScreenOptions => ({
    tabBarLabel,
    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={tabBarIconName} />,
    ...(typeof tabScreenOptions === 'function' ? tabScreenOptions(props) : tabScreenOptions),
  })

  return ExampleStack
}
