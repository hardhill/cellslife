import { Group, Vector3 } from "three";
import { Cell } from "../components/Cell";
import { WorldObject } from "../types/WorldObject";
import Utils from "./utils";

export class MainGroup extends Group implements WorldObject {

    private right: number
    private top: number
    private cells: Array<Cell>
    constructor(option: WorldOption) {
        super()
        this.right = option.width / 2
        this.top = option.height / 2
        this.cells = new Array<Cell>()
        for (let i = 0; i < 100; i++) {
            let cell = new Cell()
            let x = Utils.getRandomInt(-300, 300)
            let y = Utils.getRandomInt(-300, 300)
            cell.position.set(x, y, 0)
            this.cells.push(cell)
            this.add(cell)
        }


    }

    tick(delta: number): void {
        for (let n = 0; n < this.cells.length; n++) {
            let cell = (this.cells[n] as Cell)

            // проверка стенок
            if (cell.position.x > this.right || cell.position.x < -this.right) {

                cell.direction.x *= -1
            }
            if (cell.position.y > this.top || cell.position.y < -this.top) {
                cell.direction.y *= -1
            }


            for (let j = 0; j < this.cells.length - 1; j++) {
                if (n != j) {
                    let cell_neibor = this.cells[j] as Cell
                    let cell_one = (this.cells[n] as Cell)
                    let dx = cell_one.position.x - cell_neibor.position.x
                    let dy = cell_one.position.y - cell_neibor.position.y
                    let dist = Math.sqrt(dx * dx + dy * dy)
                    if (dist < 40) {
                        let s = 40 - dist
                        let angle = Math.atan2(dy, dx)
                        let tx = s * Math.cos(angle)
                        let ty = s * Math.sin(angle)
                        // let vec = new Vector3((cell_neibor.direction.x*-0.1),(cell_neibor.direction.y*-0.1),0)
                        // cell_neibor.setDirection(vec)
                        // let vec1 = new Vector3((cell_one.direction.x*-0.1),(cell_one.direction.y*-0.1),0)
                        // cell_one.setDirection(vec1)
                        cell_one.position.add(new Vector3(-tx,-ty))
                        cell_neibor.position.add(new Vector3(tx,ty))
                    }
                }


            }




            cell.tick(delta)
        }
    }

    Object3d() {
        throw new Error("Method not implemented.");
    }

}

export type WorldOption = {
    width: number,
    height: number

}