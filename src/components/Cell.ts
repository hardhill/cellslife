import { BufferGeometry, Mesh, Points, PointsMaterial, SpriteMaterial, TextureLoader, Vector2, Vector3 } from "three";
import Utils from "../classes/utils";
import { WorldObject } from "../types/WorldObject";

export class Cell extends Points implements WorldObject{
    direction:Vector3
    constructor(){
        super()
        let x = Utils.getRandomInRange(-1,1)
        let y = Utils.getRandomInRange(-1,1)
        this.direction = new Vector3(x,y,0)
        const map = new TextureLoader().load('texture/cell_01.png')
        this.geometry = new BufferGeometry().setFromPoints([new Vector3(0,0,0)])
        this.material = new PointsMaterial({size:50,map:map, transparent:true})
        new Points(this.geometry,this.material)
    }
    tick(delta: number): void {

        this.translateOnAxis(this.direction,1)
    }
    Object3d() {
        throw new Error("Method not implemented.");
    }

    setDirection(direction:Vector3){
        this.direction = direction
    }

}