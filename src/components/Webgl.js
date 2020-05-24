import React, { Component } from "react";
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import './Webgl.css'

const nintendo = new Audio()
nintendo.src = "nintendo.wav"
nintendo.volume = 0.2;

class Webgl extends Component {
    componentDidMount() {
        // === THREE.JS CODE START ===
        const canvas = document.querySelector('canvas.webgl')
        const canvasBounding = canvas.getBoundingClientRect()
        const gltfLoader = new GLTFLoader()

        const scene = new THREE.Scene()

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
        scene.add(ambientLight)

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
        directionalLight.position.x = 5
        directionalLight.position.y = 5
        directionalLight.position.z = 5
        scene.add(directionalLight)

        const room = new THREE.Group()
        // room.scale.set(0.001, 0.001, 0.001)
        gltfLoader.load(
            'models/room/scene.gltf',
            (gltf) => {
                while (gltf.scene.children.length) {
                    const child = gltf.scene.children[0]
                    room.add(child)
                }
            },
            (progress) => {
                console.log('progress')
                console.log(progress)
            },
            (error) => {
                console.log('error')
                console.log(error)
            }
        )
        scene.add(room)
        const camera = new THREE.PerspectiveCamera(75, canvasBounding.width / canvasBounding.height, 0.01, 100)
        camera.position.z = 7
        camera.position.x = 5

        camera.position.y = 8
        scene.add(camera)
        camera.lookAt(new THREE.Vector3(0, 0, 0))

        // const cube = new THREE.Mesh(
        //     new THREE.BoxBufferGeometry(1, 1, 1),
        //     new THREE.MeshNormalMaterial()
        // )
        // scene.add(cube)

        const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true })
        renderer.setSize(canvasBounding.width, canvasBounding.height)
        renderer.setClearColor(0x000000, 0); // the default
        // Resize
        window.addEventListener('resize', () => {
            const canvasBounding = canvas.getBoundingClientRect()

            camera.aspect = canvasBounding.width / canvasBounding.height
            camera.updateProjectionMatrix()

            renderer.setSize(canvasBounding.width, canvasBounding.height)
        })

        // Animation
        const tick = () => {
            room.rotation.y += 0.005

            renderer.render(scene, camera)

            window.requestAnimationFrame(tick)
        }

        tick()
    }

    handleClick = () => {

        nintendo.play()
    }
    render() {
        return (
            <div className="webglCtnr">
                <canvas className="webgl" onClick={this.handleClick} title="Scene made by Wesai">
                </canvas>
                {/* <p>Scene made by <a href="https://sketchfab.com/Wesai" target="_blank" rel="noopener noreferrer">Wesai</a></p> */}
            </div>
        )
    }
}
export default Webgl;