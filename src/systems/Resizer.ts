import { OrthographicCamera, WebGLRenderer } from "three";
const frustumSize = 1024
const setSize = (container:Element,camera:OrthographicCamera,renderer:WebGLRenderer)=>
{
        let aspect = container.clientWidth/container.clientHeight
        camera.top = frustumSize/2
        camera.bottom = frustumSize/-2
        camera.left = -1 * aspect * frustumSize/2
        camera.right = aspect * frustumSize/2
        camera.updateProjectionMatrix()
        renderer.setSize(container.clientWidth,container.clientHeight)
        renderer.setPixelRatio(window.devicePixelRatio)
}
export class Resizer{
    constructor(container:Element,camera:OrthographicCamera,renderer:WebGLRenderer){
        setSize(container,camera,renderer)
        window.addEventListener('resize', () => {
            // set the size again if a resize occurs
            setSize(container, camera, renderer);
            // perform any custom actions
            this.onResize();
          })
    }
    onResize(){}
}