import React from "react";

export const Box: React.FC = () => {
  const getColor = (min = 0, max = 9) => {
    const hexValueArray = []
    for(let i = 1; i <= 7; i++){
      let low = Math.ceil(min)
      let high = Math.floor(max)
      hexValueArray.push(Math.floor(Math.random() * high - low + 1) + low)
    }
    hexValueArray[0] = '#'
    return hexValueArray.join('')
  }

  return (
    <div style={{background: getColor(), height: '25%', width: '16%'}}></div>
  )
}