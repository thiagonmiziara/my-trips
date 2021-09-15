import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import LinkWrapper from 'components/LinkWrapper'
import { PlaceTemplateProps } from 'models'

import * as S from './styles'

export default function PlaceTemplate({ place }: PlaceTemplateProps) {
  return (
    <>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>

          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description.html }}
          />

          <S.Gallery>
            {place.gallery.map((image, index) => {
              return (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={image.url} alt={place.name} key={`photo-${index}`} />
              )
            })}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
