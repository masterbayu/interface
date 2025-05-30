import { memo } from 'react'
import { withAnimated } from 'ui/src/components/factories/animated'
import { ArrowChange } from 'ui/src/components/icons/ArrowChange'
import { IconSizeTokens } from 'ui/src/theme'

type Props = {
  size?: IconSizeTokens
  direction?: 'n' | 's'
  color?: string
}

export function _Caret({ size = '$icon.24', color, direction = 'n' }: Props): JSX.Element {
  let degree: string
  switch (direction) {
    case 's':
      degree = '0deg'
      break
    case 'n':
      degree = '180deg'
      break
    default:
      throw new Error(`Invalid arrow direction ${direction}`)
  }

  return <ArrowChange color={color ?? '$black'} size={size} strokeWidth={2} rotate={degree} />
}

export const Caret = memo(_Caret)

export const AnimatedCaretChange = withAnimated(ArrowChange)
