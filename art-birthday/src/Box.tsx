import React, { useEffect, useState } from "react";

export const Box: React.FC = () => {
  const [colorValue, setColorValue] = useState('#fff')

  useEffect(() => {
    const getColorValue = (): string => {
      const newValue = 'red'
      setColorValue(newValue)
      return colorValue
    }
    getColorValue()
    return
  }, [colorValue])

  return (
    <div style={{ background: colorValue, height: '25%', width: '20%', border: '1px solid' }}>Box</div>
  )
}