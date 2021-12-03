import { createCamera, createOrthoCamera } from "../components/camera"

import { createLight } from "../components/light"
import { createScene } from "../components/scene"
import { Loop } from "../systems/Loop"
import { createRenderer } from "../systems/renderer"
import { Resizer } from "../systems/Resizer"
import { MainGroup } from "./MainGroup"

let scene:THREE.Scene
//let camera:THREE.PerspectiveCamera
let cameraortho:THREE.OrthographicCamera
let renderer:THREE.WebGLRenderer
let loop:Loop
export class World{
    constructor(container:Element){
       scene = createScene()
       
       cameraortho = createOrthoCamera(container.clientWidth,container.clientHeight)
       renderer = createRenderer()
       container.append(renderer.domElement)
       loop = new Loop(cameraortho,scene,renderer)

       const group = new MainGroup({width:cameraortho.right*2,height:cameraortho.top*2})
       const light = createLight()
       loop.addObject(group)
       scene.add(light)

       scene.add(group)

       
       
       const resizer = new Resizer(container,cameraortho,renderer)
       resizer.onResize = ()=>{
           //this.render()
       }
    }

    public render(){
        renderer.render(scene,cameraortho)
    }

    public start(){
        loop.start()
    }

    public stop(){
        loop.stop()
    }
}