import React, { useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor'

function Animated({inView, children }) {
  return <div className={inView ? 'in' : 'out'}>{children}</div>
}

function AnimateOnVisible({ children }) {
  const [hasAnimated, setHasAnimated] = useState(false)

  const onVisibilityChange = isVisible => {
    if (isVisible) {
      setHasAnimated(true)
    }
  }
  return (
    <VisibilitySensor
      onChange={onVisibilityChange}
      minTopValue={200}
      partialVisibility={true}
    >
      {({ isVisible }) => {
        const isContentInView = isVisible || hasAnimated
        return (
          // Need an intermediary container to check actual visibility, as the animated container may be off screen
          <div>
            <Animated
              inView={isContentInView}
            >
              {children}
            </Animated>
          </div>
        )
      }}
    </VisibilitySensor>
  )
}

export default AnimateOnVisible

// Code credit: cjpete https://codesandbox.io/s/ppoo7yn5qj