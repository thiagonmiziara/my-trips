export type PageTemplateProps = {
  heading: string
  body: string
}

export type Place = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export type MapProps = {
  places?: Place[]
}
