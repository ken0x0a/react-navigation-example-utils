import { SectionBase } from 'react-native'
import { RouteItem } from './types'

export function routeToSection(routesMap: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: { [key: string]: any }
}): SectionBase<RouteItem>[] {
  return Object.entries(routesMap).map(([sectionKey, routes]) => ({
    data: Object.entries(routes).map(([key, _screenComp]) => ({
      key,
      title: key,
    })),
    key: sectionKey,
  }))
}
