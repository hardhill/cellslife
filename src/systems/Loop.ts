import { Clock, Mesh, OrthographicCamera, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { Cube } from "../components/Cube";
import { WorldObject } from "../types/WorldObject";



export class Loop{

    private camera:OrthographicCamera
    private scene:Scene
    private renderer:WebGLRenderer
    private clock:Clock
    private updatebles:Array<WorldObject>

    constructor(camera:OrthographicCamera, scene:Scene, renderer:WebGLRenderer){
        this.camera = camera
        this.scene = scene
        this.renderer = renderer
        this.clock = new Clock()
        this.updatebles = []
    }

    public start(){
        this.renderer.setAnimationLoop(()=>{
            this.tick()
            // render a frame
            
            this.renderer.render(this.scene, this.camera);
        })
    }

    private tick(){
        const delta = this.clock.getDelta()
        this.updatebles.forEach((value)=>{
           value.tick(delta)
        })
    }

    public stop(){
        this.renderer.setAnimationLoop(null)
    }

    public addObject(object:WorldObject){
        this.updatebles.push(object)
    }
}