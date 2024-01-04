export class Tile{

    private _tilePath : string

    public constructor(tilePath: string){
        this._tilePath = tilePath;
    }

    public get tilePath() : string {
        return this._tilePath;
    }
}