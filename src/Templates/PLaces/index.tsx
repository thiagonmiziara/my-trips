import { PlaceTemplateProps } from 'models'

export default function PlaceTemplate({ place }: PlaceTemplateProps) {
  return (
    <>
      <h1>{place.name}</h1>

      <div dangerouslySetInnerHTML={{ __html: place.description.html }} />

      {place.gallery.map((image, index) => {
        // eslint-disable-next-line @next/next/no-img-element
        return <img src={image.url} alt={place.name} key={`photo-${index}`} />
      })}
    </>
  )
}
