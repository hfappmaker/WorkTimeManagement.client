import React from 'react'
import image from './src/assets/test.png' // `image` will be '/assets/img.2d8efhg.png' in production
 
export default function App() {
  return <img src={image.src} />
}