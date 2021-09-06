import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const AboutTemplate = () => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Close" />
      </LinkWrapper>

      <S.Heading>My Trips</S.Heading>

      <S.Body>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          molestias laborum magnam placeat cumque accusamus fuga nobis soluta
          corporis inventore nemo itaque alias, quidem cum consectetur delectus
          ratione aut repellendus.
        </p>
      </S.Body>
    </S.Content>
  )
}

export default AboutTemplate
