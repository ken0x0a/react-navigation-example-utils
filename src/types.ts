export interface RouteItem {
  key: string
  title: string
}

export interface RouteMap {
  [key: string]: React.ComponentType<any>
}

export interface RouteSectionMap {
  [key: string]: RouteMap
}
