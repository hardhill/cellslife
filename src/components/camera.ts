import { OrthographicCamera, PerspectiveCamera } from "three";

export function createCamera(){
    const camera = new PerspectiveCamera(
        35, //fov
        1,  //aspect
        0.1, //near
        100    //far
    )
    
    camera.position.set(0,0,1)
    return camera
}

export function createOrthoCamera(width:number, height:number){
    const camera = new OrthographicCamera(
        width/-2,   //left
        width/2,    //right
        height/2,   //top
        height/-2,  //bottom
        0.1,        //near
        1000        //far
    )
    
    camera.position.set(0,0,10)
    return camera
}