import * as THREE from 'three'
import ReactDOM from 'react-dom'
import React, { Suspense } from 'react'
import { Canvas, Dom, useLoader } from 'react-three-fiber'
import earthImg from './images/earth.jpg'
import './styles.css'

function Sprite({ url, ...props }) {
  const texture = useLoader(THREE.TextureLoader, url)
  return (
    <sprite {...props}>
      <spriteMaterial attach="material" map={texture} />
    </sprite>
  )
}

ReactDOM.render(
  <Canvas>
    <Suspense fallback={<Dom>loading...</Dom>}>
      <Sprite url={earthImg} scale={[5, 3, 1]} />
    </Suspense>
  </Canvas>,
  document.getElementById('root')
)
