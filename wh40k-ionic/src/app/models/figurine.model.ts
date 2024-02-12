export class Figurine {
    id?: string;
    image: string;
    name: string;
    desc: string;
    price: number;
    minFig: number;
    maxFig: number;
    minPoints: number;
    maxPoints: number


    constructor() {
        this.image = '';
        this.name = '';
        this.desc = '';
        this.price = 0;
        this.minFig = 0;
        this.maxFig = 0;
        this.minPoints = 0;
        this.maxPoints = 0;
    }
}
