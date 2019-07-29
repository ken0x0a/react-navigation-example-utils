import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { colors } from '../designs/colors';

type IoniconsNameType = string
interface TabBarIconProps {
  focused: boolean
  name: IoniconsNameType,
}

export const TabBarIcon: React.FC<TabBarIconProps> = ({name, focused}) => (
      <Ionicons
        name={name}
        size={26}
        style={{ marginBottom: -3 }}
        color={focused ? colors.orange : colors.gray}
      />
    )
