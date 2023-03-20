
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model3d(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("./blender.glb")
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Sphere_0">
                <mesh name="mesh_0" geometry={nodes.mesh_0.geometry} material={materials['Scene_-_Root']} morphTargetDictionary={nodes.mesh_0.morphTargetDictionary} morphTargetInfluences={nodes.mesh_0.morphTargetInfluences} />
              </group>
              <group name="Sphere001_1">
                <mesh name="mesh_1" geometry={nodes.mesh_1.geometry} material={materials['Scene_-_Root']} morphTargetDictionary={nodes.mesh_1.morphTargetDictionary} morphTargetInfluences={nodes.mesh_1.morphTargetInfluences} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./blender.glb"')
