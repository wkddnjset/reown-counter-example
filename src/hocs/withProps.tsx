import { ReactElement } from 'react'

import { Parameter } from '@toktokhan-dev/universal'

type PratialByKey<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export const withProps = <
  C extends (...props: any[]) => ReactElement,
  P extends Partial<Parameter<C>>,
>(
  Component: C,
  initial: P,
) =>
  function WrappedComponent(props: PratialByKey<Parameter<C>, keyof P>) {
    return <Component {...{ ...initial, ...(props as any) }} />
  }
