import { CSSProperties, ComponentPropsWithRef, ElementType } from 'react'
import { AsComponentPropsWithoutRef } from '../common'

export type JsxCssFlex = <C extends ElementType = 'div'>(
  props: FlexProps<C> & { ref?: ComponentPropsWithRef<C>['ref'] }
) => JSX.Element | null

interface FlexOptions {
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  direction?: CSSProperties['flexDirection']
}

export type FlexProps<C extends ElementType = 'div'> = AsComponentPropsWithoutRef<C> & FlexOptions
