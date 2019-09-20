export interface RouteItem {
  key: string
  title: string
}

export interface RouteMap {
  [key: string]: React.ComponentType
}

export interface RouteSectionMap {
  [key: string]: RouteMap
}
