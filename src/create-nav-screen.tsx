import * as React from 'react'
import { SectionListProps, StyleSheet, Text, View } from 'react-native'
import { NavigationScreenProps, NavigationStackScreenOptions, SectionList } from 'react-navigation'
import { LinkListItem, LinkTouchableProps } from './components/LinkListItem'
import { RouteItem } from './types'

interface NavScreenBaseProps {
  sections: SectionListProps<RouteItem>['sections']
}

export interface CreateNavScreenArgs extends NavScreenBaseProps, NavigationStackScreenOptions {
  linkProps?: {
    touchableProps: LinkTouchableProps
  }
  title: string
}

interface NavScreenProps extends NavigationScreenProps<{}> {
  sections: SectionListProps<RouteItem>['sections']
}

export function createNavScreen({
  title = 'Navigation List',
  sections,
  linkProps,
  ...navigationStackOptions
}: CreateNavScreenArgs): React.FC<NavScreenProps> {
  const NavScreen: React.FC<NavScreenProps> = (props) => {
    return (
      <SectionList
        sections={sections}
        initialNumToRender={12}
        renderItem={({ item }) => (
          <LinkListItem key={item.key} to={item.key} {...props} {...linkProps} />
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{section.key}</Text>
          </View>
        )}
      />
    )
  }

  const navigationOptions: NavigationStackScreenOptions = {
    ...navigationStackOptions,
    title,
  }
  ;(NavScreen as any).navigationOptions = navigationOptions // eslint-disable-line @typescript-eslint/no-explicit-any

  return NavScreen
}

const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  sectionHeader: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: '#F1F1F1',
    borderBottomColor: '#D1D1D1',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  sectionHeaderText: {
    fontWeight: 'bold',
  },
})
