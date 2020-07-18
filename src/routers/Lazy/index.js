import React, { Suspense, lazy } from 'react'

export default function LazyImport(Component) {
  const ComponentLoadable = lazy(Component)

  return () => (
    <Suspense fallback={<></>}>
      <ComponentLoadable />
    </Suspense>
  )
}
