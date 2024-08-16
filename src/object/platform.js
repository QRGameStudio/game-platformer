class GEOPlatform extends GEO {
    static t = "platform";

    constructor(game) {
        super(game);
        this.t = GEOPlatform.t;
        this.w = 100;
        this.h = 20;
        this.color = "white";
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.cx - this.wh, this.cy - this.hh, this.w, this.h);
    }

    /**
     * Create platform on specific position
     * @param game {GEG}
     * @param x {number | undefined}
     * @param y {number | undefined}
     * @param width {number | undefined}
     * @param height {number | undefined}
     * @param color {string | undefined}
     * @returns {GEOPlatform}
     */
    static create(game, x = undefined, y = undefined, width = undefined, height = undefined, color = undefined) {
        const platform = new GEOPlatform(game);

        if (x !== undefined) {
            platform.x = x;
        }
        if (y !== undefined) {
            platform.y = y;
        }
        if (width !== undefined) {
            platform.w = width;
        }
        if (height !== undefined) {
            platform.h = height;
        }
        if (color !== undefined) {
            platform.color = color;
        }

        return platform;
    }
}
