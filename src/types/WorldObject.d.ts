export interface WorldObject{
   tick(delta:number):void
   Object3d():Mesh
}