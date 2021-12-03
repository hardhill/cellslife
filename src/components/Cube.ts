import { BoxBufferGeometry, MathUtils, Mesh, MeshStandardMaterial, MeshStandardMaterialParameters } from "three";
import { WorldObject } from "../types/WorldObject";

const params:MeshStandardMaterialParameters = {
    color:'#335588',

}
const radiansPerSecond:number = MathUtils.degToRad(30)
export class Cube extends Mesh implements WorldObject{
    
    constructor(){
        super();
        this.geometry = new BoxBufferGeometry(2,2,2,4,4,4)
        this.material = new MeshStandardMaterial(params)
        new Mesh(this.geometry,this.material)

    }
    public tick(delta:number){
        
        this.rotation.z += radiansPerSecond * delta
        this.rotation.x += radiansPerSecond * delta
        this.rotation.y += radiansPerSecond * delta
        
    }
    public Object3d() {
        return this
    }
}