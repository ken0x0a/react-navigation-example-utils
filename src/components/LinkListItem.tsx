import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { NavigationScreenProps } from 'react-navigation'

export interface LinkTouchableProps {
  activeOpacity?: number
  underlayColor?: string
}
interface LinkProps extends NavigationScreenProps<{}>, LinkTouchableProps {
  to: string
  touchableProps?: LinkTouchableProps
}

export const LinkListItem: React.FC<LinkProps> = ({ to, navigation, touchableProps }) => (
  <View style={styles.borderBottom}>
    <RectButton
      onPress={() => {
        navigation.navigate(to)
      }}
      activeOpacity={0.3}
      // underlayColor="#00000000"
      underlayColor="#f18900"
      style={styles.link}
      {...touchableProps}
    >
      <Text style={styles.linkText}>{to}</Text>
    </RectButton>
  </View>
)
// export const LinkListItem: React.FC<LinkProps> = ({ to, navigation }) => (
//   <View style={styles.borderBottom}>
//     <TouchableWithoutFeedback
//       onPress={() => {
//         navigation.navigate(to)
//       }}
//     >
//       <View style={styles.link}>
//         <Text style={styles.linkText}>{to}</Text>
//       </View>
//     </TouchableWithoutFeedback>
//   </View>
// )

const styles = StyleSheet.create({
  borderBottom: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#D4D4D4',
  },
  link: { height: 44, paddingHorizontal: 14, justifyContent: 'center' },
  linkText: { letterSpacing: 0.2 },
})
