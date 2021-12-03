import { World } from "./classes/World"

function main(){
    const container = document.querySelector('#world')
    const world = new World(container!)
    world.start()
}
main()