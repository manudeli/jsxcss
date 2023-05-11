import { css } from '@emotion/react'
import { GutterOption, OptionWithMediaQuery } from '@jsxcss/core'
import { MediaQuery } from '../../responsive'

export const gutter = ({ spacing = 0 }: OptionWithMediaQuery<GutterOption>, mediaQuery?: MediaQuery) => {
  if (mediaQuery) {
    return css(mediaQuery({ gap: spacing }))
  }

  if (Array.isArray(spacing)) {
    throw new Error('If you want to use array, mediaQuery is required')
  }

  return css({ gap: spacing })
}
