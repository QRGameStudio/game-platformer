class GEOPlayer extends GEO {
    /** @param game {GEG} */
    constructor(game) {
        super(game);
        this.t = "player";
        this.w = 15;
        this.h = 18;
        this.g = 4;
        // noinspection JSUnusedGlobalSymbols
        this.x = 500;
        // noinspection JSUnusedGlobalSymbols
        this.y = 500;
        // noinspection JSUnusedGlobalSymbols
        this.ia = 0;
        this.gs.add(GEOPlatform.t);
    }

    draw(ctx) {
        ctx.fillStyle = 'red';
        ctx.strokeStyle = 'orange';
        ctx.fillRect(this.x - this.wh,  this.y - this.wh, this.w, this.h);
    }
}
